import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite um usuário do github.');
      return;
    }
    try {
      const response = await api.get<Repository[]>(`users/${newRepo}/repos`);
      setRepositories(response.data);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Usuário não encontrado.');
    }
  }

  return (
    <>
      <Title>Explore repositórios do GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do usuário"
        />
        <button type="submit">Buscar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="Teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={24} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;

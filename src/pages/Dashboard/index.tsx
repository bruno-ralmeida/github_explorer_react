import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do GitHub</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Buscar</button>
      </Form>
      <Repositories>
        <a href="Teste">
          <img
            src="https://avatars.githubusercontent.com/u/45535135?v=4"
            alt="Perfil git"
          />
          <div>
            <strong>bruno-ralmeida/github_explorer_react</strong>
            <p>Repositório de estudos em React.js</p>
          </div>

          <FiChevronRight size={24} />
        </a>
        <a href="Teste">
          <img
            src="https://avatars.githubusercontent.com/u/45535135?v=4"
            alt="Perfil git"
          />
          <div>
            <strong>bruno-ralmeida/github_explorer_react</strong>
            <p>Repositório de estudos em React.js</p>
          </div>

          <FiChevronRight size={24} />
        </a>
        <a href="Teste">
          <img
            src="https://avatars.githubusercontent.com/u/45535135?v=4"
            alt="Perfil git"
          />
          <div>
            <strong>bruno-ralmeida/github_explorer_react</strong>
            <p>Repositório de estudos em React.js</p>
          </div>

          <FiChevronRight size={24} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

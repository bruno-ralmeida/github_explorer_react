/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import logoImg from './assets/logo.svg';
import GlobalStyle, { InputTheme, Menu } from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    const defaultTheme = localStorage.getItem('@GithubExplorer:theme');

    if (defaultTheme) return defaultTheme;
    return 'true';
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:theme', theme);
  }, [theme]);

  function handleSetTheme(isChecked: boolean) {
    setTheme(`${isChecked}`);
  }

  return (
    <>
      <BrowserRouter>
        <Menu>
          <img src={logoImg} alt="Github Explorer" />

          <InputTheme>
            <label htmlFor="ipt_theme">
              <input
                type="checkbox"
                id="ipt_theme"
                checked={theme === 'true'}
                onChange={(e) => handleSetTheme(e.target.checked)}
              />
              <span />
            </label>
          </InputTheme>
        </Menu>
        <Routes />
        <GlobalStyle defaultTheme={!(theme == 'true')} />
      </BrowserRouter>
    </>
  );
};
export default App;

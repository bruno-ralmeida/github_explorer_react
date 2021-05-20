/* eslint-disable eqeqeq */
import styled, { createGlobalStyle, css } from 'styled-components';
import colors from './colors';

import githubBackground from '../assets/github-background.svg';

interface globalProps {
  defaultTheme: boolean;
}

export const Menu = styled.nav`
  justify-content: space-between;
  display: flex;
  max-height: 80px;
  width: auto;
`;

export const InputTheme = styled.div`
  label {
    position: relative;
    width: 1.8rem;
    height: 1.125rem;
    border-radius: 1.8rem;
    display: inline-block;
    background: ${colors.lightGray};

    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: 0.4s;
    }
    span:before {
      position: absolute;
      content: '';
      height: 1rem;
      width: 1rem;
      top: 1px;
      left: 1px;
      background: ${colors.white};
      transition: 0.4s;
    }
    input {
      display: none;

      &:checked ~ span {
        background: ${colors.green};
      }

      &:focus ~ span {
        box-shadow: 0 0 1px ${colors.gray100};
      }

      &:checked ~ span:before {
        transform: translateX(0.75rem);
      }
    }

    span {
      border-radius: 30px;

      &:before {
        border-radius: 50%;
      }
    }
  }
`;

export default createGlobalStyle<globalProps>`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) =>
      props.defaultTheme
        ? `${colors.white}`
        : `${colors.gray125}`}  url(${githubBackground}) no-repeat 70% top;

    -webkit-font-smoothing: antialiased;

    ${(props) =>
      props.theme &&
      css`
        background: ${colors.darkGray} url(${githubBackground}) no-repeat 70%
          top;
      `}
  }

  body, input, button {
    font: 1rem 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem
  }
`;

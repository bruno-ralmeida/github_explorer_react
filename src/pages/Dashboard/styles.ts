import styled, { css, createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

interface FormProps {
  hasError: boolean;
}

export default createGlobalStyle``;

export const Title = styled.h1`
  color: ${colors.darkGray};
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin-top: 5rem;
  max-width: 28rem;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 2.5rem;
  max-width: 43.75rem;

  input,
  button {
    border-radius: 0.3rem 0 0 0.3rem;
    border: 0;
    height: 4.375rem;
    padding: 0 1.5rem;
  }

  input {
    border: 2px solid ${colors.white};
    color: ${colors.darkGray};
    flex: 1;

    ${(props) =>
      props.hasError &&
      css`
        border: 2px solid ${colors.red};
        border-right: 0;
      `}

    &::placeholder {
      color: ${colors.lightGray};
    }
  }

  button {
    background: ${colors.green};
    border-radius: 0 0.3rem 0.3rem 0;
    border: 0;
    color: ${colors.white};
    font-weight: bold;
    transition: background-color 0.2s;
    width: 13rem;

    &:hover {
      background: ${shade(0.2, colors.green)};
    }
  }
`;

export const Repositories = styled.section`
  margin-top: 5rem;
  max-width: 43.75rem;

  a {
    align-items: center;
    background: ${colors.white};
    border-radius: 0.325rem;
    display: flex;
    padding: 1.5rem;
    text-decoration: none;
    width: 100%;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(0.625rem);
    }

    & + a {
      margin-top: 1rem;
    }

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 1rem;

      strong {
        font-size: 1.25rem;
        color: ${colors.gray150};
      }

      P {
        font-size: 1.15rem;
        color: ${colors.gray100};
        margin-top: 0.25rem;
      }
    }
    svg {
      margin-left: auto;
      color: ${colors.gray50};
    }
  }
`;

export const Error = styled.span`
  color: ${colors.red};
  display: block;
  margin-top: 0.5rem;
`;

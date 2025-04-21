import styled from 'styled-components';

export const Form = styled.form`
  margin: 2em 0;
  padding: 0.7em 1em;
  border: 2px solid #6e6e6e;
  border-radius: 0.5em;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.3em;
  margin-top: 0.5em;
`;

export const Label = styled.label`
  display: block;
  padding-bottom: 8px;
  font-weight: bold;
  font-style: normal;
  font-size: small;
  color: var(--secondary-color);
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  min-height: 1em;
  padding: 0px 10px;
  font-family: 'Comfortaa', cursive;
  font-size: 1em;
  font-weight: normal;
  color: rgb(0, 0, 0);
  background-color: #fff;
  background-clip: padding-box;
  border: 2px solid #6e6e6e;
  appearance: none;
  border-radius: 0.5em;
  height: 38px;
  margin-top: 5px;

  &:focus {
    outline: none;
    border-color: var(--primary-color, #007bff);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

export const Button = styled.button`
  font-family: 'Comfortaa', cursive;
  padding: 0.375em 0.75em;
  font-weight: 700;
  color: white;
  text-align: center;
  vertical-align: middle;
  background-color: var(--btn, #007bff);
  border: 1px solid transparent;
  font-size: medium;
  border-radius: 0.276em;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--btn-hover, #0056b3);
  }

  &:disabled {
    background-color: var(--btn-disabled, #cccccc);
    cursor: not-allowed;
    opacity: 0.65;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: var(--error-color, #dc3545);
  font-size: 0.875rem;
  margin-top: 0.25em;
  font-family: 'Comfortaa', cursive;
`;

import styled from 'styled-components';

const Button = styled.button`
  background-color: #30393c;
  color: #fff;
  border-radius: 5px;
  height: 25px;
  padding: 0 20px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: default;
    background-color: #797e80;
  }
`;

export default Button;

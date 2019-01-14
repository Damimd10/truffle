import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 25px;
  color: #591919;
  font-weight: bold;
  text-transform: uppercase;
`;

const ServiceError = ({ message }) => <ErrorContainer>{message}</ErrorContainer>;

export default ServiceError;

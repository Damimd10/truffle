import styled from 'styled-components';

const Container = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  font-family: 'Lato', sans-serif;
  background-color: ${props => (props.background === 'transparent' ? 'none' : '#f9f9f9')};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  margin: 0 auto;
`;

Container.displayName = 'Container';

export default Container;

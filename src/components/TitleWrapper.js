import styled from 'styled-components';

const Title = styled.h1`
  font-size: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #05867E;
`

export default function TitleWrapper() {
  return (
    <Title>Clicker App</Title>
  );
}
  
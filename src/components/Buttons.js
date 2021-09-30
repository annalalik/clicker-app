import styled from 'styled-components';

const StyledButton = styled.button`
  display: 'block';
  background-color: ${props => props.reset ? '#EB6A0A' : '#05867E'};
  margin: 10px;
  padding: 10px;
  width: 200px;
  height: 100px;
  border-radius: 8px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1.5px;
  :hover {
    background-color: white;
    color: ${props => props.reset ? '#EB6A0A' : '#05867E'};
  }
`

export default function Buttons(props) {
  return (
    <>
      <StyledButton onClick={() => props.showIsVisible('left')}>left</StyledButton>
      <StyledButton reset onClick={() => props.reset()}>reset</StyledButton>
      <StyledButton onClick={() => props.showIsVisible('right')}>right</StyledButton>
    </>
  );
}

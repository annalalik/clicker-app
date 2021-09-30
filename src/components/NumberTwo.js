import styled from 'styled-components';

const Number = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'};
  font-size: 30px;
  color: #05867E;
`

export default function NumberTwo(props) {
  return (
    <Number isVisible={props.isVisible}>2</Number>
  );
}
  
  
import styled from 'styled-components';

const Number = styled.div`
  display: none;display: ${props => props.isVisible ? 'block' : 'none'};
  font-size: 30px;
  color: #05867E;
`

export default function NumberThree(props) {
  return (
    <Number isVisible={props.isVisible}>3</Number>
  );
}
  
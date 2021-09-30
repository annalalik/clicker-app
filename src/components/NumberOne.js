import styled from 'styled-components';

const Number = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'};
  font-size: 30px;
  color: #05867E;
`

export default function NumberOne(props) {
  return (
    <Number isVisible={props.isVisible}>1</Number>
  );
}
  
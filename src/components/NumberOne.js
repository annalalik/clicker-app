import styled from 'styled-components';

const NumberWrapper = styled.div`
    display: ${props => props.isVisible ? 'block' : 'none'};
`

export default function NumberOne(props) {
    return (
      <NumberWrapper isVisible={props.isVisible}>
            <div>1</div>
      </NumberWrapper>
    );
  }
  
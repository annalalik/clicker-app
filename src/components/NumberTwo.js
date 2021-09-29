import styled from 'styled-components';

const NumberWrapper = styled.div`
    display: ${props => props.isVisible ? 'block' : 'none'};
`

export default function NumberThree(props) {
    return (
      <NumberWrapper isVisible={props.isVisible}>
            <div>2</div>
      </NumberWrapper>
    );
  }
  
  
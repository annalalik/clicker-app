

export default function Buttons(props) {
  return (
    <>
          <button onClick={() => props.showIsVisible('left')}>left</button>
          <button onClick={() => props.reset()}>reset</button>
          <button onClick={() => props.showIsVisible('right')}>right</button>
    </>
  );
}

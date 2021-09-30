import './App.css';
import Buttons from './components/Buttons';
import NumberOne from './components/NumberOne';
import NumberThree from './components/NumberThree';
import NumberTwo from './components/NumberTwo';
import TitleWrapper from './components/TitleWrapper';
import { useState, useEffect } from "react";

function App() {
  const [isComponentsVisible, setIsComponentsVisible] = useState([false, false, false]);
  const [count, setCount] = useState(-1);
  const [direction, setDirection] = useState('');

  const setComponentsVisibility = (direction) => {
    setCount(0);
    setDirection(direction);
  }

  useEffect(() => {
    if(count !== -1) {
      const timeout = setTimeout(() => {
        let newIsComponentsVisible = [false, false, false];

        if (count < isComponentsVisible.length) {
            if(direction === 'right') {
                newIsComponentsVisible[count] = true;
            } else {
                newIsComponentsVisible[newIsComponentsVisible.length - 1 - count] = true;
            }
            setIsComponentsVisible(newIsComponentsVisible);
            setCount(count+1);
        } else if (count === 3) {
            setCount(-1);
            newIsComponentsVisible = [true, true, true];
            setIsComponentsVisible(newIsComponentsVisible);
        }     
      },1000);
    
      return () => clearTimeout(timeout);
    }
  })


  const backToDefault = () => {
    if (isComponentsVisible.every((item) => item === true)) {
      setIsComponentsVisible([false, false, false]);
    }

    setCount(-1);
  }

  return (
    <div className="App">
      <TitleWrapper></TitleWrapper>
      <Buttons showIsVisible={setComponentsVisibility} reset={backToDefault}/>
      <div>
        <NumberOne isVisible={isComponentsVisible[0]} />
        <NumberTwo isVisible={isComponentsVisible[1]} />
        <NumberThree isVisible={isComponentsVisible[2]} />
      </div>
    </div>
  );
}

export default App;

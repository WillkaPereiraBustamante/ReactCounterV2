import ButtonLess from './ButtonLess';
import ButtonMore from './ButtonMore';
import ButtonClear from './ButtonClear';
import { useState } from 'react';


const Counter = () => {

    const [counter, setCounter] = useState(0);
  
    return <>
        <div className="content">
        <div className="firstButtons">
          <ButtonLess counter={counter} setCounter={setCounter} />
          <p>{counter}</p>
          <ButtonMore counter={counter} setCounter={setCounter} /> 
        </div> 

        <div className="clearButton">
          <ButtonClear counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </>
    ;
  };

export default Counter;
  
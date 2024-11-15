import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import Footer from './components/Footer'

function App() {

  const [counterTab, setCounterTab] = useState([<Counter/>]);
  
  return (
    <>
      <Header/>
      <div className="addCounter">
      <button onClick={() =>{
        counterTab.length < 3 ? (setCounterTab([...counterTab, <Counter/> ])) : ([])      
      }}>Add counter</button>
      </div>

      <div className="counterContainer">
        {counterTab.map((counter, index) => {
          return <div key={index} >{counter}</div>
        })}
      </div>
    
      <Footer/>    
    </>
  )
}

export default App;

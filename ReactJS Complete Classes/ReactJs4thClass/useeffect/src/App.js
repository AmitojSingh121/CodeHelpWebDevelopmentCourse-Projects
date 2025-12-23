import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
 const[text , setText] = useState('');
  function changeHandler(event){
    console.log(text);
  }
  return(
    <div className="App">
      <input  type='text' onChange={changeHandler}></input>
    </div>
  )
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Topic from './Components/Topic';


const App =()=>
{
  const[pagenumber, setPagenumber]= useState(0);

  return(<div>
    {
      pagenumber===0? <Home setPagenumber={setPagenumber}/>:null
    }
    {
      pagenumber===1? <Topic/>:null
    }
  </div>)
}

export default App;

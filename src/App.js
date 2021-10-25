
import './App.css';
import React, { useState } from 'react';
import Newdps from './newdps.png'
function App() {
  const [inputAddress, setInputAddress] = useState('');
  const [msg, setMsg] = useState('');
  let whitelist = require('./addresses_1.json');
  const checkAddress = (addr) => {
    for(var i=0;i<whitelist.length;i++){
      if(whitelist[i] === addr)
      { 
        setMsg("Congratulations you are eligible for the mint!")
        break;
      }
      setMsg("Sorry, you are not eligible for the mint.");
    }
  }
  return (
    
    <div className="App">
       <div id="drop-check-form">
            <div id="img">
                <img src={Newdps} alt=""></img>
            </div> 
            <form>
            <input name="a" id="a" type="text" value={inputAddress} maxlength="42" placeholder="Address" onChange={(val) => setInputAddress(val.target.value)}/>
            </form>
           
            <button id="send" onClick={()=>{checkAddress(inputAddress);}}>Check</button>
            <span id="msg">{msg}</span>
        </div>
    </div>
  );
}

export default App;

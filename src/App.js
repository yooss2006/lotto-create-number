import './App.css';
import { useState } from 'react';

function App() {
  let [isList, ListSwitch] = useState(false);
  let [titleName, titleNameChange] = useState("lotto number maker");
  
  
  function listSwitch(){
    let newTitle = "";
    if(!isList){
      for(let i=0; i<titleName.length; i++){
        setTimeout(function(){
          newTitle += titleName[i];
        titleNameChange(newTitle);
        }, 100*i)
      }
    }
    ListSwitch(!isList);
  }

  return (
    <div className="App">
      <div className="gnb">
        <h1><span onClick={listSwitch}>🎱</span> {titleName}</h1>
      </div>

      {
      isList ?
      <List/> :
      null 
      }
      
    </div>
  );
}

function List() {
  return (
    <div className="list">
      <span>랜덤 번호</span>
      <span>번호 게임</span>
    </div>
  )
}

export default App;

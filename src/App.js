import './App.css';
import { useState } from 'react';

function App() {
  let [isList, ListSwitch] = useState(false);
  let [titleName, titleNameChange] = useState("lotto number maker");
  
  
  function listSwitch(){

    let newTitle = "";
    if(!isList){

      document.querySelectorAll('.gnb')[0].classList.remove('gnbHeight');
      for(let i=0; i<titleName.length; i++){
        setTimeout(function(){
          newTitle += titleName[i];
        titleNameChange(newTitle);
        }, 100*i)
      }
    }else{
      document.querySelectorAll('.gnb')[0].classList.add('gnbHeight');
    }
    ListSwitch(!isList);
  }

  return (
    <div className="App">
      <div className="gnb gnbHeight">
        <h1><span onClick={listSwitch}>🎱</span> {titleName}</h1>
        {
          !isList ?
          <p>로또번호 생성장소에 오신 것을 환영합니다. 번호가 적힌 공을 클릭하세요</p> :
          null
        }
      </div>

      
      <div className="bodyContainer">
      {
      isList ?
      <List/> :
      null 
      }
        <video autoPlay muted loop>
          <source src="https://cdn.videvo.net/videvo_files/video/free/2013-07/large_watermarked/hd0046_preview.mp4" type="video/mp4"/> 
        </video>
      </div>

    </div>
  );
}

function List() {
  return (
    <span className="list">
      <span>랜덤 번호</span>
      <span>번호 게임</span>
    </span>
  )
}

export default App;

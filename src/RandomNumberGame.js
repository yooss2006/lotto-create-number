import React from "react";
import {Button} from 'react-bootstrap';
import './RandomNumberGame.scss'
function RandomNumberGame(props){
    
    function random(){
        return Math.floor(Math.random()*45+1);
    }

    function 랜덤번호대입하기(index){
        let 번호 =  random();
        let 번호검사 = props.lotto번호.findIndex((a)=>{return a===번호})
        if(번호검사>=0){
            for(let i=0; i<10; i++){
                번호 =  random();
                console.log("중복발생")
                번호검사 = props.lotto번호.findIndex((a)=>{return a===번호})
                if(번호검사<0){
                    let array = [...props.lotto번호];
                    array[index]=번호;
                    props.lotto번호수정(array);
                    break;
                }
            }
        }else{
            let array = [...props.lotto번호];
            array[index]=번호;
            props.lotto번호수정(array);
        } 
    }
    
    function 전체랜덤(){
        let array =[0,0,0,0,0,0];
        array.forEach(function(data, index){
            let 번호 =  random();
            let 번호검사 = array.findIndex((a)=>{return a===번호})
           if(번호검사<0){
               array[index] = 번호
           } else{
                for(let i=0; i<10; i++){
                    번호 =  random();
                    번호검사 = props.lotto번호.findIndex((a)=>{return a===번호})
                    if(번호검사<0){
                        array[index]=번호
                        break;
                    }
            }
           }
        })
        props.lotto번호수정(array);
    }

    let 색깔 = ()=>{
       let random = Math.floor(Math.random()*props.색상배열.length);
       return props.색상배열[random];
    }

    
    return (
    <div className="gameContainer">
      <span className="lottoBox"><div className="outsideCircle" onClick={()=>{랜덤번호대입하기(0)}}><div className="insideCircle">{props.lotto번호[0]}</div></div></span>
      <span className="lottoBox"><div className="outsideCircle" onClick={()=>{랜덤번호대입하기(1)}}><div className="insideCircle">{props.lotto번호[1]}</div></div></span>
      <span className="lottoBox"><div className="outsideCircle" onClick={()=>{랜덤번호대입하기(2)}}><div className="insideCircle">{props.lotto번호[2]}</div></div></span>
      <span className="lottoBox"><div className="outsideCircle" onClick={()=>{랜덤번호대입하기(3)}}><div className="insideCircle">{props.lotto번호[3]}</div></div></span>
      <span className="lottoBox"><div className="outsideCircle" onClick={()=>{랜덤번호대입하기(4)}}><div className="insideCircle">{props.lotto번호[4]}</div></div></span>
      <span className="lottoBox"><div className="outsideCircle" onClick={()=>{랜덤번호대입하기(5)}}><div className="insideCircle">{props.lotto번호[5]}</div></div></span>
      <div className="clearBoth"></div>
      <div>
        <Button variant="light" onClick={전체랜덤}>전체 랜덤 뽑기</Button>
        <Button variant="light" onClick={()=>{props.lotto번호수정([0,0,0,0,0,0])}}>새로고침</Button>
        <h2>당첨번호</h2>
        <h5>😁 : 
            <span>{props.lotto번호[0]}</span>
            <span>{props.lotto번호[1]}</span>
            <span>{props.lotto번호[2]}</span>
            <span>{props.lotto번호[3]}</span>
            <span>{props.lotto번호[4]}</span>
            <span>{props.lotto번호[5]}</span>
        </h5>
      </div>
      </div>
      )
  }
  export default RandomNumberGame;
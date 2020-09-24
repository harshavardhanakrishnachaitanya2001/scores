import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React , { useState, useEffect } from 'react';

export default function Home() {

const [player,setPlayer]=useState('');
const [players,setPlayers]=useState([]);
const [score,setScore]=useState(0);

function handleChange(e){
  e.preventDefault();
  setPlayer(e.target.value)
}

function handleSubmit(e){
  e.preventDefault();
  let temeraryList=[];
  temeraryList=[...players];
  temeraryList.push(player);
  setPlayers(temeraryList)
}

useEffect(()=>{
  console.log(players)
}, [players])

function increment(){
  setScore(score+1)
}

function decrement(){
  setScore(score-1);
}

 return (
    <div style={{textAlign:'center'}}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1 className={styles.title}>Scores</h1>
      <form onSubmit={handleSubmit}>
        Player Name: <input type='text' placeholder='Player' style={{textAlign:'center'}} onChange={handleChange}  required />
        <input type='submit' value='Add player' style={{cursor:'pointer', marginLeft:'5px'}}/>
      </form>
      {
        players.map(player=>{
          return (
            <div key={player}>
            <p>{player}: {score}</p>
            <button onClick={increment}  style={{cursor:'pointer'}} disabled={score===30?"true":""}>Increment</button>
            <button onClick={decrement} style={{cursor:"pointer"}} disabled={score===30||score<0?"true":""}>Decrement</button>
            </div>
          )
        })
      }
    </div>
  )
}

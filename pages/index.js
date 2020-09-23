import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React , { useState, useEffect } from 'react';

export default function Home() {

const [player,setPlayer]=useState('');
const [players,setPlayers]=useState([]);
const [score,setScore]=useState(0);
const [show, setShow]=useState(true);

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
  if(score+1===10){
    setScore('winer');
    setShow(false);
  }
}

 return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1 className={styles.title}>Scores</h1>
      <form onSubmit={handleSubmit}>
        Player Name: <input type='text' placeholder='Player' style={{textAlign:'center'}} onChange={handleChange}  required />
        <input type='submit' value='Add player'/>
      </form>
      {
        players.map(player=>{
          return (
            <div key={player}>
            <p>{player}: {score}</p>
            <button onClick={increment}  style={{cursor:'pointer'}}>Increment</button>
            </div>
          )
        })
      }
    </div>
  )
}

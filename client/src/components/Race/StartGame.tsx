import React, { useEffect, useState } from 'react'
import styles from './StartGame.module.css';

export default function StartGame() {

  const [p1,setP1] = useState<string>('♞_______________________________________')
  const [p2,setP2] = useState<string>('♘_______________________________________')
  const [roundTime, setRoundTime] = useState<number>(175)
  const [active,setActive] = useState<boolean>(false)
  const [winner, setWinner] = useState<string>('')
  const[startRace,setStartRace] = useState<boolean>(false)
  const[wins,setWins] = useState<number>(0)

  const moveHandler = () => {
    setP1((pre) => '_'+pre.slice(0, -1))
  }


  const autoMoveHandler: () => void = () => {
       setStartRace(true)
       setP2('♘_______________________________________')
      const interval = setInterval(() => {
      setP2((pre) => '_'+pre.slice(0, -1))
      }, roundTime);   
         const p2timer = setTimeout(() => {
        clearInterval(interval)
       }, roundTime*p2.length); 
      //  clearInterval(interval)
      //  clearTimeout(p2timer)
      }

const nextRaceHandler = () => {
  setP1('♞_______________________________________')
  setP2('♘_______________________________________')
  setWinner('')
    setActive(false)
}
const newGameHandler = () => {
  setP1('♞_______________________________________')
  setP2('♘_______________________________________')
  setWinner('')
  setWins(0)
  setActive(false)
}

  const restartHandler = () => {
    setP1('♞_______________________________________')
    setP2('♘_______________________________________')
    setWinner('')
  }

  useEffect(()=> 
    {  if(p1.indexOf('♞') === p1.length-1){
        if(winner !== 'p2'){
          setWinner('p1')
          setStartRace(false)
          setActive(false)
          setWins((pre) => pre +1)
      console.log('winner p1')
      }
      }
  } 
  ,[p1])
  useEffect(()=> 
    {  if(p2.indexOf('♘') === p2.length-1){
      if(winner !== 'p1'){
        setWinner('p2')
        setActive(false)
        setStartRace(false)
        console.log('winner p2')
        }
      }
  } 
  ,[p2])

  useEffect(()=> 
    {if(winner === ''){
    setWinner(winner)
    setP1('♞_______________________________________')
    setP2('♘_______________________________________')
    }
    else if(winner === 'p1'){
      setWinner('p1')
    }
  } 
  ,[winner])


  return (
    <>
    {wins < 3? (<div className={styles.container}> 
    <h4>Wins : {wins}</h4>
        {winner !== ''?(<>{winner === 'p1'?(<><button className={styles.new_game_btn} onClick={nextRaceHandler}>next race</button><p className={styles.text_typing}>ВЫ победили</p></>):(<p></p>)}
        {winner === 'p2'?(<><button className={styles.new_game_btn} onClick={newGameHandler}>new game</button><p className={styles.text_typing}>ВЫ проиграли</p></>):(<p></p>)}</>):(<>  {active?(<>
        {startRace?(<><div className={styles.raceTruck1} >{p1}</div>
          <div className={styles.raceTruck1} >{p2}</div></>):(<><p className={styles.text_typing}>wait for race, press 'НАЧАТЬ ЗАЕЗД' for start</p><button className={styles.game_btn} onClick={autoMoveHandler}>НАЧАТЬ ЗАЕЗД</button></>)} 

          
       
       
        {startRace? (<button className={styles.gas_btn} onClick={moveHandler} >click to ГАЗ!</button>) :(<></>)}
        {winner === "p1" || winner === "p2"?(<button className={styles.game_btn} onClick={restartHandler} >RESTART</button>):(<p></p>)}
        </>):(<>
              <p className={styles.text_typing}>
          для того, чтобЫ газовать жми кнопку "click to ГАЗ!" <br/>
          жми быстрее, чтобы победить!<br/>
          одержите 3 победы подряд, чтобы пройти на следующий уровень
            </p>
          <button className={styles.start_game} onClick={()=> setActive(true)}>ИГРА</button></>)} </>)}
    </div>) : (<p className={styles.text_typing}>ИГРА ЗАВЕРШЕНА! вы набрали достаточно очков, чтобы перейти на следующий уровень</p>)}
    
  </>
  )
}

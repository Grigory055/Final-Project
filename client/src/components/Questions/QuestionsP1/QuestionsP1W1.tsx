import React, { useEffect, useState } from 'react'
import styles from './QuestionsP1.module.css';

export function QuestionsP1W1({ handleCloseClick }) {
  const[startP1W1,setStartP1W1] = useState<boolean>(false)
  const[coins,setCoins] = useState<number>(0)
  const[nextAnswer,setNextAnswer] = useState<boolean>(false)
  const[end,setEnd] = useState<boolean>(true)
  const question1 = "Как создать коммит?"
  const question2 ="Что такое бинарный поиск?"




  const startHandler: () => void = () => {
    setStartP1W1(true)
   }

  const rightAnswerHandler: () => void = () => {
    setCoins((pre) => pre + 1)
    setNextAnswer(true)
   }

   const wrongAnswerHandler: () => void = () => {
    setNextAnswer(true)
   }

const secondRightAnswerHandler: () => void = () => {
    setCoins((pre) => pre + 1)
    setNextAnswer(false)
    setEnd(false)
   }

   const secondWrongAnswerHandler: () => void = () => { 
    setNextAnswer(false)
    setEnd(false)
   }


  return (
    <>
      <div className={styles.container}>
        {end?(<>
          <div className={styles.question_modal}>
            {startP1W1?(
            <>{nextAnswer?(<div>
              <h2>{question2}</h2>
              <div className={styles.answers}>
              <button onClick={secondWrongAnswerHandler} className={styles.modal_btn_answer}>➡➡ погуглить</button>
              <button onClick={secondWrongAnswerHandler} className={styles.modal_btn_answer}>➡➡ написать в хелпу </button>
              <button onClick={secondRightAnswerHandler} className={styles.modal_btn_answer}>➡➡ тип поискового алгоритма, который последовательно делит пополам заранее отсортированный массив данных, чтобы обнаружить нужный элемент. </button>
            </div></div>):(<div>
              <h2>{question1}</h2>
              <div className={styles.answers}>
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>git pull 'any commit'</button>
              <button onClick={rightAnswerHandler} className={styles.modal_btn_answer}>git commit -m 'any commit'</button>
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>git add commit -f 'any commit'</button>
              </div>
            </div>
            )}</>
          ): (<><p>вы дошли до первой фазы! у вас железное терпение!</p><p>добро пожаловать на первую неделю!</p>
            <p>Тебе предстоит ответить на пару вопросов!</p><button onClick={startHandler} className={styles.modal_btn}><img className={styles.btn_img} src="/components/start_btn_p.png" alt="start" /></button></>)}
          </div>
          </>):(<><h2>вы можете продолжить игру</h2><p>вы закончили, ответив на {coins} из 2 вопросов</p>
          <button className={styles.modal_btn_answer}>далее</button></>)}
      </div>
    </>
  )
}

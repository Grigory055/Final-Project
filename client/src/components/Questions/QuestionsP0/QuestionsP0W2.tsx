import React, { useEffect, useState } from 'react'
import styles from './QuestionsP0.module.css';

export function QuestionsP0W2() {
  const[startP1W1,setStartP1W1] = useState<boolean>(false)
  const[coins,setCoins] = useState<number>(0)
  const[nextAnswer,setNextAnswer] = useState<boolean>(false)
  const[end,setEnd] = useState<boolean>(true)
  const question1 = "Как получить заголовок страницы??"
  const question2 ="Какая команда запускает функцию перед запуском любого из тестов в файле? Jest ждет, пока эта команда сработает, прежде чем запускать тесты?"




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
              <button onClick={secondWrongAnswerHandler} className={styles.modal_btn_answer}>afterEach</button>
              <button onClick={secondWrongAnswerHandler} className={styles.modal_btn_answer}>test.concurrent.each</button>
              <button onClick={secondRightAnswerHandler} className={styles.modal_btn_answer}>beforeAll</button>
            </div></div>):(<div>
              <h2>{question1}</h2>
              <div className={styles.answers}>
              <button onClick={rightAnswerHandler} className={styles.modal_btn_answer}>document.title;</button>
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>document.getElementsByTagName("title");</button>
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>let title = document.getElementById("title"); title.innerText;</button>
              </div>
            </div>
            )}</>
          ): (<><p>добро пожаловать на вторую неделю фазы 0!</p>
            <p>Тебе предстоит ответить на пару вопросов!</p><button onClick={startHandler} className={styles.modal_btn}><img className={styles.btn_img} src="/components/start_btn.gif" alt="start" /></button></>)}
          </div>
          </>):(<><h2>вы можете продолжить игру</h2><p>вы закончили, ответив на {coins} из 2 вопросов</p>
          <button className={styles.modal_btn_answer}>далее</button></>)}
      </div>
    </>
  )
}

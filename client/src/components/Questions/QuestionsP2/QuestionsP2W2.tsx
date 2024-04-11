import React, { useEffect, useState } from 'react'
import styles from './QuestionsP2.module.css';

export default function QuestionsP2W2() {
  const[startP1W1,setStartP1W1] = useState<boolean>(false)
  const[coins,setCoins] = useState<number>(0)
  const[nextAnswer,setNextAnswer] = useState<boolean>(false)
  const[end,setEnd] = useState<boolean>(true)
  const question1 = "Глобальный метод fetch(), для чего?"
  const question2 ="Что есть REST?"




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
              <button onClick={secondWrongAnswerHandler} className={styles.modal_btn_answer}>Библиотека, помогающая правильно распределить компоненты приложения</button>
              <button onClick={secondRightAnswerHandler} className={styles.modal_btn_answer}>Это стиль архитектуры программного обеспечения</button>
              <button onClick={secondWrongAnswerHandler} className={styles.modal_btn_answer}>Фреймворк созданный совместными усилиями Facebook и Apple</button>
            </div></div>):(<div>
              <h2>{question1}</h2>
              <div className={styles.answers}>
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>приносит боль</button>
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>обрабатывает данные на сервере и передаёт обратно</button>
              <button onClick={rightAnswerHandler} className={styles.modal_btn_answer}>запускает процесс извлечения ресурса из сети</button>
              </div>
            </div>
            )}</>
          ): (<><p>ВОТ И ВСЁ ВТОРАЯ ФАЗА!</p><p>Вторая неделя!</p><p>А? Что? Фетчи? Аяксы? Где Экспрессо?</p>
            <button onClick={startHandler} className={styles.modal_btn}><img className={styles.btn_img} src="/components/start_btn_stop.gif" alt="start" /></button></>)}
          </div>
          </>):(<><h2>вы можете продолжить игру</h2><p>вы закончили, ответив на {coins} из 2 вопросов</p>
          <button className={styles.modal_btn_answer}>далее</button></>)}
      </div>
    </>
  )
}
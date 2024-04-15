import React, { useEffect, useState } from 'react'
import styles from './QuestionsP3.module.css';

export default function QuestionsP3W1_2() {
  const[startP1W1,setStartP1W1] = useState<boolean>(false)
  const[coins,setCoins] = useState<number>(0)
  const[nextAnswer,setNextAnswer] = useState<boolean>(false)
  const[end,setEnd] = useState<boolean>(true)
  const question1 = "Зачем нужен Redux Thunk?"
  const question2 ="Какой второй опциональный параметр можно передать в метод setState и за что он отвечает?"




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
              <button onClick={secondWrongAnswerHandler} className={styles.modal_btn_answer}>Функция, уведомляющая, что компонент закончил процесс обмена информации с сервером.</button>
<p>-</p>
              <button onClick={secondRightAnswerHandler} className={styles.modal_btn_answer}>Функция, уведомляющая, что компонент закончил процесс ре-рендеринга.</button>
            </div></div>):(<div>
              <h2>{question1}</h2>
              <div className={styles.answers}>
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>Middleware позволяющая добавлять состояние приложения в Redux в парасинхронном режиме</button>

              <button onClick={rightAnswerHandler} className={styles.modal_btn_answer}>Middleware позволяющая изменять состояние приложения в Redux в асинхронном режиме</button>
       
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>Middleware позволяющая удалять состояние приложения в Redux в синхронном режиме</button>
              </div>
            </div>
            )}</>
          ): (<><p>Преисполнись!</p><p>Первая неделя, и сразу последняя!</p><p>Вы будете вспоминать это время с ностальгией.</p>
            <button onClick={startHandler} className={styles.modal_btn}><img className={styles.btn_img} src="/components/start_btn.gif" alt="start" /></button></>)}
          </div>
          </>):(<><h2>вы можете продолжить игру</h2><p>вы закончили, ответив на {coins} из 2 вопросов</p>
          <button className={styles.modal_btn_answer}>далее</button></>)}
      </div>
    </>
  )
}
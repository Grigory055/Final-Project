import React, { useEffect, useState } from 'react'
import styles from './QuestionsP2.module.css';
import { useAppDispatch } from '../../../redux/hooks';
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice';
import { setScores } from '../../../redux/userSlice';

export default function QuestionsP2W1() {
  const[startP1W1,setStartP1W1] = useState<boolean>(false)
  const[coins,setCoins] = useState<number>(0)
  const[nextAnswer,setNextAnswer] = useState<boolean>(false)
  const[end,setEnd] = useState<boolean>(true)
  const question1 = "Функции промежуточной обработки middleware это -"
  const question2 ="AJAX использует два метода работы с веб-страницей:"

  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
    dispatch(setScores(coins * 1000))
  }


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
              <button onClick={secondWrongAnswerHandler} className={styles.modal_btn_answer}>Первое - изменение Web-страницы не перезагружая её, и динамическое обращение к серверу. 
Второе - может осуществляться несколькими способами, в частности, responseHTML
</button>
<p>-</p>
              <button onClick={secondWrongAnswerHandler} className={styles.modal_btn_answer}>Первое - изменение сервера не перезагружая его, и динамическое обращение к Web-странице.
Второе -  может осуществляться несколькими способами, в частности, XMLHttpRequest,
и использование техники скрытого фрейма.
</button>
<p>-</p>
              <button onClick={secondRightAnswerHandler} className={styles.modal_btn_answer}>Первое - изменение Web-страницы не перезагружая её, и динамическое обращение к серверу. 
 Второе - может осуществляться несколькими способами, в частности, XMLHttpRequest,
и использование техники скрытого фрейма.
</button>
            </div></div>):(<div>
              <h2>{question1}</h2>
              <div className={styles.answers}>
              <button onClick={rightAnswerHandler} className={styles.modal_btn_answer}>это функции, имеющие доступ к объекту запроса ( req ), объекту ответа ( res ) и 
к следующей функции промежуточной обработки в цикле “запрос-ответ” приложения</button>
<p>-</p>
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>это функции, которые помогают включить сервер и показать нам вёрстку</button>
              <p>-</p>
              <button onClick={wrongAnswerHandler} className={styles.modal_btn_answer}>это связующее звено между клиентом и сервером, помогает получить данные из далёких
источников и необходимо при разработке приложений</button>
              </div>
            </div>
            )}</>
          ): (<><p>ВОТ И ВТОРАЯ ФАЗА!</p><p>всё для тебя!</p><p>Кажется, ты стал забывать, что такое боль...</p>
            <button onClick={startHandler} className={styles.modal_btn}><img className={styles.btn_img} src="/components/start_btn_fade.gif" alt="start" /></button></>)}
          </div>
          </>):(<><h2>вы можете продолжить игру</h2><p>вы закончили, ответив на {coins} из 2 вопросов</p>
          <button onClick={() => handleCloseClick()} className={styles.modal_btn_answer}>далее</button></>)}
      </div>
    </>
  )
}

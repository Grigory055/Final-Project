import React, { useState } from 'react'
import styles from './DialogsPhase0.module.css';

interface IDialog {
    person: string
    status: string
    text: string
  }

  const Anton: IDialog = {
    person: 'Anton',
    status: '1',
    text: 'Привет! Я - Антон. Я ем, сплю и сижу за компом в своих наушниках.'
  }

  const Anton2: IDialog = {
    person: 'Anton',
    status: '2',
    text: 'Вот уж не ожидал! Ты прошел 0 фазу! Теперь ты умеешь красить кнопки!'
  }

  const Anton3: IDialog = {
    person: 'Anton',
    status: '3',
    text: 'Спасибо, что собрал для меня все БРЮЛИКИ, и помог мне с вопросами, благодаря тебе мы можем сыграть в игру Гладиаторы!'
  }

  const Anton4: IDialog = {
    person: 'Anton',
    status: '4',
    text: 'Ты можешь научиться делать такую же! для этого тебе нужно пройти Фазу 1 Научишься так же, даже Больше!'
  }

export default function DialogAntonPhase0() {

    const [dialog, setDialog] = useState<IDialog>(Anton)
    
    const handlerDialog = () => {
        setDialog((pre) => ({...pre, status: '3'}))
        console.log('dialog1', dialog)
    }
    const handlerDialog2 = () => {
        setDialog((pre) => ({...pre, status: '4'}))
        console.log('dialog2', dialog)
    }

  return (
    <>
    <div className={styles.container}>
       {(() => {
        switch (dialog.status) {
          case '1':
            return <div>{Anton.text}
            <button style={{ width: '100px'}} onClick={() => setDialog((pre) => ({...pre, status: '2'}))} >Далее</button></div> ;
          case '2':
            return <div>{Anton2.text}
            
                <button onClick={() =>handlerDialog()} >Далее</button>
            
            </div>;
            // return <button onClick={() => setDialog((pre) => ({...pre, status: 'end'}))} >Завершить игру</button>;
          case '3':
            return <div>{Anton3.text}
            <button onClick={() => handlerDialog2()}>Играть в гладиаторы</button></div>
          case '4':
            return  <div>{Anton4.text}<button onClick={() => setDialog((pre) => ({...pre, status: '1'}))} >К следующей фазе!</button></div>;
        //   case '4':
        //     return <button>Идем дальше!</button>;
        }
      })()}
    </div>
    </>
  )
}

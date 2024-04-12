import React, { useState } from 'react'
import styles from './DialogPhase3.module.css'

interface IDialog {
    person: string
    status: string
    text: string
  }

  const Denis1: IDialog = {
    person: 'Denis',
    status: '1',
    text: 'Вот и подошло к концу Обучение в Эльбрусе, жаль не успели поехать на Курагу в Москву!',
  }

  const Denis2: IDialog = {
    person: 'Denis',
    status: '2',
    text: 'Давай просто преисполнимся и насладимся Своей игрой...',
  }

export default function DialogDenisPhase3() {
    
  const [dialog, setDialog] = useState<IDialog>(Denis1)

  const handlerDialog = () => {
    setDialog((pre) => ({...pre, status: '1'}))
    console.log('dialog1', dialog)
}

  return (
    <>
    <div className={styles.container}>
       {(() => {
        switch (dialog.status) {
          case '1':
            return <div><div>{Denis1.text}</div><div>
            <button className={styles.button} onClick={() => setDialog((pre) => ({...pre, status: '2'}))} >Далее</button></div></div> ;
          case '2':
            return <div>
              <div>{Denis2.text}</div>
                <div>
                  <button onClick={() =>handlerDialog()} >Играть</button>
                </div>
              </div>
        }
      })()}
    </div>
    </>
  )
}
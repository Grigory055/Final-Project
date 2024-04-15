import React, { useState } from 'react'
import styles from './DialogPhase2.module.css'
import { FlashCardsGame } from '../../Flash-Cards/FlashCardsGame'
import { Button } from '@mui/material'

interface IDialog {
    person: string
    status: string
    text: string
  }

  const Grisha1: IDialog = {
    person: 'Grisha',
    status: '1',
    text: 'Ну здарова! Я местный колдун, маг, ведьмак и вообще, че пристал ко мне? Ты не пройдёшь!! Хотя, все таки ты и мой ученик, если не пройдешь, тогда и мне прилетит.',
  }

  const Grisha2: IDialog = {
    person: 'Grisha',
    status: '2',
    text: 'Как видишь, вот и пронеслась вторая фаза, осталось только ответить на вопросы в игре Флеш-карты!',
  }

  const Grisha3: IDialog = {
    person: 'Grisha',
    status: '3',
    text: 'Поздравляю с окончанием предпоследней фазы! Ты большой молодец! Пока и хорошего вечера, кочанный мешок без маны!',
  }

export default function DialogGrishaPhase2() {

    const [dialog, setDialog] = useState<IDialog>(Grisha1)

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
            return <div><div>{Grisha1.text}</div><div>
            <Button className={styles.button} onClick={() => setDialog((pre) => ({...pre, status: '2'}))} >Играть</Button></div></div> ;
            case '2':
              return <div><div>{Grisha2.text}</div><div>
              <Button className={styles.button} onClick={() => setDialog((pre) => ({...pre, status: '3'}))} >Играть</Button></div></div> ;
          case '3':
            return <div><FlashCardsGame/></div>
          case '4':
            return <div>
              <div>{Grisha3.text}</div>
                <div>
                  <Button onClick={() =>handlerDialog()} >Играть</Button>
                </div>
              </div>
        }
      })()}
    </div>
    </>
  )
}

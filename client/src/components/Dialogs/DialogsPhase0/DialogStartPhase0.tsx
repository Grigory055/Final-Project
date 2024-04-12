import React, { useState } from 'react'
import styles from './DialogsPhase0.module.css'

interface IDialog {
    text: string
  }
  
  const dialogStartPhase0: IDialog = {
    text: 'Итак, приступим! Добро пожаловать на Фазу 0! Твоя задача: нужно найти три таблички и ответить на вопросы, которые на ней написаны'
  }

export default function DialogStartPhase0() {

    const [dialog, setDialog] = useState<IDialog>(dialogStartPhase0)

  return (
    <>
      <div className={styles.container}>
        <div>
          {dialog.text}
        </div>
        <div>
          <button onClick={() => console.log(dialog)}>Далее</button>
        </div>
      </div>
    </>
  )
}

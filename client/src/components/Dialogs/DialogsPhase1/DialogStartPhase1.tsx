import React, { useState } from 'react'
import styles from './DialogsPhase1.module.css'

interface IDialog {
  text: string
}

const dialogStartPhase1: IDialog = {
  text: 'Добро пожаловать на первую фазу! Всё так же, собирай брюлики и отвечай на вопросы с табличек! Не приближайся к Максу без завершенных заданий. Он будет ждать когда ты доделаешь!'
}

export default function DialogStartPhase1() {

  const [dialog, setDialog] = useState<IDialog>(dialogStartPhase1)

  // console.log(dialog)

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

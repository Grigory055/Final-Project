import React, { useState } from 'react'
import styles from './DialogsPhase1.module.css'
import { Button } from '@mui/material'

interface IDialog {
  text: string
}

const dialogStartPhase1: IDialog = {
  text: 'Добро пожаловать на первую фазу! Всё так же, собирай брюлики и отвечай на вопросы с табличек! Не приближайся к Максу без завершенных заданий. Он будет ждать когда ты доделаешь!'
}

export function DialogStartPhase1({ handleCloseClick }) {

  const [dialog, setDialog] = useState<IDialog>(dialogStartPhase1)

  // console.log(dialog)

  return (
    <>
      <div className={styles.container}>
        <div>
          {dialog.text}
        </div>
        <div>
          <Button onClick={() => handleCloseClick()} >Далее</Button>
        </div>
      </div>
    </>
  )
}

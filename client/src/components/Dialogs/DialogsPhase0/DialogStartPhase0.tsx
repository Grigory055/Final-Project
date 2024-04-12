import React, { useState } from 'react'
import styles from './DialogsPhase0.module.css'
import { Button } from '@mui/material'

interface IDialog {
    text: string
  }
  
  const dialogStartPhase0: IDialog = {
    text: 'Итак, приступим! Добро пожаловать на Фазу 0! Твоя задача: нужно найти три таблички и ответить на вопросы, которые на ней написаны'
  }

export function DialogStartPhase0({ handleCloseClick }) {

    const [dialog, setDialog] = useState<IDialog>(dialogStartPhase0)

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

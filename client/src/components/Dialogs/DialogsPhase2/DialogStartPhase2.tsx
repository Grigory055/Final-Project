import React, { useState } from 'react'
import styles from './DialogPhase2.module.css'
import { Button } from '@mui/material'

interface IDialog {
    text: string
  }
  
  const dialogStartPhase2: IDialog = {
    text: 'Вот и 2 Фаза... Как же быстро летит время! Что делать, я думаю ты уже знаешь...'
  }

export default function DialogStartPhase2({ handleCloseClick }) {

    const [dialog, setDialog] = useState<IDialog>(dialogStartPhase2)

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

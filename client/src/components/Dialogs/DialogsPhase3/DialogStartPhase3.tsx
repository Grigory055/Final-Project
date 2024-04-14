import React, { useState } from 'react'
import styles from './DialogPhase3.module.css'
import { Button } from '@mui/material'

interface IDialog {
  text: string
}

const dialogStartPhase2: IDialog = {
  text: 'Вот и финишная прямая...'
}

export default function DialogStartPhase3({ handleCloseClick }) {
  
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

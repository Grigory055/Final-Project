import React, { useState } from 'react'
import styles from './DialogPhase3.module.css'

interface IDialog {
  text: string
}

const dialogStartPhase2: IDialog = {
  text: 'Вот и финишная прямая...'
}

export default function DialogStartPhase3() {
  
  const [dialog, setDialog] = useState<IDialog>(dialogStartPhase2)

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

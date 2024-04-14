import React, { useState } from 'react'
import styles from './DialogPhase2.module.css'

interface IDialog {
  person: string
  status: string
  text: string
}

const Sveta1: IDialog = {
  person: 'Sveta',
  status: '1',
  text: 'Привет! У нас сейчас показы у предыдущей 2 фазы, протестируешь игру RACERS? Это даст тебе дополнительные очки!',
}

const Sveta2: IDialog = {
  person: 'Sveta',
  status: '2',
  text: 'Круто! Надеюсь тебе понравилось! Очки начислены!',
}

export default function DialogSvetaPhase2({ handleCloseClick }) {

  const [dialog, setDialog] = useState<IDialog>(Sveta1)

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
            return <div><div>{Sveta1.text}</div><div>
            <button className={styles.button} onClick={() => setDialog((pre) => ({...pre, status: '2'}))} >Играть</button></div></div> ;
          case '2':
            return <div>
              <div>{Sveta2.text}</div>
                <div>
                  <button onClick={() =>handlerDialog()} >Дальше</button>
                </div>
              </div>;
        }
      })()}
    </div>
    </>
  )
}

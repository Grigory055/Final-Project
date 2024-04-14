import React, { useState } from 'react'
import styles from './DialogsPhase1.module.css'
import { useAppDispatch } from '../../../redux/hooks'
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'

interface IDialog {
    person: string
    status: string
    text: string
  }

  const Sveta1: IDialog = {
    person: 'Sveta',
    status: '1',
    text: ' Молодец, как солёный огурец! Заполни, пожалуйста форму обратной связи!',
  }

  const Sveta2: IDialog = {
    person: 'Sveta',
    status: '2',
    text: 'Понравилась фаза 1?',
  }

export function DialogSvetaPhase1() {

  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
  }


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
            <button className={styles.button} onClick={() => setDialog((pre) => ({...pre, status: '2'}))} >Далее</button></div></div> ;
          case '2':
            return <div>
              <div>{Sveta2.text}</div>
                <div>
                  <button onClick={() => handleCloseClick()} >Понравилась</button>
                </div>
                <div>
                  <button onClick={() =>handlerDialog()} >Не понарвилась 'Эта кнопка будет убегать'</button>
                </div>
              </div>;
        }
      })()}
    </div>
    </>
  )
}

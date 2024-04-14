import React, { useState } from 'react'
import styles from './DialogsPhase1.module.css'
import { useAppDispatch } from '../../../redux/hooks'
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'

interface IDialog {
    person: string
    status: string
    text: string
  }

  const Maks1: IDialog = {
    person: 'Maks',
    status: '1',
    text: 'Приветы, Я - Максимус, главный модник на районе. Наконец ты дошел до меня, я уж заждался. Однако ты молодец! Так быстро подружился с JavaScript?',
  }

  const Maks2: IDialog = {
    person: 'Maks',
    status: '2',
    text: 'Благодаря тому, что ты принес мне брюлики и ответил на вопросы, у меня получилось доделать игру, похожую на ту, что ты делал на этой фазе! Сыграй!',
  }

  const Maks3: IDialog = {
    person: 'Maks',
    status: '3',
    text: 'Вот это экшн! Твой стиль меня поразил! Поздравляю с переходом на фазу 2!!!',
  }

export function DialogMaksPhase1() {

  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
  }


  const [dialog, setDialog] = useState<IDialog>(Maks1)

  const handlerDialog = () => {
    setDialog((pre) => ({...pre, status: '3'}))
    console.log('dialog1', dialog)
}

  return (
    <>
    <div className={styles.container}>
       {(() => {
        switch (dialog.status) {
          case '1':
            return <div><div>{Maks1.text}</div><div>
            <button className={styles.button} onClick={() => setDialog((pre) => ({...pre, status: '2'}))} >Далее</button></div></div> ;
          case '2':
            return <div>
              <div>{Maks2.text}</div>
                <div>
                  <button onClick={() =>handlerDialog()} >Играть</button>
                </div>
              </div>;
          case '3':
            return <div><div>{Maks3.text}</div><div>
            <button onClick={() => handleCloseClick()}>Переход на 2 фазу</button></div></div>
        }
      })()}
    </div>
    </>
  )
}

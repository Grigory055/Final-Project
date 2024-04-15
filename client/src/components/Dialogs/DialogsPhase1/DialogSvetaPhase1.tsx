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

  const moveHandler = (e) => {
    e.target.style.transition= "all 0.03s linear 0s";
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  e.target.style.left = getRandomInt(800, 1200)+"px"
  e.target.style.top = getRandomInt(460, 510)+"px"
  e.target.style.position= "absolute"
  // e.target.style.transition= "all 0.07s linear 0s";
  }


    const [dialog, setDialog] = useState<IDialog>(Sveta1)

//   const handlerDialog = () => {
//     setDialog((pre) => ({...pre, status: '1'}))
//     console.log('dialog1', dialog)
// }

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
              <div >{Sveta2.text}</div>
              <div className={styles.buttons_div}>
                <div >
                  <button  onClick={() => handleCloseClick()} >Понравилось</button>

                  {/* <div className={styles.button_wrapper} onClick={() => handleCloseClick()}><div><input className={styles.my_button} type="button" value="Понравилось" /></div></div> */}
                </div>
                <div>
                <button onMouseMove={moveHandler} > не Понравилось</button>
                  {/* <div className={styles.button_wrapper} onMouseMove={handlerDialog}><div><input className={styles.my_button} type="button" value="Не понравилось" /></div></div> */}
                </div>
                </div>
              </div>;
        }
      })()}
    </div>
    </>
  )
}

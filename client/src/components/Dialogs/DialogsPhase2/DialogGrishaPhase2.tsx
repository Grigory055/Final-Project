import { useState } from 'react'
import styles from './DialogPhase2.module.css'
import { FlashCardsGame } from '../../Flash-Cards/FlashCardsGame'
import { Button } from '@mui/material'
import { useAppDispatch } from '../../../redux/hooks'
import { useNavigate } from 'react-router-dom'
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'
import { setScores } from '../../../redux/userSlice'

interface IDialog {
    person: string
    status: string
    text: string
  }

  const Grisha1: IDialog = {
    person: 'Grisha',
    status: '1',
    text: 'Ну здарова! Я местный колдун, маг, ведьмак и вообще, че пристал ко мне? Ты не пройдёшь!! Хотя, все таки ты и мой ученик, если не пройдешь, тогда и мне прилетит.',
  }

  const Grisha2: IDialog = {
    person: 'Grisha',
    status: '2',
    text: 'Как видишь, вот и пронеслась вторая фаза, осталось только ответить на вопросы в игре Флеш-карты!',
  }

  const Grisha3: IDialog = {
    person: 'Grisha',
    status: '3',
    text: 'Поздравляю с окончанием предпоследней фазы! Ты большой молодец! Пока и хорошего вечера, кочанный мешок без маны!',
  }

export function DialogGrishaPhase2() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [dialog, setDialog] = useState<IDialog>(Grisha1)

  const handlerDialog = (status: string) => {
    setDialog((pre) => ({...pre, status: status}))
    console.log('dialog1', dialog)
  }

  // const handlerDialog1 = (status: string) => {
  //   setDialog(() => ({ status: status }))
  //   console.log('dialog1', dialog)
  // }

  const handleCloseClick = async () => {
    await dispatch(switchHeroWalk(true));
    await dispatch(switchDialog(false));
    // await dispatch(setScores(100))
    navigate('/');
  }

  return (
    <>
    <div className={styles.container}>
       {(() => {
        switch (dialog.status) {
          case '1':
            return <div><h5>Гриша</h5><p>{Grisha1.text}</p><div>
            <Button className={styles.button} onClick={() => handlerDialog('2')} >Играть</Button></div></div> ;
          case '2':
            return <div><FlashCardsGame handlerDialog={handlerDialog} /></div>
          case '3':
            return <div>
              <p>{Grisha3.text}</p>
                <div>
                <Button onClick={handleCloseClick}>К следующей фазе!</Button>
                </div>
              </div>
        }
      })()}
    </div>
    </>
  )
}

import { useState } from 'react'
import styles from './DialogsPhase0.module.css'
import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'

interface IDialog {
    text: string
    audio: string
  }
  
  const dialogStartPhase0: IDialog = {
    text: 'Итак, приступим! Твоя задача: нужно найти три брюлика и ответить на вопросы, которые на ней написаны',
    audio: '../../../../public/audio/dialogWindows/BubleP0.wav'
  }

export function DialogStartPhase0() {
  
  const dispatch = useAppDispatch();
  const heroIsWalking = useAppSelector((store: { RPGSlice: { heroIsWalking: boolean } }) => store.RPGSlice.heroIsWalking);
  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
  }

    const [dialog, setDialog] = useState<IDialog>(dialogStartPhase0)

    const audioHandler = (audio) => {
      const nowTrack = new Audio(audio)
      nowTrack.playbackRate = 1.5
      nowTrack.volume = 0.2
      heroIsWalking?
      nowTrack.pause()
      :
      nowTrack.play()
      };
  

  return (
    <>
      <div className={styles.container}>
        <div onLoad={audioHandler(dialogStartPhase0.audio)}>
          {dialog.text}
        </div>
        <div>
        <Button onClick={() => handleCloseClick()} >Далее</Button>
        </div>
      </div>
    </>
  )
}

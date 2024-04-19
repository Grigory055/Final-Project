import React, { useState } from 'react'
import styles from './DialogPhase3.module.css'
import { Button } from '@mui/material'
import { useAppDispatch } from '../../../redux/hooks'
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'
import BubbleP3 from '../../audio/bubbles/BubbleP3'

interface IDialog {
  text: string
}

const dialogStartPhase2: IDialog = {
  text: 'Вот и финишная прямая...'
}

export function DialogStartPhase3() {
  
  const [dialog, setDialog] = useState<IDialog>(dialogStartPhase2)
  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    void dispatch(switchHeroWalk(true));
    void dispatch(switchDialog(false));
  }

  return (
    <>
      <div className='dialog'>
        <div>
          <BubbleP3/>
          <p>{dialog.text}</p>
        </div>
        <div>
          <Button onClick={() => handleCloseClick()} >Далее</Button>
        </div>
      </div>
    </>
  )
}

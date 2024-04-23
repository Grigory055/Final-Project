import  { useState } from 'react'

import { Button } from '@mui/material'
import { useAppDispatch } from '../../../redux/hooks'
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'
import BubbleP2 from '../../audio/bubbles/BubbleP2'

interface IDialog {
    text: string
  }
  
  const dialogStartPhase2: IDialog = {
    text: 'Вот и 2 Фаза... Как же быстро летит время! Что делать, я думаю ты уже знаешь...'
  }

export function DialogStartPhase2() {

    const [dialog] = useState<IDialog>(dialogStartPhase2)
    const dispatch = useAppDispatch();

    const handleCloseClick = () => {
      dispatch(switchHeroWalk(true));
      dispatch(switchDialog(false));
    }
  

  return (
    <>
      <div className='dialog'>
        <div>
          <p>{dialog.text}</p>
          <BubbleP2/>
        </div>
        <div>
          <Button onClick={() => handleCloseClick()} >Далее</Button>
        </div>
      </div>
    </>
  )
}

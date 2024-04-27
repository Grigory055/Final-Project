import { useState } from 'react'
import { Button } from '@mui/material'
import { useAppDispatch } from '../../../redux/hooks'
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'
import BubbleP0 from '../../audio/bubbles/BubbleP0'

interface IDialog {
    text: string
  }
  
  const dialogStartPhase0: IDialog = {
    text: 'Итак, приступим! Твоя задача: нужно найти три брюлика и ответить на вопросы, которые на ней написаны'
  }

export function DialogStartPhase0() {
  
  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
  }

    const [dialog] = useState<IDialog>(dialogStartPhase0)

  return (
    <div  className="dialog">
      <BubbleP0/>
      <p>{dialog.text}</p>
      <div>
      <Button onClick={() => handleCloseClick()} >Далее</Button>
      </div>
    </div>
  )
}

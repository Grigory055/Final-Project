import { Button } from '@mui/material'
import React, { useState } from 'react'

interface IDialog {
    person: string
    status: string
    text: string
  }

  const Sveta: IDialog = {
    person: 'Sveta',
    status: '1',
    text: 'Приветствую тебя, искатель острых ощущений! Меня зовут Света, я тут всем регулирую, сейчас я расскажу тебе, что тут творится!'
  }

  const Sveta2: IDialog = {
    person: 'Sveta',
    status: '2',
    text: 'Расскажи, как тебя зовут?'
  }

  const Sveta3: IDialog = {
    person: 'Sveta',
    status: '3',
    text: 'Добро пожаловать, {login}, тебя ждет захватывающее приключение, но знай, не все дошли до конца! Для перемещения используй [W,A,S,D]'
  }

  const Sveta4: IDialog = {
    person: 'Sveta',
    status: '4',
    text: 'Итак, приступим! Добро пожаловать на Фазу 0! Твоя задача: нужно найти три таблички и ответить на вопросы, которые на ней написаны'
  }

export function DialogSvetaPhase0({ handleCloseClick }) {

    const [dialog, setDialog] = useState<IDialog>(Sveta)
    
    const handlerDialog = () => {
        setDialog((pre) => ({...pre, status: '3'}))
        console.log(dialog)
    }
    const handlerDialog2 = () => {
        setDialog((pre) => ({...pre, status: '4'}))
        console.log(dialog)
    }

  return (
    <>
    <div style={{maxWidth: '300px'}}>
       {(() => {
        switch (dialog.status) {
          case '1':
            return <div><p>{Sveta.text}</p><div>
            <Button onClick={() => setDialog((pre) => ({...pre, status: '2'}))} >Далее</Button></div></div> ;
          case '2':
            return <div> <div style={{ display: 'flex', flexDirection: 'column'}}>{Sveta2.text}
            <form style={{ display: 'flex', flexDirection: 'column'}} action="">
                <input type="text" name='email' placeholder='mail' />
                <input type="text" name='login' placeholder='login' />
                <input type="password" name='password' placeholder='password' />
                <Button onClick={() =>handlerDialog()} >Регистрация</Button>
            </form>
            </div></div>;
          case '3':
            return <div><p>{Sveta3.text}</p>
            <Button onClick={() => handleCloseClick()} >Искать приключения</Button></div>
          case '4':
            return  <div><p>{Sveta4.text}</p><Button onClick={() => handleCloseClick()} >Искать приключения</Button></div>;
        //   case '4':
        //     return <button>Идем дальше!</button>;
        }
      })()}
    </div>
    </>
  )
}

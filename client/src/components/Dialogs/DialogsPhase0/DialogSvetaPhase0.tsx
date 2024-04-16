import { Button } from '@mui/material'
import styles from './DialogsPhase0.module.css'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'
import { LoginForm } from '../../LoginForm/LoginForm'


interface IDialog {
    person: string
    status: string
    text: string
  }

export function DialogSvetaPhase0() {
  const isLogin = useAppSelector((store) => store.persistedReducer.isLogin);
  const login = useAppSelector((store) => store.persistedReducer.login);

  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
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
    text: `Добро пожаловать, ${login}!
    Тебя ждет захватывающее приключение, но знай, не все дошли до конца!`
  }
  
  const [dialog, setDialog] = useState<IDialog>(Sveta)

  return (
    <div className={styles.container}>
       {(() => {
        switch (dialog.status) {
          case '1':
            return <div><p>{Sveta.text}</p><div>
            <Button onClick={() => setDialog((pre) => ({...pre, status: '2'}))} >Далее</Button></div></div> ;
          case '2':
            return <div>
                {isLogin ? (
                    <>
                      <p>{Sveta3.text}</p>
                      <Button onClick={() => handleCloseClick()} >Искать приключения</Button>
                    </>
                  ) : (
                    <>
                      <p>{Sveta2.text}</p>
                      <LoginForm />
                    </>
                  ) }
              </div>
        }
      })()}
    </div>
  )
}

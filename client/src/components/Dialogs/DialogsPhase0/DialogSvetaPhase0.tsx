// import { Button } from '@mui/material'
// import styles from './DialogsPhase0.module.css'
// import { useEffect, useRef, useState } from 'react'
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
// import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'
// import { LoginForm } from '../../LoginForm/LoginForm'
// import SvetaP0dialog1 from '../../../../public/audio/SvetaP0dialog1.wav'


// interface IDialog {
//     person: string
//     status: string
//     text: string
//     audio:string
//   }

// export function DialogSvetaPhase0() {
//   const isLogin = useAppSelector((store) => store.persistedReducer.isLogin);
//   const login = useAppSelector((store) => store.persistedReducer.login);
//   const heroIsWalking = useAppSelector((store: { RPGSlice: { heroIsWalking: boolean } }) => store.RPGSlice.heroIsWalking);
//   const dispatch = useAppDispatch();


//   const handleCloseClick = () => {
//     dispatch(switchHeroWalk(true));
//     dispatch(switchDialog(false));
//   }

//   const Sveta: IDialog = {
//     person: 'Sveta',
//     status: '1',
//     text: 'Приветствую тебя, искатель острых ощущений! Меня зовут Света, я тут всем регулирую, сейчас я расскажу тебе, что тут творится!',
//     audio: '../../../../public/audio/SvetaP0dialog1.wav'
//   }

//   const Sveta2: IDialog = {
//     person: 'Sveta',
//     status: '2',
//     text: 'Расскажи, как тебя зовут?',
//     audio: '../../../../public/audio/Rasskaji.wav'
//   }

//   const Sveta3: IDialog = {
//     person: 'Sveta',
//     status: '3',
//     text: `Добро пожаловать, ${login}!
//     Тебя ждет захватывающее приключение, но знай, не все дошли до конца!`,
//     audio: '../../../../public/audio/DobroPojalovat.wav'
//   }
  
//   const [dialog, setDialog] = useState<IDialog>(Sveta)


//     const audio1Handler = (audio) => {
//       const nowTrack = new Audio(audio)
//       nowTrack.playbackRate = 2.8
//       nowTrack.volume = 0.2
//       heroIsWalking?
//       nowTrack.pause()
//       :
//       nowTrack.play()
// }
    
//     const audio2Handler = (audio) => {
//       const nowTrack = new Audio(audio)
//       nowTrack.playbackRate = 2.8
//       nowTrack.volume = 0.2
//       heroIsWalking?
//       nowTrack.pause()
//       :
//       nowTrack.play()
//     }
//     const audio3Handler = (audio) => {
//       const nowTrack = new Audio(audio)
//       nowTrack.playbackRate = 2.8
//       nowTrack.volume = 0.2
//       heroIsWalking?
//       nowTrack.pause()
//       :
//       nowTrack.play()
      
//     }
  

//   return (
//     <div className={styles.container}>
//        {(() => {
//         switch (dialog.status) {
//           case '1':
//             return <div><p onLoad={audio1Handler(Sveta.audio)}>{Sveta.text}</p><div>
              
//             <Button onClick={()=>  setDialog((pre) => ({...pre, status: '2'}))} >Далее</Button></div></div> ;
//           case '2':
//             return <div>
//                 {isLogin ? (
//                     <>
//                       <p onLoad={audio3Handler(Sveta3.audio)} >{Sveta3.text}</p>
//                       <Button onClick={() => handleCloseClick()} >Искать приключения</Button>
//                     </>
//                   ) : (
//                     <>
//                       <p onLoad={audio2Handler(Sveta2.audio)} >{Sveta2.text}</p>
//                       <LoginForm />
//                     </>
//                   ) }
//               </div>
//         }
//       })()}
//     </div>
//   )
// }
import { Button } from '@mui/material'
import styles from './DialogsPhase0.module.css'
import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice'
import { LoginForm } from '../../LoginForm/LoginForm'
import SvetaP0dialog1 from '../../../../public/audio/SvetaP0dialog1.wav'


interface IDialog {
    person: string
    status: string
    text: string
    audio:string
  }

export function DialogSvetaPhase0() {
  const isLogin = useAppSelector((store) => store.persistedReducer.isLogin);
  const login = useAppSelector((store) => store.persistedReducer.login);
  const heroIsWalking = useAppSelector((store: { RPGSlice: { heroIsWalking: boolean } }) => store.RPGSlice.heroIsWalking);
  const dispatch = useAppDispatch();


  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
  }

  const Sveta: IDialog = {
    person: 'Sveta',
    status: '1',
    text: 'Приветствую тебя, искатель острых ощущений! Меня зовут Света, я тут всем регулирую, сейчас я расскажу тебе, что тут творится!',
    audio: '../../../../public/audio/SvetaP0dialog1.wav'
  }

  const Sveta2: IDialog = {
    person: 'Sveta',
    status: '2',
    text: 'Расскажи, как тебя зовут?',
    audio: '../../../../public/audio/Rasskaji.wav'
  }

  const Sveta3: IDialog = {
    person: 'Sveta',
    status: '3',
    text: `Добро пожаловать, ${login}!
    Тебя ждет захватывающее приключение, но знай, не все дошли до конца!`,
    audio: '../../../../public/audio/DobroPojalovat.wav'
  }
  
  const [dialog, setDialog] = useState<IDialog>(Sveta)
  

    const audio1Handler = (audio) => {
      const nowTrack = new Audio(audio)
      nowTrack.playbackRate = 1.5
      nowTrack.volume = 0.2
      
      heroIsWalking?
      nowTrack.pause()
      :
      nowTrack.play()

      
      };

  

  return (
    <div className={styles.container}>
       {(() => {
        switch (dialog.status) {
          case '1':
            return <div><p onLoad={audio1Handler(Sveta.audio)}>{Sveta.text}</p><div>
              
            <Button onClick={()=> setDialog((pre) => ({...pre, status: '2'})) } >Далее</Button></div></div> ;
          case '2':
            return <div>
                {isLogin ? (
                    <>
                      <p onLoad={audio1Handler(Sveta3.audio)} >{Sveta3.text}</p>
                      <Button onClick={() => handleCloseClick()} >Искать приключения</Button>
                    </>
                  ) : (
                    <>
                      <p onLoad={audio1Handler(Sveta2.audio)} >{Sveta2.text}</p>
                      <LoginForm />
                    </>
                  ) }
              </div>
        }
      })()}
    </div>
  )
}

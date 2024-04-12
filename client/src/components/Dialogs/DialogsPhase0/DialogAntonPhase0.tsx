import React, { useState } from 'react'
import Gladiator from '../../Gladiator/Gladiator'
import { Button, Link } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

interface IDialog {
    person: string
    status: string
    text: string
  }

  const Anton: IDialog = {
    person: 'Sveta',
    status: '1',
    text: 'Привет! Я - Антон. Зацени мои наушники!'
  }

  const Anton2: IDialog = {
    person: 'Sveta',
    status: '2',
    text: 'Вот уж не ожидал! Ты прошел 0 фазу! Теперь ты умеешь красить кнопки!'
  }

  const Anton3: IDialog = {
    person: 'Sveta',
    status: '3',
    text: 'Спасибо, что собрал для меня все БРЮЛИКИ, и помог мне с вопросами, благодаря тебе мы можем сыграть в игру Гладиаторы!'
  }

  const Anton4: IDialog = {
    person: 'Sveta',
    status: '4',
    text: 'Ты можешь научиться делать такую же! для этого тебе нужно пройти Фазу 1 Научишься так же, даже Больше!'
  }

export function DialogAntonPhase0() {

    const [dialog, setDialog] = useState<IDialog>(Anton)
    
    const handlerDialog = () => {
        setDialog((pre) => ({...pre, status: '3'}))
        console.log('dialog1', dialog)
    }
    const handlerDialog2 = () => {
        setDialog((pre) => ({...pre, status: '4'}))
        console.log('dialog2', dialog)
    }

  return (
    <>
    <div style={{ textAlign: "center", margin: 'auto ', fontSize: '25px', width: '440px', height: '300px', border: '2px solid', backgroundColor: 'white', padding: '15px' }}>
       {(() => {
        switch (dialog.status) {
          case '1':
            return <div>{Anton.text}
            <button style={{ width: '100px'}} onClick={() => setDialog((pre) => ({...pre, status: '2'}))} >Далее</button></div> ;
          case '2':
            return <div>{Anton2.text}
            
                <button onClick={() =>handlerDialog()} >Далее</button>
            
            </div>;
            // return <button onClick={() => setDialog((pre) => ({...pre, status: 'end'}))} >Завершить игру</button>;
          case '3':
            return <div>{Anton3.text}
            <button onClick={() => handlerDialog2()}>Играть в гладиаторы</button></div>
          case '5':
            return  <div>{Anton4.text}
            <Link component={ReactRouterLink} to="/"><Button>К следующей фазе!</Button></Link>
            {/* <button onClick={() => setDialog((pre) => ({...pre, status: '5'}))} >К следующей фазе!</button> */}
            </div>;
          case '4':
            return <>
                    <Gladiator />;
                    <button onClick={() => setDialog((pre) => ({...pre, status: '5'}))} >Далее</button>
                  </>
        //   case '4':
        //     return <button>Идем дальше!</button>;
        }
      })()}
    </div>
    </>
  )
}

import { useState } from "react";
import Gladiator from "../../Gladiator/Gladiator";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { switchDialog, switchHeroWalk } from '../../../redux/RPGSlice';

interface IDialog {
  person: string;
  status: string;
  text: string;
  audio: string;
}

const Anton: IDialog = {
  person: "Anton",
  status: "1",
  text: "Привет! Я - Антон. Зацени мои наушники!",
  audio: '../../../../public/audio/anton/PrivetYaAnton.wav'
};

const Anton2: IDialog = {
  person: "Anton",
  status: "2",
  text: "Вот уж не ожидал! Ты прошел 0 фазу! Теперь ты умеешь красить кнопки!",
  audio: '../../../../public/audio/anton/VotYjNeOjidal.wav'
};

const Anton3: IDialog = {
  person: "Anton",
  status: "3",
  text: "Спасибо, что собрал для меня все БРЮЛИКИ, и помог мне с вопросами, благодаря тебе мы можем сыграть в игру Гладиаторы!",
  audio: '../../../../public/audio/anton/SpasiboSigraem.wav'
};

const Anton4: IDialog = {
  person: "Anton",
  status: "4",
  text: "Ты можешь научиться делать такую же! для этого тебе нужно пройти Фазу 1 Научишься так же, даже Больше!",
  audio: '../../../../public/audio/anton/TakyuJe.wav'
};

export function DialogAntonPhase0() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const heroIsWalking = useAppSelector((store: { RPGSlice: { heroIsWalking: boolean } }) => store.RPGSlice.heroIsWalking);

  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
    setTimeout(() => {
      navigate('/');
    }, 10);
  }

  const [dialog, setDialog] = useState<IDialog>(Anton)
  
  const handlerDialog = () => {
      setDialog((pre) => ({...pre, status: '3'}))
      console.log('dialog1', dialog)
  }
  const handlerDialog2 = () => {
      setDialog((pre) => ({...pre, status: '4'}))
      console.log('dialog2', dialog)
  }

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
      <div>
        {(() => {
          switch (dialog.status) {
            case "1":
              return (
                <div style={{ width: "400px" }}>
                  <p onLoad={audioHandler(Anton.audio)}>{Anton.text}</p>
                  <Button
                    onClick={() =>
                      setDialog((pre) => ({ ...pre, status: "2" }))
                    }
                  >
                    Далее
                  </Button>
                </div>
              );
            case "2":
              return (
                <div style={{ width: "400px" }}>
                  <p onLoad={audioHandler(Anton2.audio)}>{Anton2.text}</p>
                  <Button onClick={() => handlerDialog()}>Далее</Button>
                </div>
              );
            case "3":
              return (
                <div style={{ width: "400px" }}>
                  <p onLoad={audioHandler(Anton3.audio)}>{Anton3.text}</p>
                  <Button onClick={() => handlerDialog2()}>
                    Играть в гладиаторы
                  </Button>
                </div>
              );
              case "4":
              return (
                <>
                  <Gladiator />
                  <Button
                    onClick={() =>
                      setDialog((pre) => ({ ...pre, status: "5" }))
                    }
                  >
                    Далее
                  </Button>
                </>
              );
            case "5":
              return (
                <div style={{ width: "400px" }} onLoad={audioHandler(Anton4.audio)}>
                  {Anton4.text}
                  <Button onClick={handleCloseClick}>К следующей фазе!</Button>
                </div>
              );
          }
        })()}
      </div>
    </>
  );
}

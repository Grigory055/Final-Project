import { useState } from "react";
import styles from "./DialogsPhase1.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { switchDialog, switchHeroWalk } from "../../../redux/RPGSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SvetaP11 from "../../audio/sveta/svetap1/SvetaP11";
import SvetaP12 from "../../audio/sveta/svetap1/SvetaP12";
import { fetchUserScore } from "../../../redux/thunkActions";

interface IDialog {
  person: string;
  status: string;
  text: string;
}

const Sveta1: IDialog = {
  person: "Sveta",
  status: "1",
  text: "Молодец, как солёный огурец! Заполни, пожалуйста форму обратной связи!",
};

const Sveta2: IDialog = {
  person: "Sveta",
  status: "2",
  text: "Оставишь обратную связь?",
};

const Sveta3: IDialog = {
  person: "Sveta",
  status: "3",
  text: "Спасибки! Переходи скорее к следующей фазе!",
};

export function DialogSvetaPhase1() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const score = useAppSelector((store) => store.persistedReducer.score)

  const handleCloseClick = () => {
    void dispatch(fetchUserScore({ score, level: 2 }));
    void dispatch(switchHeroWalk(true));
    void dispatch(switchDialog(false));
    navigate('/');
  }

  const moveHandler = (e:any) => {
    e.target.style.transition = "all 0.03s linear 0s";
    function getRandomInt(min:any, max:any) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    e.target.style.left = getRandomInt(50, 400) + "px";
    e.target.style.top = getRandomInt(0, 220) + "px";
    e.target.style.position = "absolute";
    // e.target.style.transition= "all 0.07s linear 0s";
  };

  const [dialog, setDialog] = useState<IDialog>(Sveta1);

    const handlerDialog = (status: string) => {
      setDialog((pre) => ({...pre, status}))
      console.log('dialog1', dialog)
  }

  return (
    <>
      <div className="dialog">
        {(() => {
          switch (dialog.status) {
            case "1":
              return (
                <div>
                  <h2>Света</h2>
                  <SvetaP11/>
                  <p>{Sveta1.text}</p>
                  <div>
                    <Button className={styles.button} onClick={() => handlerDialog("2")}>Далее</Button>
                  </div>
                </div>
              );
            case "2":
              return (
                <div>
                  <h2>Света</h2>
                  <SvetaP12/>
                  <p>{Sveta2.text}</p>
                  <div className={styles.buttons_div}>
                    <div>
                      <Button onClick={() => handlerDialog("3")}>Напишу</Button>
                    </div>
                    <div>
                      <Button onMouseMove={moveHandler}> Нет времени</Button>
                    </div>
                  </div>
                </div>
              );
            case "3":
              return (
                <div>
                  <h2>Света</h2>
                  <p>{Sveta3.text}</p>
                  <Button onClick={handleCloseClick}>К следующей фазе!</Button>
                </div>
              );
          }
        })()}
      </div>
    </>
  );
}

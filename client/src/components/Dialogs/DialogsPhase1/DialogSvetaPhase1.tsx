import React, { useState } from "react";
import styles from "./DialogsPhase1.module.css";
import { useAppDispatch } from "../../../redux/hooks";
import { switchDialog, switchHeroWalk } from "../../../redux/RPGSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SvetaP11 from "../../audio/sveta/svetap1/SvetaP11";
import SvetaP12 from "../../audio/sveta/svetap1/SvetaP12";

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

  const handleCloseClick = async () => {
    await dispatch(switchHeroWalk(true));
    await dispatch(switchDialog(false));
    navigate('/');
  }

  const moveHandler = (e) => {
    e.target.style.transition = "all 0.03s linear 0s";
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    e.target.style.left = getRandomInt(50, 650) + "px";
    e.target.style.top = getRandomInt(0, 220) + "px";
    e.target.style.position = "absolute";
    // e.target.style.transition= "all 0.07s linear 0s";
  };

  const [dialog, setDialog] = useState<IDialog>(Sveta1);

  //   const handlerDialog = () => {
  //     setDialog((pre) => ({...pre, status: '1'}))
  //     console.log('dialog1', dialog)
  // }

  return (
    <>
      <div className={styles.container}>
        {(() => {
          switch (dialog.status) {
            case "1":
              return (
                <div>
                  <h4>Света</h4>

                  <SvetaP11/>
                  <div>{Sveta1.text}</div>
                  <div>
                    <Button
                      className={styles.button}
                      onClick={() =>
                        setDialog((pre) => ({ ...pre, status: "2" }))
                      }
                    >
                      Далее
                    </Button>
                  </div>
                </div>
              );
            case "2":
              return (
                <div>
                  <h4></h4>
                  <SvetaP12/>
                  <div>{Sveta2.text}</div>
                  <div className={styles.buttons_div}>
                    <div>
                      <Button onClick={() => setDialog((pre) => ({ ...pre, status: "3" }))}>
                        Напишу
                      </Button>

                      {/* <div className={styles.button_wrapper} onClick={() => handleCloseClick()}><div><input className={styles.my_button} type="button" value="Понравилось" /></div></div> */}
                    </div>
                    <div>
                      <Button onMouseMove={moveHandler}> Нет времени</Button>
                      {/* <div className={styles.button_wrapper} onMouseMove={handlerDialog}><div><input className={styles.my_button} type="button" value="Не понравилось" /></div></div> */}
                    </div>
                  </div>
                </div>
              );
            case "3":
              return (
                <div>
                  
                  <div>{Sveta3.text}</div>
                  <Button onClick={handleCloseClick}>К следующей фазе!</Button>
                </div>
              );
          }
        })()}
      </div>
    </>
  );
}

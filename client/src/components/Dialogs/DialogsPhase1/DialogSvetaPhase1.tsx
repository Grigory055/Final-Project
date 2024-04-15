import React, { useState } from "react";
import styles from "./DialogsPhase1.module.css";
import { useAppDispatch } from "../../../redux/hooks";
import { switchDialog, switchHeroWalk } from "../../../redux/RPGSlice";
import { Button } from "@mui/material";

interface IDialog {
  person: string;
  status: string;
  text: string;
}

const Sveta1: IDialog = {
  person: "Sveta",
  status: "1",
  text: " Молодец, как солёный огурец! Заполни, пожалуйста форму обратной связи!",
};

const Sveta2: IDialog = {
  person: "Sveta",
  status: "2",
  text: "Понравилась фаза 1?",
};

export function DialogSvetaPhase1() {
  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
  };

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
                  <div>{Sveta2.text}</div>
                  <div className={styles.buttons_div}>
                    <div>
                      <Button onClick={() => handleCloseClick()}>
                        Понравилось
                      </Button>

                      {/* <div className={styles.button_wrapper} onClick={() => handleCloseClick()}><div><input className={styles.my_button} type="button" value="Понравилось" /></div></div> */}
                    </div>
                    <div>
                      <Button onMouseMove={moveHandler}> не Понравилось</Button>
                      {/* <div className={styles.button_wrapper} onMouseMove={handlerDialog}><div><input className={styles.my_button} type="button" value="Не понравилось" /></div></div> */}
                    </div>
                  </div>
                </div>
              );
          }
        })()}
      </div>
    </>
  );
}

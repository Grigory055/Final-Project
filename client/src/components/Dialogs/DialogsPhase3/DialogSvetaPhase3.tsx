import React, { useState } from "react";
import styles from "./DialogPhase3.module.css";
import { Button } from "@mui/material";
import { Game } from "../../Game/Game";
import { useDispatch } from "react-redux";
import { switchDialog, switchHeroWalk } from "../../../redux/RPGSlice";
import { useAppDispatch } from "../../../redux/hooks";


interface IDialog {
  person: string;
  status: string;
  text: string;
}

const Sveta1: IDialog = {
  person: "Sveta",
  status: "1",
  text: "Ты уже на 3 фазе, ты был на всех лекциях, ты всё это знаешь! Пройди свою игру",
};

const Sveta2: IDialog = {
  person: "Sveta",
  status: "2",
  text: "Беги дальше",
};

export function DialogSvetaPhase3() {
  const [dialog, setDialog] = useState<IDialog>(Sveta1);

  

  const handlerDialog = (status) => {
    setDialog((pre) => ({ ...pre, status: status }));
    console.log("dialog1", dialog);
  };

  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    dispatch(switchHeroWalk(true));
    dispatch(switchDialog(false));
  }

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
                      onClick={() => handlerDialog('2')}
                      >
                      Далее
                    </Button>
                  </div>
                </div>
              );
            case "2":
              return (
                <div>
                  <Game handlerDialog={handlerDialog} />
                </div>
              );
            case "3":
              return (
                <div>
                  <div>{Sveta2.text}</div>
                  <div>
                    <Button onClick={() => handleCloseClick()}>Дальше</Button>
                    
                  </div>
                </div>
                
              );
          }
        })()}
      </div>
    </>
  );
}

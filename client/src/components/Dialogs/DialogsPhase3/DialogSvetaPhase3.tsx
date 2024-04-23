import { useState } from "react";
import styles from "./DialogPhase3.module.css";
import { Button } from "@mui/material";
import { Game } from "../../Game/Game";
import { switchDialog, switchHeroWalk } from "../../../redux/RPGSlice";
import { useAppDispatch } from "../../../redux/hooks";
import SvetaP31 from "../../audio/sveta/svetap3/SvetaP31";
import SvetaP32 from "../../audio/sveta/svetap3/SvetaP32";


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

  const handlerDialog = (status:any) => {
    setDialog((pre) => ({ ...pre, status: status }));
    console.log("dialog1", dialog);
  };

  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    void dispatch(switchHeroWalk(true));
    void dispatch(switchDialog(false));
  }

  return (
    <>
      <div>
        {(() => {
          switch (dialog.status) {
            case "1":
              return (
                <div className='dialog'>
                  <h2>Света</h2>
                  <SvetaP31/>
                  <p>{Sveta1.text}</p>
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
                <div className='dialog'>
                  <h2>Света</h2>
                  <SvetaP32/>
                  <p>{Sveta2.text}</p>
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

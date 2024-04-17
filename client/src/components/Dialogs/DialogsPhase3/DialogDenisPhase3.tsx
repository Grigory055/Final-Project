import React, { useState } from "react";
import styles from "./DialogPhase3.module.css";
import { Button } from "@mui/material";
import { Game } from "../../Game/Game";
import DenisP31 from "../../audio/prepods/denisP3/DenisP31";
import DenisP32 from "../../audio/prepods/denisP3/DenisP32";


interface IDialog {
  person: string;
  status: string;
  text: string;
}

const Denis1: IDialog = {
  person: "Denis",
  status: "1",
  text: "Вот и подошло к концу Обучение в Эльбрусе, жаль не успели поехать на Курагу в Москву!",
};

const Denis2: IDialog = {
  person: "Denis",
  status: "2",
  text: "Давай просто преисполнимся и насладимся Своей игрой...",
};

export function DialogDenisPhase3() {
  const [dialog, setDialog] = useState<IDialog>(Denis1);

  const handlerDialog = (status) => {
    setDialog((pre) => ({ ...pre, status: status }));
    console.log("dialog1", dialog);
  };

  return (
    <>
      <div className={styles.container}>
        {(() => {
          switch (dialog.status) {
            case "1":
              return (
                <div>
                  <h4>Денис</h4>
                  <DenisP31/>
                  <div>{Denis1.text}</div>
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
                  <DenisP32/>
                  <div>{Denis2.text}</div>
                  <div>
                    <Button onClick={() => setDialog((pre) => ({ ...pre, status: "3" }))}>Играть</Button>
                    
                  </div>
                </div>
              );
            case "3":
              return (
                <div>
                </div>
              );
          }
        })()}
      </div>
    </>
  );
}

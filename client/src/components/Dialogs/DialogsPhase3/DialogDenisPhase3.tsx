import { useEffect, useState } from "react";
import styles from "./DialogPhase3.module.css";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchUserScore } from "../../../redux/thunkActions";


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
  const dispatch = useAppDispatch();
  const score = useAppSelector((store) => store.persistedReducer.score)

  useEffect(() => {
    void dispatch(fetchUserScore(score));
  },[])

  const handlerDialog = (status: string) => {
    setDialog((pre) => ({ ...pre, status: status }));
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
                  <div>{Denis1.text}</div>
                  <div>
                    <Button className={styles.button} onClick={() => handlerDialog("2")} >Далее</Button>
                  </div>
                </div>
              );
            case "2":
              return (
                <div>
                  <div>{Denis2.text}</div>
                  <div>
                    <Button onClick={() => handlerDialog("3")}>Играть</Button>
                    
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

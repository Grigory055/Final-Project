import { useEffect, useState } from "react";
import cards from './cards'
import { IFlashCard } from "../../types/types";
import './styles.css'
import { Button } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { setScores } from "../../redux/userSlice";

export default function Flash({ handlerDialog }: { handlerDialog: (status: string) => void }) {
  const [correct, setCorrect] = useState<string>('');
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(10);
  const [gameover, setGameover] = useState(false);
  const [flashscore, setFlashscore] = useState<number>(0)
  const [card, setCard] = useState<IFlashCard>(cards[cardIndex])

  const dispatch = useAppDispatch();

  const showNextCard = (): void => {
    setTimeout(() => {
      setCardIndex((pre) => {
        const newIndex = pre + 1;
        if (newIndex < cards.length) {
          setCard(cards[newIndex]);
          setCorrect('');
          setTimer(10);
        } else {
          setCorrect('');
          setGameover(true);
        }
        return newIndex;    
      });
    }, 2000);
  }

  const submitHandler = (index: number) => {
    if (correct) return;
    if (card.variants[index] === card.answer) {
      setCorrect('correct');
      setFlashscore((pre) => pre + 100);
    } else {
      setCorrect('incorrect');
    }
    showNextCard();
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer((pre) => pre - 1);
    }, 1000);
    if (correct) {
      clearTimeout(timeout);
    }
    if (timer === 0 && !correct) {
      clearTimeout(timeout);
      setCorrect('incorrect');
      showNextCard();
    }
  }, [timer]);

  const exitGameHandler = (): void => {
    void dispatch(setScores(flashscore));
    handlerDialog('3');
  }

  return (
    <>
      <div className="flashgame">
        <div className="flashgame-header">
          <div className="flashgame-score">Очки: {flashscore}</div>
          { !gameover && (
          <>
            <div className="timer">{timer ? (<>Осталось {timer} секунд</>) : (<>Время вышло!</>)}</div>
            <div className="cardsCount">{`Карта ${cardIndex + 1} из ${cards.length}`}</div>
          </>
        ) }
        </div>
        <div className={`flashcard ${correct}`}>
          { !gameover ? (
            <>
              <p>{card.question}</p>
              <ul className="variants">{card.variants.map((el, index) => <li key={index} className="variant" onClick={() => submitHandler(index)}>{el}</li>)}</ul>
            </>
            ) : (
            <>
              <p>Все карты сыграны<br />Завершите игру, чтобы зачислить очки!</p>
            </>
          ) }
          </div>        
        <Button onClick={exitGameHandler}>Завершить игру</Button>
      </div>
    </>
  )
}

import { useEffect, useState } from "react";
import cards from './cards'
import { IFlashCard } from "../../types/types";
import './styles.css'
import { Button } from "@mui/material";

export default function Flash({ handlerDialog }: { handlerDialog: (status: string) => void }) {
  const [correct, setCorrect] = useState<string>('');
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(10);

  const [card, setCard] = useState<IFlashCard>(cards[cardIndex])

  const showNextCard = () => {
    setTimeout(() => {
      setCardIndex((pre) => {
        const newIndex = pre + 1;
        if (newIndex < cards.length) {
          setCard(cards[newIndex]);
          setCorrect('');
          setTimer(10);
        } else {
          handlerDialog('3');
        }
        return newIndex;    
      });
    }, 3000);
  }

  const submitHandler = (index: number) => {
    if (correct) return;
    if (card.variants[index] === card.answer) {
      setCorrect('correct');
    } else {
      setCorrect('incorrect');
    }
    showNextCard();
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer((pre) => pre - 1)
    }, 1000);
    if (correct) clearTimeout(timeout);
    if (timer === 0) {
      clearTimeout(timeout);
      setCorrect('incorrect');
      showNextCard();
    }
  }, [timer]);

  return (
    <>
      <div className="flashgame">
        <div className="timer">{timer ? (<>Осталось {timer} секунд</>) : (<>Время вышло!</>)}</div>
        <div className="cardsCount">{`Карта ${cardIndex + 1} из ${cards.length}`}</div>
        <div className={`flashcard ${correct}`}>
          <p>{card.question}</p>
          <ul className="variants">{card.variants.map((el, index) => <li key={index} className="variant" onClick={() => submitHandler(index)}>{el}</li>)}</ul>
        </div> 
        <Button onClick={() => handlerDialog('3')}>Завершить игру</Button>
      </div>
    </>
  )
}

import {Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import './Game.css';
import axios from 'axios';
import { setScores } from '../../redux/userSlice';

export function Game({ handlerDialog }:any) {
  const [open, setOpen] = React.useState<any>(false);
  const [card, setCard] = React.useState<any>({});
  const [input, setInput] = React.useState<string>('');
  const [score, setScore] = React.useState<any>(0);
  const [cards, setCards] = React.useState<any>([]);
  const [time, setTimer] = React.useState<number>(3);

  const dispatch = useAppDispatch()

  useEffect((): void => {
    (async function (): Promise<void> {
      try {
        setTimer(1000)
        const response = await axios.get('http://localhost:3000/api/topics');
        console.log('2024reesponse!', response.data)
        setCards(() => response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleClickOpen = (id:any) => {
    setInput('')
    setTimer(15)
    const currentCard = cards.find((el:any) => el.id === id);
    setCard(currentCard);
    if (currentCard.condition === '') {
      setOpen(true); 
    } if (currentCard.condition !== '') {
      setCard({})
    }
  };

  const handleClose = () => {
    setTimer(0)
    // console.log(card)
    // setScore((pre) => score - card.value);
    setScore(() => {
        if ((score - card.value) < 0) {
        setScore(0)
      } else {
        setScore(() => score - card.value)
      }
    });
    card.condition = '2';
    setOpen(false);
    // setCard({});
  };

  // const handleCloseClick = (id) => {
    // const currentCard = cards.find((el) => el.id === id);
    // // setCard(currentCard);
    // setScore((pre) => {
    //   if ((score - card.value) < 0) {
    //     setScore(0)
    //   } else {
    //     setScore((pre) => score - card.value)
    //   }
    // });
    // setScore((pre) => score - card.value);
    // console.log(id)
  //   setOpen(false);
  //   setCard({})
  // }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (time === 0) {
      handleClose();
    }
  }, [time]);

  const inputHandler = (e:any) =>  {
    void setInput(() => e.target.value);
  };

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    handleClose();
    // console.log(input, card.answer)
    

    if (input.toLowerCase() === card.answer.toLowerCase()) {
      setScore(() => {
        if ((score - card.value) < 0) {
          setScore(() => score + card.value);
        } else {
          setScore(() => score + card.value)
        }
      });
      // setScore((pre) => score + card.value);
      card.condition = '1';
      setTimer(1800);
      console.log(score)
    } else {
       setScore(() => {
      if ((score - card.value) < 0) {
        setScore(0)
      } else {
        setScore(() => score - card.value)
      }
    });
      card.condition = '2';
      setTimer(1800);
    } 
  };

  const exitGameHandler = () => {
    dispatch(setScores(score))
    handlerDialog('3')
    console.log('score', score)
  }

  return (
    <>
    <div className='svoya_igra_container'>
      
        <div style={{ fontSize: '24px' }}>Ваш счет: {score}</div>
        <div className='card-container'>
          <div className={ open ? 'card open' : 'card' }>
            <div className='timer'>{time}</div>
            <div>{card.questions}</div>
            <form onSubmit={submitHandler}>
              <input
              onChange={inputHandler}
              autoFocus
              required
              id="answer"
              name="answer"
              // label="Ваш ответ"
              placeholder='Ваш ответ'
              type="text"
              value={input}
              />
              <Button type="submit">Ответить</Button>
            </form>
          </div>
        </div>
        
        
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ margin: 'auto', width: '120px', fontSize: '20px' }}>JS</div>
        {cards &&
          cards.filter((el:any) => el.topic_id === 1).map((el:any) => (
              <div style={{ margin: '4px' }}>
                <div onClick={() => handleClickOpen(el.id)}>
                  <div style={{ border: '4px solid rgb(116, 64, 64)', padding: '8px', fontSize: '20px' }} className={el.condition === '1' ? 'oo' : el.condition === '2' ? 'aa' : el.condition === '' ? 'pp': ''}>{el.value}</div>
                </div>
              </div>
            ))}
            </div>
            <div style={{ display: 'flex' }}>
            <div style={{ margin: 'auto', width: '120px', fontSize: '20px' }}>CSS</div>
              
        {cards &&
          cards
            .filter((el:any) => el.topic_id === 2)
            .map((el:any) => (
              <div style={{ margin: '4px' }}>
              <div onClick={() => handleClickOpen(el.id)}>
              <div style={{ border: '4px solid rgb(116, 64, 64)', padding: '8px', fontSize: '20px' }} className={el.condition === '1' ? 'oo' : el.condition === '2' ? 'aa' : el.condition === '' ? 'pp': ''}>{el.value}</div>
              </div>
              </div>
            ))}
            </div>
            <div style={{ display: 'flex' }}>
            <div style={{ margin: 'auto', width: '120px', fontSize: '20px' }}>HTML</div>
        {cards &&
          cards
            .filter((el:any) => el.topic_id === 3)
            .map((el:any) => (
              <div style={{ margin: '4px' }}>
              <div onClick={() => handleClickOpen(el.id)}>
             
              <div style={{ border: '4px solid rgb(116, 64, 64)', padding: '8px', fontSize: '20px' }} className={el.condition === '1' ? 'oo' : el.condition === '2' ? 'aa' : el.condition === '' ? 'pp': ''}>{el.value}</div>
             
              </div>
              </div>
              // <Grid id={el.id} key={el.id} item xs={1}>
              //   <Card onClick={() => handleClickOpen(el.id)}>
                  // <CardContent
                  //   className={
                  //     el.condition === '1'
                  //       ? 'oo'
                  //       : el.condition === '2'
                  //       ? 'aa'
                  //       : el.condition === '' && 'pp'
                  //   }
                  // >
                  //   {el.value}
                  // </CardContent>
              //   </Card>
              // </Grid>
            ))}
            </div>
            <div style={{ display: 'flex' }}>
            <div style={{ margin: 'auto',  width: '120px', fontSize: '20px' }}>React</div>
        {cards &&
          cards
            .filter((el:any) => el.topic_id === 4)
            .map((el:any) => (
              <div style={{ margin: '4px' }}>
              <div onClick={() => handleClickOpen(el.id)}>
             
              <div style={{ border: '4px solid rgb(116, 64, 64)', padding: '8px', fontSize: '20px' }} className={el.condition === '1' ? 'oo' : el.condition === '2' ? 'aa' : el.condition === '' ? 'pp': ''}>{el.value}</div>
             
              </div>
              </div>
            ))}
            </div>
            <div style={{ display: 'flex' }}>
            <div style={{ margin: 'auto', width: '120px', fontSize: '20px' }}>Express</div>
        {cards &&
          cards
            .filter((el:any) => el.topic_id === 5)
            .map((el:any) => (
              <div style={{ margin: '4px' }}>
              <div onClick={() => handleClickOpen(el.id)}>
             
              <div style={{ border: '4px solid rgb(116, 64, 64)', padding: '8px', fontSize: '20px' }} className={el.condition === '1' ? 'oo' : el.condition === '2' ? 'aa' : el.condition === '' ? 'pp': ''}>{el.value}</div>
             
              </div>
              </div>
            ))}
            </div>
            <div style={{ display: 'flex' }}>
            <div style={{ margin: 'auto', width: '120px', fontSize: '20px' }}>GIT</div>
        {cards &&
          cards
            .filter((el:any) => el.topic_id === 6)
            .map((el:any) => (
              <div style={{ margin: '4px' }}>
              <div onClick={() => handleClickOpen(el.id)}>
             
              <div style={{ border: '4px solid rgb(116, 64, 64)', padding: '8px', fontSize: '20px' }} className={el.condition === '1' ? 'oo' : el.condition === '2' ? 'aa' : el.condition === '' ? 'pp': ''}>{el.value}</div>
             
              </div>
              </div>
            ))}
            </div>
          </div>
      <Box mt={5}>
        <Button
          // variant="contained"
          // component={ReactRouterLink}
          // onClick={() => handlerDialog('3')}
          onClick={() => exitGameHandler()}
          // to={() => exitGameHandler()}
          // to="/menu"
          id="playBtn"
          size="large"
        >
          Завершить игру
        </Button>
      </Box>
      </div>
    </>
  );
}

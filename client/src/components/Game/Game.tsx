import {Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, Grid, TextField, Typography, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Link as ReactRouterLink } from 'react-router-dom';
import { fetchTopics } from '../../redux/thunkActions';
import './Game.css';
import axios from 'axios';

export function Game() {
  const [open, setOpen] = React.useState(false);
  const [card, setCard] = React.useState({});
  const [input, setInput] = React.useState<string>('');
  const [score, setScore] = React.useState<number>(0);
  const [cards, setCards] = React.useState([]);
  const [time, setTimer] = React.useState(3);

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

  const handleClickOpen = (id) => {
    setInput('')
    setTimer(15)
    const currentCard = cards.find((el) => el.id === id);
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
    setScore((pre) => {
      if ((score - card.value) < 0) {
        setScore(0)
      } else {
        setScore((pre) => score - card.value)
      }
    });
    card.condition = '2';
    setOpen(false);
    // setCard({});
  };

  const handleCloseClick = (id) => {
    // const currentCard = cards.find((el) => el.id === id);
    // // setCard(currentCard);
    // setScore((pre) => {
    //   if ((score - card.value) < 0) {
    //     setScore(0)
    //   } else {
    //     setScore((pre) => score - card.value)
    //   }
    // });
    setScore((pre) => score - card.value);
    // console.log(id)
    setOpen(false);
    setCard({})
  }

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

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => e.target.value);
  };

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    handleClose();
    // console.log(input, card.answer)
    

    if (input.toLowerCase() === card.answer.toLowerCase()) {
      setScore((pre) => {
        if ((score - card.value) < 0) {
          setScore((pre) => score + card.value);
        }
      });
      // setScore((pre) => score + card.value);
      card.condition = '1';
      setTimer(1800);
      console.log(score)
    } else {
       setScore((pre) => {
      if ((score - card.value) < 0) {
        setScore(0)
      } else {
        setScore((pre) => score - card.value)
      }
    });
      card.condition = '2';
      setTimer(1800);
    } 
  };

  return (
    <>
    <div className='svoya_igra_container'>
      <Typography variant="h4" mb={5}>
        Ваш счет: {score}
      </Typography>
      <Grid container spacing={1} rowSpacing={1} justifyContent="center" columns={7}>
        <Grid item xs={2}>
          <Card>
            <CardContent>Эльбрус</CardContent>
          </Card>
        </Grid>
        {cards &&
          cards
            .filter((el) => el.topic_id === 1)
            .map((el) => (
              <Grid id={el.id} key={el.id} item xs={1}>
                <Card onClick={() => handleClickOpen(el.id)}>
                  <CardContent 
                    className={
                      el.condition === '1'
                        ? 'oo'
                        : el.condition === '2'
                        ? 'aa'
                        : el.condition === '' && 'pp'
                    }
                  >
                    {el.value}
                  </CardContent>
                </Card>
              </Grid>
            ))}
        <Grid item xs={2}>
          <Card>
            <CardContent>Барсы</CardContent>
          </Card>
        </Grid>
        {cards &&
          cards
            .filter((el) => el.topic_id === 2)
            .map((el) => (
              <Grid id={el.id} key={el.id} item xs={1}>
                <Card onClick={() => handleClickOpen(el.id)}>
                  <CardContent
                    className={
                      el.condition === '1'
                        ? 'oo'
                        : el.condition === '2'
                        ? 'aa'
                        : el.condition === '' && 'pp'
                    }
                  >
                    {el.value}
                  </CardContent>
                </Card>
              </Grid>
            ))}
        <Grid item xs={2}>
          <Card>
            <CardContent>Флаги</CardContent>
          </Card>
        </Grid>
        {cards &&
          cards
            .filter((el) => el.topic_id === 3)
            .map((el) => (
              <Grid id={el.id} key={el.id} item xs={1}>
                <Card onClick={() => handleClickOpen(el.id)}>
                  <CardContent
                    className={
                      el.condition === '1'
                        ? 'oo'
                        : el.condition === '2'
                        ? 'aa'
                        : el.condition === '' && 'pp'
                    }
                  >
                    {el.value}
                  </CardContent>
                </Card>
              </Grid>
            ))}
        <Grid item xs={2}>
          <Card>
            <CardContent>Животные</CardContent>
          </Card>
        </Grid>
        {cards &&
          cards
            .filter((el) => el.topic_id === 4)
            .map((el) => (
              <Grid id={el.id} key={el.id} item xs={1}>
                <Card onClick={() => handleClickOpen(el.id)}>
                  <CardContent
                    className={
                      el.condition === '1'
                        ? 'oo'
                        : el.condition === '2'
                        ? 'aa'
                        : el.condition === '' && 'pp'
                    }
                  >
                    {el.value}
                  </CardContent>
                </Card>
              </Grid>
            ))}
        <Grid item xs={2}>
          <Card>
            <CardContent>Школьная программа</CardContent>
          </Card>
        </Grid>
        {cards &&
          cards
            .filter((el) => el.topic_id === 5)
            .map((el) => (
              <Grid id={el.id} key={el.id} item xs={1}>
                <Card onClick={() => handleClickOpen(el.id)}>
                  <CardContent
                    className={
                      el.condition === '1'
                        ? 'oo'
                        : el.condition === '2'
                        ? 'aa'
                        : el.condition === '' && 'pp'
                    }
                  >
                    {el.value}
                  </CardContent>
                </Card>
              </Grid>
            ))}
        <Grid item xs={2}>
          <Card>
            <CardContent>Легкие примеры</CardContent>
          </Card>
        </Grid>
        {cards &&
          cards
            .filter((el) => el.topic_id === 6)
            .map((el) => (
              <Grid id={el.id} key={el.id} item xs={1}>
                <Card onClick={() => handleClickOpen(el.id)}>
                  <CardContent
                    className={
                      el.condition === '1'
                        ? 'oo'
                        : el.condition === '2'
                        ? 'aa'
                        : el.condition === '' && 'pp'
                    }
                  >
                    {el.value}
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>

      <Box mt={5}>
        <Button
          variant="contained"
          component={ReactRouterLink}
          // to="/menu"
          id="playBtn"
          size="large"
        >
          Завершить игру
        </Button>
      </Box>

      <Dialog
        open={open}
        // onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: submitHandler,
        }}
        disableRestoreFocus
      >
        <DialogTitle textAlign="center">
          {card.image && (
            <Box maxWidth={'500px'}>
              <img width={'100%'} src={card.image} alt="Image" />
            </Box>
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{card.questions}</DialogContentText>
          <TextField
            onChange={inputHandler}
            autoFocus
            required
            margin="dense"
            id="answer"
            name="answer"
            label="Ваш ответ"
            type="text"
            fullWidth
            variant="standard"
            value={input}
          />
          {time}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={() => handleCloseClick(card.id)}>Закрыть</Button> */}
          <Button type="submit">Отправить</Button>
        </DialogActions>
      </Dialog>
      </div>
    </>
  );
}

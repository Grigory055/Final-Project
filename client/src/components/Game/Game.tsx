import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, Grid, TextField, Typography } from "@mui/material"
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTopics } from "../../redux/thunkActions";

export function Game() {
  const [open, setOpen] = React.useState(false);
  const [card, setCard] = React.useState({ questions: '', answer: '' });
  const [input, setInput] = React.useState<string>('')

  const topics = useAppSelector((store) => store.persistedReducer.topics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchTopics());
  }, [dispatch]);

  const handleClickOpen = (id) => {
    setInput(() => '')
    const currentCard = topics.find((el) => el.id === id);
    setCard({ questions: currentCard.questions, answer: currentCard.questions })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => (e.target.value ))
  }

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    console.log(input);
    
  };

  // console.log(topics);
  

  return (
    <>
      <Grid container spacing={1} rowSpacing={1} justifyContent="center" columns={7}>
        <Grid item xs={2}>
          <Card><CardContent>Эльбрус</CardContent></Card>
        </Grid>
        {topics && topics.filter((el) => el.topic_id === 1).map((el) => <Grid key={el.id} item xs={1}><Card onClick={() => handleClickOpen(el.id)}><CardContent>{el.value}</CardContent></Card></Grid>)}
        <Grid item xs={2}>
          <Card><CardContent>Барсы</CardContent></Card>
        </Grid>
        
      </Grid>

      <Box mt={5}>
        <Button variant="contained" id="playBtn" size="large">Завершить игру</Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: submitHandler,
        }}
        disableRestoreFocus
      >
        <DialogTitle textAlign="center">00:10</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {card.questions}
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button type="submit">Отправить</Button>
        </DialogActions>
      </Dialog>
    </>
    
  )
}

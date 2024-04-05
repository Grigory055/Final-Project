import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, Grid, TextField, Typography } from "@mui/material"
import React from "react";

export function Game() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={1} rowSpacing={1} justifyContent="center" columns={7}>
        <Grid item xs={2}>
          <Card><CardContent>Эльбрус</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>200</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>400</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>600</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>800</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>1000</CardContent></Card> 
        </Grid>
        <Grid item xs={2}>
          <Card><CardContent>Барсы</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>200</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>400</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>600</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>800</CardContent></Card>
        </Grid>
        <Grid item xs={1}>
          <Card onClick={handleClickOpen}><CardContent>1000</CardContent></Card> 
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
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        disableRestoreFocus
      >
        <DialogTitle textAlign="center">00:10</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Кто металлический едет на концерт кураги орать песни и преисполняться?
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="answer"
            name="answer"
            label="Ваш ответ"
            type="text"
            fullWidth
            variant="standard"
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

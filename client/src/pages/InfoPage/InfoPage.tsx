import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from "@mui/material"
import React from "react";

export function InfoPage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h2" mt={5} mb={2}>Информация</Typography>
      <Typography variant="body1" color="text.secondary">Как вы обычно выбираете ресторан или кафе? В Америке существует Yelp - полезный сервис, где вы можете посмотреть рестораны, отфильтровать и отсортировать их как вам удобно, зарезервировать столик и тд. Помимо поиска по ресторанам Yelp предоставляет и другие функции, но мы пока их затрагивать не будем. Знаете ли вы какие-нибудь аналоги на российском рынке? Они есть, однако они не так популярны. А значит вы можете написать свой Yelp, и возможно он станет супер-популярным.</Typography>
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
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
    
  )
}

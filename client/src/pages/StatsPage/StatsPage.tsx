import { Grid, Typography } from "@mui/material";
import { Stats } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchStats } from "../../redux/thunkActions";
import { useEffect } from "react";

export function StatsPage() {
  
  const dispatch = useAppDispatch()

  const score = useAppSelector((store) => store.statSlice.stats)
  console.log('score', score)

//   useEffect(() => {
//     void dispatch(fetchStats(score))
// }, [dispatch])

  return (
    <>
      <Typography variant="h4" id="MainMenu_gl" textAlign="center">Статистика</Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Stats />
        </Grid>
      </Grid>
    </>
      
  )
}

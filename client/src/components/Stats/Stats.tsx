import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchStats } from "../../redux/thunkActions";

export function Stats() {

  const stats = useAppSelector((store) => store.statSlice.stats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchStats());
  }, [dispatch]);

  // function createData(
  //   name: string,
  //   date: string,
  //   score: number,
  // ) {
  //   return { name, date, score };
  // }
  
  // const rows = [
  //   createData('johndoe', '23 мая 2024', 6000),
  //   createData('dmvoronkov', '24 декабря 2024', 9000),
  //   createData('eclair', '12 января 2024', 16000)
  // ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} id="stata"  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя пользователя</TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Баллы</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stats.map((game) => (
            <TableRow
              key={game.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {game['User.login']}
              </TableCell>
              <TableCell align="right">{game.createdAt}</TableCell>
              <TableCell align="right">{game.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

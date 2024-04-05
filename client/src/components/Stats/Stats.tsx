import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export function Stats() {

  function createData(
    name: string,
    date: string,
    score: number,
  ) {
    return { name, date, score };
  }
  
  const rows = [
    createData('johndoe', '23 мая 2024', 6000),
    createData('dmvoronkov', '24 декабря 2024', 9000),
    createData('eclair', '12 января 2024', 16000)
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя пользователя</TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Баллы</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

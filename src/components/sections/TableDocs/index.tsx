import * as React from 'react';

// APIs
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

public interface Docs{
    name : string,
    owner : string,
    lastUpdate : {
        updateBy : string,
        date : string
    },
    tags : string[],
    size : number
}

function createData(
    doc : Docs
) {
    return ;
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TableDocs = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell align="right">
                            OWNER <br /> <small>Sort By A-Z</small>
                        </TableCell>
                        <TableCell align="right">UPDATED</TableCell>
                        <TableCell align="right">TAGS</TableCell>
                        <TableCell align="right">SIZE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name} 
                                <br />
                                <small> 7 items </small>
                            </TableCell>
                            <TableCell align="right">{row.owner}</TableCell>
                            <TableCell align="right">{row.lastUpdate.date + " by " + }</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableDocs;
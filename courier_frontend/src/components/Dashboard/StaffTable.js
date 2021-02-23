import React , {useState} from 'react';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// Generate Order Data
function createData(name, date , responses) {
  return { name, date , responses };
}

const rows = [
  createData('MCAT', '15-10-19', 14),
  createData('ECAT', '15-10-19', 16),
  createData('NTS', '15-10-19', 23),
  createData('GAT', '15-10-19', 65),
  createData('ARMY', '15-10-19', 43),
];


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  
  },
}));

export default function StaffTable(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
       <Typography component="p" className="emp-tag" variant="p">
            STAFF DETAILS
       </Typography>
       <br/>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell >Staff</TableCell>
            <TableCell >staff name</TableCell>
            <TableCell >staff age</TableCell>
            <TableCell align="right">staff life</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.date}</TableCell>
              
              <TableCell >{row.responses}</TableCell>
              <TableCell align="right">  <Button
         variant="contained" size="small"
         className="ml-5"
        style={{background: "#7167f4 ", color: "#fff" , }}
        className={classes.button}
        
      >
        EDIT
      </Button>
      
      </TableCell>
              
              </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" >
          Add a question
        </Link>
      </div>
      
    </React.Fragment>
  );
}
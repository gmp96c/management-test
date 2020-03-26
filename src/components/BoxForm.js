import React from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Controls } from './Controls';
const BoxStyle = styled.div`
width: 100%;
height: 500px;
border: 3px solid #942228;
border-radius: 3px;
box-shadow: 6px 6px 13px -2px rgba(0,0,0,0.25);
display:flex;
flex-direction: column;
#middle{
  flex-grow: 1;
}
@media(max-width: 400px){
  overflow-x:scroll;
}

`;
const useStyles = makeStyles({
  table: {
    minWidth: 350 ,
  },
});
export const BoxForm = (props) => {
  const classes = useStyles();
  return (
    <BoxStyle>
      <h4>{props.title}</h4>
      <TableContainer id="middle">
        <Table className={classes.table} aria-label="simple-table">
          <TableHead>
            <TableRow>
              {props.headers.map(el=><TableCell>{el}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {props.data.map(el=>(<TableCell>{typeof el == "string" ? el : el}</TableCell>))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    {props.controls && <Controls options={props.controls}/>}
    </BoxStyle>
  )
}

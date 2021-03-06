import React from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import { Controls } from './Controls';

export const BoxForm = (props) => {
  const classes = useStyles();
  return (
    <BoxStyle>
      <span className="titlebar">
     <h4 className="boxtitle">{props.title}</h4>
     </span>

      <TableContainer id="middle">
        <Table stickyHeader className={classes.table} aria-label="simple-table">
          <TableHead>
            <TableRow>
              {props.headers.map((el,i)=><TableCell align={i!==0?"right":"left"} className="headerText" key={el}>{el}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="normalRow">
              {props.data.map((el,i)=>(<TableCell align={i!=0?"right":"left"}  key={el}>{typeof el == "string" ? el : new Date(el).toLocaleString()}</TableCell>))}
            </TableRow>
            <TableRow className="normalRow">
              {props.data.map((el,i)=>(<TableCell align={i!==0?"right":"left"}  key={el}>{typeof el == "string" ? el : new Date(el).toLocaleString()}</TableCell>))}
            </TableRow>
            <TableRow className="normalRow">
              {props.data.map((el,i)=>(<TableCell align={i!==0?"right":"left"}  key={el}>{typeof el == "string" ? el : new Date(el).toLocaleString()}</TableCell>))}
            </TableRow>
            <TableRow className="normalRow">
              {props.data.map((el,i)=>(<TableCell align={i!==0?"right":"left"}  key={el}>{typeof el == "string" ? el : new Date(el).toLocaleString()}</TableCell>))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
          {props.controls && <Controls options={props.controls}/>}
    </BoxStyle>
  )
}
const BoxStyle = styled.div`
padding-top:5px;
width: 100%;
height: 550px;
border: 3px solid #942228;
border-radius: 3px;
box-shadow: 6px 6px 13px -2px rgba(0,0,0,0.25);
display:flex;
flex-direction: column;
background-image: url('https://i.imgur.com/Q8ECZEy.png');
background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
*{
  overflow-y:hidden;
}
TableHead{
  background:#f3f3f3;
}
.headerText{

  padding-bottom:.5rem;
  padding-top:.5rem;
  font-weight: bold;
}
#middle{
  flex-grow: 1;
}
@media(max-width: 500px){
  overflow-x:scroll;
}
.bar{
/* border: 2px solid #f5c242; */
height: 3.5px;
  border: 0;
margin-bottom: 10px;
width:150px;
}
.titlebar{
  background:  #942228;
  height:auto;
  margin-top:-5px;
  padding:4px;
  padding-bottom: 7px;
/////
  display: flex;
  flex-direction: row;
  align-items: center;
}
.boxtitle{
  width: 150px;
  background-color: none;
  position: relative;
  box-sizing:border-box;
  height: 2rem;
}
.normalRow{
  :hover{
    background: #e8e8e8;
  }
}
`;
const useStyles = makeStyles({
  table: {
    minWidth: 350 ,
  },
});

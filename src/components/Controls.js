import React from 'react'
import styled from 'styled-components';
const ControlStyle = styled.div`
display:flex;
justify-content:space-around;
width: 100%;
/* background: #942228; */
color: white;
font-size: 1rem;
padding:5px;
margin-top: 10px;

div{
text-align: center;
box-sizing:content-box;
background: #942228;
border: 1px solid #761b1f;
border-radius: 3px;
padding: 3px;
margin: 0 3px;
width: 100%;
/* border-right: 1px solid #f5c242; */
display:flex;
align-items:center;
justify-content: center;
:hover{
  color: #ffffff;
  background: #f5c242;
  border: 1px solid #f5c242;
  cursor:pointer;
  user-select: none;
  animation: highlight .1s;
}
@keyframes highlight{
  from {border: 1px solid #761b1f;
    background:#942228;}
  to  {background: #f5c242;

    border: 1px solid #dea50c;}
}
}
`;
export const Controls = ({options}) => {
  return (
    <ControlStyle>
      {options.map(el=>(
        <div key={el} >{el}</div>
      ))}
    </ControlStyle>
  )
}

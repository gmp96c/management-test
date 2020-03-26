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
div{
text-align: center;
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
:last-child{
  border: 0;
}
:hover{
  color: #ffffff;
  background: #bc2c33;
  cursor:pointer;
  user-select: none;
  animation: highlight .1s;
}
@keyframes highlight{
  from {background:#942228}
  to  {background:#bc2c33}
}
}
`;
export const Controls = ({options}) => {
  return (
    <ControlStyle>
      {options.map(el=>(
        <div>{el}</div>
      ))}
    </ControlStyle>
  )
}

import React from 'react'
import styled from 'styled-components';
const ControlStyle = styled.div`
display:flex;
justify-content:space-around;
width: 100%;
background: #942228;
color: white;
font-size: 1rem;
padding:5px;
div{
  text-align: center;
width: 100%;
border-right: 1px solid #f5c242;;
:last-child{
  border: 0;
}
:hover{
  color: #f5c242;
  cursor:pointer;
  user-select: none;
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

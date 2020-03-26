import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import styled from 'styled-components';
import logo from './gate_sentry_main_logo_400.png'
import { BoxForm } from './components/BoxForm';

const AppStyle = styled.main`
width: 70%;
background-color: #f8f8f8;
@media(max-width: 1920px){
  width:85%;
}
@media(max-width: 1450px){
  width:90%;
}
@media(max-width: 500px){
  width:100%;
}
img{
  height:8rem;
}
header{
  display:flex;
  justify-content:space-between;
  padding: 1rem;
  @media (max-width: 580px){
    flex-direction:column;
  }
}
span{
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  @media (max-width: 580px){
    text-align:center;
    align-items: center;
  }
}
a{
  margin-top: 9px;
}
#boxes{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2.3rem;
  padding: .8rem;
  box-sizing: border-box;
  @media (min-width: 2450px){
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
}
@media (max-width: 425px){
    grid-template-columns: 1fr;
    padding:5px;
}
}
#Imgcontainer{
 height: 120px;
 display:flex;
 align-items: center;
 justify-content:center;
 @media (max-width: 580px){
  margin-bottom: 20px;
 }
}
#extra{
  margin:15px auto;
border: 3px solid #942228;
border-radius: 3px;
box-shadow: 6px 6px 8px -2px rgba(0,0,0,0.25);
max-width:300px;
text-align:center;
}
#keyHeader{
  font-size:1.1rem;
}
`;
const dummyData = [["Hosts",["First Name", "Last Name", "Email", "Notify"], ["Test","Name","test@test.test","Yes"],["New","Delete","Save","Cancel"]],[ "Guests",["First Name", "Last Name", "Status", "Start Date","End Date"],["Test","Name","Testing","April 2, 2020","April 17, 2020"],["New","Delete","Save","Cancel", "Add Event"]],["History",["Visitor","Date Time"],["Test Name",Date.now()]],["Contact #'s",["Authorizer","Name","Phone"],["TestAuth","TestName","5035552012"],["Delete","Save","Cancel"]],["Vendors",["Company Names","Status","Start Date","End Date"],["TestCompany","Testing","April 2, 2020","April 17, 2020"],["New","Delete","Save","Cancel"]],[ "User Accounts",["Username","Email","Notify"],["TestUser","test@test.test","Yes"],["New","Delete","Save","Cancel"]]];
function App() {
  return (
    <AppStyle>
      <header>
        <div id="Imgcontainer">
        <img src={logo} alt="Gate Sentry visitor management logo"/>
        </div>
        <span>
          <h2>Demo Name</h2>
          <h3>Demo Address</h3>
          <a>Logout</a>
        </span>
      </header>
      <div id="boxes">
        {dummyData.map(el=>(<BoxForm title={el[0]} headers={el[1]} data={el[2]} controls={el[3]} />))}
      </div>
      <div id="extra">
        <h4 id="keyHeader">
          Private Key
        </h4>
        <p>testKey156164971917516518</p>
      </div>
    </AppStyle>
  );
}

ReactDOM.render(<App/>,document.querySelector('#root'));

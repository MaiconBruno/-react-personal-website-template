import { Row, Container, Button, Form } from 'react-bootstrap';
import Styled from 'styled-components';
import BackgroundContato from '../../img/BannerFundoForm.png';
export const LogRow = Styled(Row)`
    margin:0!important;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
   background-color:#1d1d1d;
   background-image: url(${BackgroundContato});
    background-repeat: no-repeat;
   background-position: center;
   background-size: cover;

    
`;

export const LogCon = Styled(Container)`
  min-height:300px;
  display:flex;
  align-items:center;
  justify-content:center;

`;

export const ButtonLog = Styled(Button)`
width:100%;
display:flex;
align-items:center;
justify-content:center;
transition:0.5s;
font-weight:bold;
font-size:20px;
border-radius:5px;
padding-left:10px;
padding-right:10px;
padding-top:5px;
padding-bottom:5px;
border:none;
color:white;
background-color:#00ff86;
&:hover{
   transition:0.5s;
background-color:white;
color:#00ff86;
background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
}
`;
export const FormLog = Styled(Form)`

     min-width:30%;
     color:white;
     font-weight:bold;
     font-size:20px;
`;
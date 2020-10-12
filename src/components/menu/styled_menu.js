import {Row, Container} from 'react-bootstrap';
import Styled from 'styled-components';
import BackgroundContato from '../../img/BannerFundoForm.png';

export const H2 = Styled.h2`
    font-size:20px;
    font-weight:bold;
  
`;
export const H1 = Styled.h1`
    font-size:30px;
    font-weight:bold;
    color:white;
`;

export const MenuRow = Styled(Row)`
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

export const MenuCon = Styled(Container)`
  min-height:300px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

`;

export const MenuDiv = Styled.div`
margin:20px;
 width:200px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
transition:0.5s;
font-weight:bold;
font-size:20px;
border-radius:5px;
padding-left:10px;
padding-right:10px;
padding-top:10px;
padding-bottom:10px;
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
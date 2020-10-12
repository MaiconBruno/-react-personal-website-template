import { Row, Card, Col } from 'react-bootstrap';
import Styled from 'styled-components';

export const TitleGaleri = Styled.h2`
color:white;
font-weight:bold;
font-size:45px;
margin-bottom:40px;
`;

export const GaleriaRow = Styled(Row)`
  background-color:#1d1d1d;
  border-bottom:solid 10px #00ff86;
  margin:0!important;
  padding:50px;
  display:flex;
  flex-direction:column;
  justify-content:center!important;
  align-items:center!important;
`;

export const GaleriaCon = Styled(Col)`
   display:flex;
   justify-content:center;
   align-items:center;
`;

export const CardGaleriCor = Styled(Card)`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 0.5s;
    min-height:200px;
    max-height:200px;
    width:350px;
    margin:20px;
    border:solid 3px white;
    display:flex; 
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    &:hover{
      transition: 0.5s;
      transform:scale(1.1);
    }
`;

export const CardFilter = Styled.div`
   display:flex;
   justify-content:center;
   align-items:center;;
   width:100%;
   min-height:30px;
   margin-top:20px;
   margin-bottom:20px;
   `;

export const Filter = Styled.button`
transition:0.8s;
outline:none!important;
font-weight:bold;
border:none; 
margin-left:20px;
margin-right:20px;
text-decoration:none!important;
color:white;
font-size:20px;
background-color:#1d1d1d;
&:hover{
   transition:0.8s;
 color:#00ff86;
 transform:scale(1.2);
}
`;

export const TitleCard = Styled.h3`

   font-weight:bold;
   width:100%;
   margin:0;
   background-color:rgb(25,25,25, 0.5);
   color:white;
   display:flex;
   align-items:center;
   justify-content:center;
`;
export const TextCard = Styled.p`
   font-weight:bold;
   width:100%;
   margin:0;
   background-color:rgb(25,25,25, 0.5);
   color:white;
   display:flex;
   align-items:center;
   justify-content:center;
`;
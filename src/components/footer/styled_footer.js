import Styled from 'styled-components';
import { Row, Container } from 'react-bootstrap';


export const FoooterRow = Styled(Row)`
   display:flex;
   justify-content:center;
   align-items:flex-end;
   min-height:100px;
   background-color:#1d1d1d;
   margin:0!important;
`;

export const Divsider = Styled.div`
 display: flex; flex-direction: column;position: fixed;bottom: 150px;right: 10px; z-index: 99999;
 @media (max-width: 600px) { 
        display:none;
    }
`;
export const DivsiderMobi = Styled.div`
      display:none;  
        width: 100%;
        position: fixed;
        bottom: 0px;
        z-index: 99999;
        justify-content: center;
        align-items: center;
        @media (max-width: 600px) { 
         display:flex;      
    }
`;

export const Linkside = Styled.a`
   color:white;
   font-size:35px;
   text-decoration:none;
   padding-left:15px;
   padding-right:10px;
   padding-top:10px;
   padding-bottom:10px;
   border-radius:10px 10px 0px 0px ;
   font-weight:400;
   background-color: rgb(700, 200, 000);
   &:hover{
      background-color: rgb(700, 200,100);
      text-decoration:none;
      color:white;
   }
`;

export const LinksideMobi = Styled.a`
border-radius: 10px 0px 0px 0px;
        background-color: rgb(700, 200, 000);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 15px;
        font-size: 25px;
        text-decoration: none;
        padding: 20px;
        color: white;
        &:hover{
      background-color: rgb(700, 200,100);
      text-decoration:none;
      color:white;
   }
`;



export const LinksideMobi2 = Styled.a`
      
        border-radius: 0px 10px 0px 0px;
        background-color: rgb(22, 206, 89);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 15px;
        font-size: 25px;
        text-decoration: none;
        padding: 20px;
        color: white;
        &:hover{
      background-color: rgb(90, 223, 139);
      text-decoration:none;
      color:white;
   }
`;



export const Linkside2 = Styled.a`
   color:white;
   font-size:35px;
   text-decoration:none;
   padding:10px;
   border-radius: 0px 0px 10px 10px;
   font-weight:400;
   background-color: rgb(22, 206, 89);
   &:hover{
      background-color: rgb(90, 223, 139);
      text-decoration:none;
      color:white;
   }
`;



export const FooterCon = Styled(Container)`
min-height:100px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

export const FooterText = Styled.h3`
   font-size:15px;
   font-weight:400;
   text-align:center;
   color:white;
`;
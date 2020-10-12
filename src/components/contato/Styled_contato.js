import { Row, Container,Form } from 'react-bootstrap';
import Styled from 'styled-components';
import BackgroundContato from '../../img/BannerFundoForm.png';
import Formulario from './form';

export const FormCon = Styled(Form)`
   max-width:600px;
   color:white;
   margin-top:20px;
`;

export const FormContato = Styled(Formulario)`
    
`;

export const ContatoTitle = Styled.h2`
   color:white;
   font-size:45px;
   font-weight:bold;
   margin-top:30px;
`;

export const FormText = Styled(Form)`
   
`;

export const ContatoRow = Styled(Row)`
   margin:0!important;
   min-height:95vh;
   background-image: url(${BackgroundContato});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   border-bottom: solid 10px #00ff86;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`;
export const ContatoCon = Styled(Container)`
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 padding:30px;
`;


export const FormButton = Styled.button`
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
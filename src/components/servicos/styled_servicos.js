import {Row,Col,Container} from 'react-bootstrap';
import Styled from 'styled-components';

export const TitleServicoh1 = Styled.h2`
  font-weight:900;
  color:white;
  font-size:45px;
  text-align:center;
  margin:10px;
`;

export const TitleServicoh2 = Styled.h3`
  font-weight:bold;
  color:white;
  font-size:20px;
  text-align:center;
  margin:10px;
`;
export const ConteudoTextServico = Styled.p`
  font-weight:400;
  color:white;
  font-size:15px;
  text-align:center;
  margin:10px;
`;

export const ImgServico = Styled.img`
  padding-bottom:10px;
  transition:0.8s; 
  &:hover {
  animation: treme 0.2s;
  animation-iteration-count: 1;
}
@keyframes treme {
  0% {transform: rotate(20deg);}
  25% {transform: rotate(-20deg);}
  50% {transform: rotate(20deg);}
  75% {transform: rotate(-20deg);}
  100% {transform: rotate(20deg);}
}
`;

export const ServicosRow = Styled(Row)`

 border-top: solid 10px #00ff86;
  border-bottom: solid 10px #00ff86;
  background-color:#1d1d1d;
  display:flex;
  flex-direction:column; 
  margin:0!important;
  align-items:center;
  justify-content:center;
  padding:20px;

`;

export const ServicosCon =  Styled(Container)`
   display:flex;
   justify-content:center;
   align-items:center;
   margin-top:50px;
`;

export const ServicosCol =  Styled(Col)`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   margin:30px;
`;








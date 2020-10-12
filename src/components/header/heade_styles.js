import Styled from 'styled-components';
import {Button,Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  myFontURL from '../../fonte/BlackroughDemoRegular.ttf';


export const Spantext = Styled.span`
 font-family:${myFontURL};
 font-style: normal;
 font-size: 14px;
 color:white!important;
 font-weight:bold;
 transition:0.2s;
 &:hover {
  transition:0.2s;
  border-bottom:solid 3px #00ff86;
}
`;

export const Menubutton = Styled(Button) `
border-radius:0;
font-size:18px;
color:#00ff86;
border:solid 3px #00ff86;
margin:0;
padding: 5px 30px;
&:hover {
    color:white;
    border:solid #white;
    background-color:rgb(23,24,24, 0.1);
}
  
`;
export const NavT = Styled(Nav)`
  margin:0;
  padding:0;
`;

export const Navp = Styled(Navbar)`
  position:relative;
  width:100%;
  margin:0;


`;


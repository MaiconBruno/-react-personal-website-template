import Styled from 'styled-components';
import {Row,Col} from 'react-bootstrap';

import response from '../../util/px2vw';


export const Banner = Styled(Row)`
 margin:0!important;
 justify-content:center;
 align-items:center;
 padding-left:20px;
 padding-right:20px;
`;

export const ConPrincipal = Styled(Row)`
 width:100%;
 min-height:100vh;
 justify-content:center;
 align-items:center;

`;

export const DivBanner = Styled(Col)`
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const TextoFn = Styled.h2`
  color:#00ff8f;
  font-weight:bold;
  font-size:30px;
`;

export const Bannericon = Styled.div`
 transition:0.5s;
   margin:20px;
   max-width:50px;
   max-height:50px;
   
  @media (min-width: 520px) { 
       width: ${response(90)};
       height: ${response(90)};
  }
    
 &:hover{
  transition:0.5s;
  transform:scale(1.4);
 }
   
`;

export const BannerH1 = Styled.h1`
@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro:600); 
font-size:${response(50,370)};
    padding-top:30px;
    color:white;
    font-weight:bold;    
    @media (min-width: 1024px) { 
          font-size: ${response(70)} 
    }
    @media (max-width: 600px) { 
          font-size: ${response(130)} 
          
    }
`;

export const Textload = Styled.pre`
@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro:600); 
font-size:${response(13,20)};
padding-bottom:10px;
font-family: 'Source Code Pro';
    border:none;
    color: rgb(255, 255, 255);
    @media (min-width: 1024px) { 
          font-size: 30px ;  
    }
    @media (max-width:1023px) { 
          font-size:30px ;  
          min-height:120px; 
    }
    @media (max-width: 600px) { 
          font-size: ${response(80)} ;  
          min-height:120px;
    }
`;
import Styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import img_bio from '../../img/fundoBio.jpg'


export const ConPrincipal = Styled(Row)`
    margin:0;
    padding:0;
    min-height:500px;
    border-top:10px solid #00ff86;
    background-image: url(${img_bio});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width:100%;
    justify-content:center;
    align-items:center;
`;

export const TextCon = Styled.p`
    color:white;
`;
export const Title = Styled.h2`
    color:white;
    font-weight:bold;
`;

export const Icons = Styled.i`
    color:white;
    font-size:50px;
    margin:20px 15px;
`;


export const SubCon2 = Styled(Col)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media (max-width: 600px) { 
        flex-direction:row;
          
    }
`;

export const SubCon = Styled(Col)`
    margin-top:30px;
`;

export const ImgBio = Styled.img`
    position:center;
    background-color:#191919;
    padding:0;
    border:solid 10px #191919;
    border-radius:0% 10% 0% 100%;  
    @media (max-width: 600px) { 
      border-radius:0% 100% 0% 10%; 
          
    }
`;



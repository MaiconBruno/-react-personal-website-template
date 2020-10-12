import React from 'react';
import { ConPrincipal, SubCon, ImgBio, TextCon, Title, Icons, SubCon2 } from './Styled_bio';
import img_bio from '../../img/pddp.jpg'
function Bio() {

    return (
        <>
            <ConPrincipal className="d-flex justify-content-center align-items-center">
                <SubCon className="d-flex justify-content-center align-items-center col-lg-5 col-md-5 col-sm-10 col-10" >
                    <ImgBio width="350" height="350" src={img_bio} className="img-fluid img-thumbnail" />
                </SubCon>
                <SubCon className="col-lg-5 col-md-5 col-sm-10 col-10" >
                    <Title>
                        Ola!! Tubo bem ?
                    </Title>
                    <TextCon>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae possimus iure. Quaerat, possimus quod eos similique dolores porro perferendis numquam. Cum fugit dolor qui maxime mollitia voluptates provident officiis.
                    </TextCon>
                    <TextCon>   
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, repellat? Excepturi
                  </TextCon>
                </SubCon>
                <SubCon2 className="col-lg-2 col-md-2 col-sm-10 col-10">
                        <Icons className="fab fa-react" />
                        <Icons className="fab fa-node" />
                        <Icons className="fab fab fa-php" />
                        <Icons className="fab fa-wordpress" />
                    </SubCon2>
            </ConPrincipal>
        </>
    );
}

export default Bio;
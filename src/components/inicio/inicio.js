import React from 'react';
import { Banner, DivBanner, Bannericon, BannerH1,TextoFn,ConPrincipal} from './inicio_styles';
import TextJobs from './text';
import { } from 'react-bootstrap';

function Inicio() {
    return (
        <>
            <Banner id="inicio">
               <ConPrincipal>
                <DivBanner style={{}} className="col-md-8 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-start">
                    <BannerH1>Desenvolvedor FullStack</BannerH1>
                    <TextJobs style={{maxWidth:'200px'}} />
                </DivBanner>
                <DivBanner className="col-md-2 col-sm-12 col-12">
                    <a href="https://github.com/MaiconBruno" target="_black">
                        <i style={{ fontSize: '50px', color: 'white', margin: '20px',transition: '0.8s'  }} class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/maicon-rodrigues-65ab9217a" target="_black">
                        <i style={{ fontSize: '50px', color: 'white', margin: '20px',transition: '0.8s' }} class="fab fa-linkedin-in"></i>
                    </a>
                </DivBanner>
                </ConPrincipal>
            </Banner>
        </>
    );
}


export default Inicio;
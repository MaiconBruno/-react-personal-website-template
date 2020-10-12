import React from 'react';
import {
    ServicosRow, ServicosCon, ServicosCol, TitleServicoh1, TitleServicoh2,
    ConteudoTextServico, ImgServico
} from './styled_servicos';
import img1 from '../../img/codigo.png';
import img2 from '../../img/telefone.png';
import img3 from '../../img/blogue.png';
import img4 from '../../img/manutencao.png';
import img5 from '../../img/frente.png';
import img6 from '../../img/back-end.png';
function Services() {
    return (
        <>
            <ServicosRow id="servico">
                <TitleServicoh1>Serviços</TitleServicoh1>
                <ServicosCon className="col-md-12 col-sm-12 col-12 row">
                    <ServicosCol className="col-md-3 col-sm-12 col-12 ">
                        <ImgServico src={img1} />
                        <TitleServicoh2>Criação de Sites</TitleServicoh2>
                        <ConteudoTextServico>
                            Desenvolvedor de Sites em
                            HTML, CSS, JavaScript, PHP,
                            MySql. React.js, Wordpress.
                        </ConteudoTextServico>
                    </ServicosCol>
                    <ServicosCol className="col-md-3 col-sm-12 col-12">
                        <ImgServico src={img2} />
                        <TitleServicoh2>Desenvolvimento de
                                aplicativos</TitleServicoh2>
                        <ConteudoTextServico>
                            Desenvolvimento de
                            Aplicativos para Celulares
                            Android e iOS (iPhone).
                        </ConteudoTextServico>
                    </ServicosCol>
                    <ServicosCol className="col-md-3 col-sm-12 col-12">
                        <ImgServico src={img3} />
                        <TitleServicoh2>Blog</TitleServicoh2>
                        <ConteudoTextServico>
                            Desenvolvimento de blog e
                            plataformas de gerenciamento de
                            conteudo.
                        </ConteudoTextServico>
                    </ServicosCol>
                </ServicosCon>
                <ServicosCon className="col-md-12 col-sm-12 col-12 row">
                    <ServicosCol className="col-md-3 col-sm-12 col-12">
                        <ImgServico src={img4} />
                        <TitleServicoh2>Manutenção Web</TitleServicoh2>
                        <ConteudoTextServico>
                            Updates da plataforma,
                            correções e alterações.
                        </ConteudoTextServico>
                    </ServicosCol>
                    <ServicosCol className="col-md-3 col-sm-12 col-12">
                        <ImgServico src={img5} />
                        <TitleServicoh2>Desenvolvimento
                            Front-end</TitleServicoh2>
                        <ConteudoTextServico>
                            Criação de layouts responsivos
                            e interativos com usuario.
                        </ConteudoTextServico>
                    </ServicosCol>
                    <ServicosCol className="col-md-3 col-sm-12 col-12">
                        <ImgServico src={img6} />
                        <TitleServicoh2>Desenvolvimento
                        Back-end</TitleServicoh2>
                        <ConteudoTextServico>
                            Criação de toda a estrutura
                            e regra de negocio por tras
                            da aplicação.
                        </ConteudoTextServico>
                    </ServicosCol>
                </ServicosCon>
            </ServicosRow>
        </>
    );
};

export default Services;




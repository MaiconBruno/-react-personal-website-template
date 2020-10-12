import React from 'react';
import { MenuRow, MenuCon, MenuDiv,H1, H2} from './styled_menu.js'

function MenuPage() {
    return (
        <>
            <MenuRow>
                
                <MenuCon>
                <H1>OPÇÕES DE POST</H1>
                  <a style={{textDecoration:'none'}} href="/postar"> <MenuDiv><H2>Publicar projeto</H2></MenuDiv> </a>
                  <a style={{textDecoration:'none'}} href="/excluir"> <MenuDiv><H2>Exluir projeto</H2></MenuDiv> </a>
                </MenuCon>
            </MenuRow>
        </>
    );
}

export default MenuPage;
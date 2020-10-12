import React from 'react';
import { Divsider, Linkside, Linkside2, DivsiderMobi, LinksideMobi, LinksideMobi2 } from './styled_footer';

function Sidebar() {
    return (
        <>
            <Divsider>
                <Linkside  href="tel:+5511958721778"><i class="fas fa-mobile-alt"></i></Linkside>
                <Linkside2 target="_blank"  href="https://wa.me/5511958721778"><i className="fab fa-whatsapp"></i></Linkside2>
            </Divsider>

            <DivsiderMobi>
                <LinksideMobi  href="tel:+5511958721778"><i class="fas fa-mobile-alt"></i></LinksideMobi>
                <LinksideMobi2 target="_blank"  href="https://wa.me/5511958721778"><i className="fab fa-whatsapp"></i></LinksideMobi2>
            </DivsiderMobi>
        </>
    );
}

export default Sidebar;
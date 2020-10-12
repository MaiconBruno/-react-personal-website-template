import React from 'react';
import { FoooterRow, FooterCon, FooterText } from './styled_footer';
import Sidebar from './sidebar';

function Footer() {
    return (
        <>
            <FoooterRow>
                <FooterCon>
                    <FooterText> Copyright (c) 2020 Company Maicon Rodrigues </FooterText>
                    <FooterText> All Rights Reserved </FooterText>
                </FooterCon>
            </FoooterRow>
            <Sidebar/>
        </>
    );
}

export default Footer;
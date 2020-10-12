import React from 'react';
import { ContatoRow, ContatoCon, ContatoTitle,FormContato } from './Styled_contato';


function Contato() {

    return (
        <>
            <ContatoRow id="contato">
                <ContatoTitle>Entre em Contato!</ContatoTitle>
                <ContatoCon>
                  <FormContato/>
                </ContatoCon>
            </ContatoRow>
        </>
    );
}

export default Contato;
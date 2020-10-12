import React from 'react';
import {Form} from 'react-bootstrap';
import {ExRow,ExCon,FormEx,ButtonEx} from './styled_excluir';

function TelaExcluir() {

    return(
        <>
        <ExRow>
            <ExCon>
            <FormEx action="/menu">
                        <Form.Group>
                            <Form.Control type="email" placeholder="Digite o ID da postagem..." />
                        </Form.Group>
                        <ButtonEx variant="primary" type="submit">
                            Exluir
                        </ButtonEx>
                    </FormEx>
            </ExCon>
        </ExRow>
        </>
    );

}

export default TelaExcluir;
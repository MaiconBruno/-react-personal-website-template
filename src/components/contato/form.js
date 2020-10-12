import React from 'react';
import { Form, Button, Col,FormControl } from 'react-bootstrap';
import {FormCon,FormButton,FormText} from './Styled_contato';

function Formulario() {
    return (
        <>
            <FormCon>
                <Form.Row>
                    <Form.Group as={Col} controlId="Email">
                        <FormText.Label>E-mail</FormText.Label>
                        <Form.Control type="email" placeholder="Digite seu E-mail..." />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Nome">
                        <FormText.Label>Nome</FormText.Label>
                        <Form.Control type="text" placeholder="Digite seu nome..." />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="Tel">
                    <FormText.Label>Telefone</FormText.Label>
                    <Form.Control  type="text" placeholder="Digite seu telefone..." />
                </Form.Group>

                <Form.Group controlId="Descrição">
                    <FormText.Label>Descrição</FormText.Label>
                    <FormControl style={{height:150}}  as="textarea" aria-label="Descrição do projeto..."  placeholder="Descrição do projeto..." />
                </Form.Group>

                <FormButton variant="primary" type="submit">
                    ENVIAR
              </FormButton>
            </FormCon>
        </>
    );
}

export default Formulario;

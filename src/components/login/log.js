import React from 'react';
import { LogRow, LogCon, FormLog, ButtonLog } from './styled_log.js'
import {Form} from 'react-bootstrap';

function LoginPage() {
    return (
        <>
            <LogRow>
                <LogCon>
                    <FormLog action="/menu">
                        <Form.Group>
                            <Form.Label>Login:</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu login..." />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha..." />
                        </Form.Group>
                        <ButtonLog variant="primary" type="submit">
                            Entrar
                        </ButtonLog>
                    </FormLog>
                </LogCon>
            </LogRow>
        </>
    );
}

export default LoginPage;
import React, { useState } from 'react';
import axios from 'axios';
import domain from '../../services/api'
import { PostCon, PostEx, PostRow, ButtonPost, H1 } from './styled_postar';
import { Form, } from 'react-bootstrap';
import api from '../../services/api';

function TelaPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [idImg, setImgId] = useState("");
    const [selected, setSelected] = useState("mobile");

    function handleTitleChange(data) {
        setTitle(data.target.value);
        console.log(data.target.value);
    }


    function handleBodyChange(data) {
        setBody(data.target.value);
        console.log(data.target.value);
    }

    async function handleImageChange(data) {
        const form = new FormData();
        form.append('file', data.target.files[0]);

        const answear = await api.post('/project/upload', form);
        const { id } = answear.data;

        setImgId(id);
    };

    const handleSelected = data => {
        const { value } = data.target;
        setSelected(value);
        console.log(value);
    };

    async function handleSubmit(data) {
        const answear = await api.post('/project/create', {
            title,
            description: body,
            img_id: idImg,
            group: selected
        });

        console.log(answear.data);

        setTitle("");
        setBody("");
    };

    return (
        <>
            <PostRow>
                <PostCon>
                    <PostEx>
                        <H1>PAINEL DE POST</H1>
                        <Form.Group>
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Imagen do projeto</Form.File.Label>
                                <Form.File.Input onChange={handleImageChange} />
                            </Form.File>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control onChange={handleSelected} as="select">
                                <option value="mobile">Mobile</option>
                                <option value="web">Desktop</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={handleTitleChange} type="text" placeholder="Titulo do projeto..." />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onChange={handleBodyChange} as="textarea" placeholder="Resumdo do projeto..." />
                        </Form.Group>
                        <ButtonPost onClick={handleSubmit}>
                            Enviar
                        </ButtonPost>
                    </PostEx>
                </PostCon>

            </PostRow>

        </>
    );

}

export default TelaPost;
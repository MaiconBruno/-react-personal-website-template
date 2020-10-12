import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardGaleriCor, TitleCard, TextCard } from './styled_galeria';
import CardBackground from '../../img/Banner.png';
import api from '../../services/api';
var url = "http://localhost:3333";

function Card() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const answer = await api.get('/project/getall');
            setProjects(answer.data);
        };

        loadProjects();
    }, [])

    return (
        <>
            {projects.map(project => (
                <CardGaleriCor name={project.group}
                    style={{backgroundImage: `url(${project.File.url})` }}
                >
                    <TitleCard>{project.title}</TitleCard>
                    <TextCard>{project.description}</TextCard>
                </CardGaleriCor>
            ))}
        </>
    );
}

export default Card;
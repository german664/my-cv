import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { getFirestore } from '../../Firebase';
import './portfolio.css';
import Project from './Project';

const Portfolio = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        const db = getFirestore()
        const projectCollection = db.collection('projects')
        const getItems = async () => {
            try {
                const { docs } = await projectCollection.get()
                setProjects(docs.map(project => {
                    return { id: project.id, ...project.data() }
                }))
            } catch (error) {
                console.log(error)
            }
        }
        getItems()

    }, [])
    return (
        <section id="portafolio" >
            <div>
                <h2>{"< PROYECTOS  />"}</h2>
                <Container fluid className="px-5 pt-2">
                    {projects.map(project => (
                        <Project key={project.id} {...project} />
                    ))}
                </Container>
            </div>
        </section>
    )
}

export default Portfolio

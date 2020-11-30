import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './about.css';
import CertificatesContainer from './CertificatesContainer';
import ToolsContainer from './ToolsContainer';


const About = () => {
    return (
        <section id="acerca">
            <h2>{"< SOBRE MÍ />"}</h2>
            <Container fluid className="px-md-5 pb-5">
                <Row className="px-4">
                    <Col md={6} className="pb-4 px-md-5">
                        <div className="w-75 mx-auto"><img src=" /images/header.jpg" alt="me" className="img-fluid rounded" /></div>
                        <div className="px-3">
                            <div className="">
                                <div className="mt-4"><p><i className="fas fa-map-marker-alt mr-2" /> <strong>Madrid</strong> </p> </div>
                            </div>
                            <div className="text-justify"><p>Profesional con una alta atención al detalle, planificado, metódico y siempre
                            dispuesto a aprender nuevas tecnologías. Actualmente en búsqueda de una
                            oportunidad laboral que me permita desenvolverme y crecer como
Desarrollador.</p></div>
                            <div><a href='/GermanMora.pdf' target="blank">Descarga mi CV</a> </div>
                        </div>
                    </Col>
                    <Col md={6} className="pl-0 herramientas px-3">
                        <h3 className="text-center mb-4">HERRAMIENTAS</h3>
                        <ToolsContainer />
                        <h3 className="text-center mb-4 mt-4">CERTIFICACIONES</h3>
                        <CertificatesContainer />
                    </Col>
                </Row>
            </Container>

        </section >
    )
}

export default About

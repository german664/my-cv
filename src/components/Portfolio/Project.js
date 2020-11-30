import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'

const Project = ({ name, tools, image, description, github, demo }) => {
    return (

        <Row className="px-md-4 pb-5 project">
            <Col md={6} className="px-md-4">
                <Carousel>
                    {image.map(image => {
                        return (
                            <Carousel.Item>
                                <img src={image} className="img-fluid rounded-lg" alt={name} />
                            </Carousel.Item>
                        )
                    })}

                </Carousel>

            </Col>
            <Col md={6} className="px-md-5 d-flex flex-column mt-2 mt-md-0">
                <h3 className="text-center text-md-left">{name.toUpperCase()}</h3>
                <div className="my-2">
                    {tools.map((tool, index) => (
                        <span key={tool + index} className="tec shadow-sm">{tool}</span>
                    ))}

                </div>

                <div className="text-justify project-description mb-3"> <p>{description}</p></div>
                <div className="d-flex justify-content-center mt-auto">
                    <a href={demo} target="blank"><span className="button p-2">  Demo</span></a>
                    <a href={github} target="blank"> <span className="button  ml-3 p-2">  Github</span></a>
                </div>

            </Col>
        </Row>

    )
}

export default Project

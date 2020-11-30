import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ToolsContainer = () => {
    return (
        <Row className="mt-5 mb-4 px-2 row-cols-md-5 row-cols-3 text-center">
            <Col className="mb-4    ">
                <img src="/images/js.png" alt={"logo.name"} className="logo" />
                <p>Javascript</p>
            </Col>
            <Col>
                <img src="/images/react.png" alt={"logo.name"} className="logo" />
                <p>React</p>
            </Col>
            <Col>
                <img src="/images/redux.png" alt={"logo.name"} className="logo" />
                <p>Redux</p>
            </Col>
            <Col>
                <img src="/images/bootstrap.png" alt={"logo.name"} className="logo" />
                <p>Bootstrap</p>
            </Col>
            <Col>
                <img src="/images/node.png" alt={"logo.name"} className="logo" />
                <p>Node JS</p>
            </Col>
            <Col>
                <img src="/images/mongo.png" alt={"logo.name"} className="logo" />
                <p>MongoDB</p>
            </Col>
            <Col>
                <img src="/images/python.png" alt={"logo.name"} className="logo" />
                <p>Python</p>
            </Col>
            <Col>
                <img src="/images/flask.png" alt={"logo.name"} className="logo" />
                <p>Flask</p>
            </Col>
            <Col>
                <img src="/images/mysql.png" alt={"logo.name"} className="logo" />
                <p>MySQL</p>
            </Col>
            <Col>
                <img src="/images/typescript.png" alt={"logo.name"} className="logo" />
                <p>Typescript</p>
            </Col>
        </Row>
    )
}

export default ToolsContainer

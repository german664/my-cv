import React, { useState } from 'react'
import { Alert, Form } from 'react-bootstrap'
import './contact.css'

const Contact = () => {

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const emailIsValid = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        const { name, email, message } = contact
        e.preventDefault()
        if (!name || !email || !message) {
            setError("Por favor, completa todos los datos")
        } else if (!emailIsValid(email)) {
            setError("Por favor, ingresa un email válido")
        }
        else {
            setError(null)
            setSuccess('¡Gracias! Me contactaré contigo cuanto antes')
            setContact({
                name: "",
                email: "",
                message: ""
            })
            setTimeout(() => window.location.reload(), 2500)
        }
    }

    const handleInput = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contacto" className="pb-4 pb-0">
            <h2>{"< CONTACTO />"}</h2>
            <p className="text-center mb-4 highlight">¿Te interesa dejarme un mensaje?</p>
            {error &&
                <div className="d-flex justify-content-center">
                    <Alert variant="danger" className="w-50">{error}</Alert>
                </div>
            }
            {success &&
                <div className="d-flex justify-content-center">
                    <Alert className="w-50 success">{success}</Alert>
                </div>
            }
            <div className="d-flex justify-content-center align-items-center">

                <Form className="w-50" onSubmit={handleSubmit}>
                    <Form.Control type="text" placeholder="Nombre" name="name" value={contact.name} onChange={handleInput} />
                    <Form.Control type="email" placeholder="Email" className="my-2 contact-input" name="email" value={contact.email} onChange={handleInput} />
                    <Form.Control as="textarea" rows={5} placeholder="Tu mensaje" name="message" value={contact.message} onChange={handleInput} />
                    <div className="w-100 d-flex justify-content-end mt-2">
                        <button className="contact-button">ENVIAR</button>
                    </div>
                </Form>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-md-2 mt-4">
                <a href="https://www.linkedin.com/in/german-andres-mora/" target="blank">
                    <span className="contact-icon">
                        <i className="fab fa-linkedin-in" />
                    </span>
                </a>

                <a href="https://github.com/german664" target="blank">
                    <span className="contact-icon">
                        <i className="fab fa-github" />
                    </span>
                </a>
                <a href="mailto:german.mora.664@gmail.com" target="blank">
                    <span className="contact-icon">
                        <i className="fas fa-envelope" />
                    </span>
                </a>
            </div>
        </section>
    )
}

export default Contact

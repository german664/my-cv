import React, { useRef, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const CustomNav = () => {

    const inicioRef = useRef(null)
    const acercaRef = useRef(null)
    const portafolioRef = useRef(null)
    const contactoRef = useRef(null)

    const goToSection = (e) => {
        e.preventDefault()
        const urlSection = e.target.href.split('#')[1]
        let section = document.getElementById(urlSection);
        window.scroll(0, (section.offsetTop - 20))
    }

    useEffect(() => {

        let mainNavLinks = [inicioRef, acercaRef, portafolioRef, contactoRef]

        window.addEventListener("scroll", () => {
            let fromTop = window.scrollY;

            mainNavLinks.forEach(link => {
                let section = document.querySelector(link.current.hash);

                if (
                    section.offsetTop - 50 <= fromTop &&
                    section.offsetTop - 50 + section.offsetHeight > fromTop
                ) {
                    link.current.classList.add("current");
                } else {
                    link.current.classList.remove("current");
                }
            })

        });
    }, [])

    return (
        <Navbar className="fixed-top navbar" expand="lg" variant="dark" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto text-light">
                    <Nav.Link ref={inicioRef} href="#inicio" onClick={goToSection}>INICIO</Nav.Link>
                    <Nav.Link ref={acercaRef} href="#acerca" onClick={goToSection}>SOBRE MI</Nav.Link>
                    <Nav.Link ref={portafolioRef} href="#portafolio" onClick={goToSection}>PORTAFOLIO</Nav.Link>
                    <Nav.Link ref={contactoRef} href="#contacto" onClick={goToSection}>CONTACTO</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default CustomNav

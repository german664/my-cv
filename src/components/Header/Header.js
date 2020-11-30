import React from 'react'
import './header.css';
import CustomNav from './Navbar';

const Header = () => {

    return (
        <>
            <CustomNav />
            <section id="inicio" className="header">
                <div className="text text-center p-3 mt-5 mt-md-0">
                    <p className="mb-2">Hola, mi nombre es <strong className="highlight">Germán Mora</strong></p>
                    <p>Soy un desarrollador web Full-Stack</p>
                    <a href="#portafolio">
                        <span className="main-button mt-3" name="portafolio" onClick={(e) => {
                            e.preventDefault()
                            const urlSection = e.target.parentNode.href.split('#')[1]
                            let section = document.getElementById(urlSection);
                            window.scroll(0, (section.offsetTop - 30))
                        }}>Ver mis proyectos <i className="fas fa-arrow-right ml-2"></i></span></a>
                </div>
            </section >
        </>
    )
}

export default Header

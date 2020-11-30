import React from 'react'

const Certificate = ({ name, link, logo }) => {
    return (

        <li className="d-flex">
            <div>
                <img className="certificate-logo mr-3" src={logo} />

            </div>
            <div className="d-flex flex-column justify-content-center">

                <span>
                    {name}
                </span>

                <a href={link} target="blank" className="mt-1">Ver Certificado</a>
            </div>
        </li>

    )
}

export default Certificate

import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { getFirestore } from '../../Firebase'
import Certificate from './Certificate'

const CertificatesContainer = () => {
    const [showMore, setShowMore] = useState(false)
    const [certificates, setCertificates] = useState([])
    useEffect(() => {
        const db = getFirestore()
        const certificatesCollection = db.collection("certificates").orderBy("number", "desc")
        const getCertificates = async () => {
            try {
                const { docs } = await certificatesCollection.get()
                setCertificates(docs.map(certificate => {
                    return { id: certificate.id, ...certificate.data() }
                }))
            } catch (error) {
                console.log(error)
            }
        }
        getCertificates()

    }, [])
    return (
        <Row className="px-3">
            <ul className="mt-2">

                {certificates.map((certificate, index) => {
                    if (index > 2) {
                        return (<div key={certificate.id} className={showMore ? "d-block" : "d-none"}><Certificate {...certificate} showMore={showMore} /> </div>)

                    } else {
                        return <Certificate key={certificate.id} {...certificate} showMore={showMore} />
                    }
                })}
            </ul>
            <div className="d-flex justify-content-center w-100">
                <span className="button" onClick={() => showMore ? setShowMore(false) : setShowMore(true)}>{showMore ? "Ver menos" : "Ver más"}</span>
            </div>
        </Row>
    )
}

export default CertificatesContainer

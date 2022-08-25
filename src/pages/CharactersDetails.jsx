import React, { useEffect, useState } from 'react'
import Page from "../components/Page"
import apiBreakingBad from "../services/api/apiBreakingBad"
import { Card, Button, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


export default (props) => {

    const [character, setCharacter] = useState([])
    const params = useParams();

    useEffect(() => {
        const id = params.id;
        apiBreakingBad.get(`/characters/${id}`).then(results => {
            setCharacter(results.data[0])
        });

    }, [])

    return (

        <Page className="d-flex" titulo={character.name}>
            {character.char_id &&
                <Row>
                    <Card className="shadow-lg border-2 border-black ml-40 w-64 items-center">
                        <Card.Img variant="top" src={character.img} />
                    </Card>
                    <Col className="ml-6">
                        <p><strong>Nickname: </strong>{character.nickname}</p>
                        <p><strong>Birthday: </strong>{character.birthday}</p>
                        <p><strong>Occupation: </strong>
                            {character.occupation.map(item => (
                                <ul><li>{item}</li></ul>
                            ))}
                        </p>
                        <p><strong>Status: </strong>{character.status}</p>
                    </Col>
                </Row>
            }
        </Page>
    )
}


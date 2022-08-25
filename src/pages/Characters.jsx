import React, { useEffect, useState } from 'react'
import Page from "../components/Page"
import apiBreakingBad from "../services/api/apiBreakingBad"
import { Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default (props) => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {

    apiBreakingBad.get('characters').then(results => {
      setCharacters(results.data)

      console.log(results.data)

    })

  }, [])

  return (

    <Page className="d-flex" titulo="Characters">
      <Row>
        {characters.map(item => (
          <Col>
            <Card className="ml-20 w-64">
              <Card.Img variant="top" src={item.img} className="h-80" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Button className="bg-dark">
                  <Link className="text-white hover:text-white" to={`/characters/${item.char_id}`}>Details</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Page>
  )
}


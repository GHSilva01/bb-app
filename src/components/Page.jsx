import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'



export default function Page({ titulo, children }) {
    return (
        <>
            <Jumbotron className="bg-coverbr bg-cover bg-center h-80">
                <Container>
                    <h1 class="mt-40 p-10 ml-4 border-solid text-white text-orange-200"><strong>{titulo}</strong></h1>
                </Container>
            </Jumbotron>

            <Container>
                {children}
            </Container>
        </>
    )
}
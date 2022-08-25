import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from '../breaking-bad.svg'
import { Link } from 'react-router-dom'

export default () => {

    return (
        <>
            <Navbar className="h-24 bg-zinc-900">
                <Container>
                    <Navbar.Brand><img src={logo} class="w-36 text-center" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a class="text-2xl text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium" href="/home">Home</a>
                        </Navbar.Text>
                        <Navbar.Text>
                            <a class="text-2xl text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium" href="/characters">Characters</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    )

}
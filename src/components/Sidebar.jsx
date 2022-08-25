import React from "react";
import { Navbar, Form, Nav, FormControl, Button, Container } from "react-bootstrap"
import logo from '../breaking-bad.svg'
import { Link } from 'react-router-dom'

export default () => {

    return (
        <>
            <body class="bg-blue-600">
                <div class="sidebar fixed top-0 bottom-0 lg:left-0 px-4 p-2 w-[250px] overflow-y-auto text-center bg-zinc-800">
                    <div class="p-2.5 mt-1 flex items-center">
                        <img src={logo} class="mb-2 w-40 text-center" />
                    </div>
                    <div class="my-2 bg-gray-600 h-[1px]"></div>
                    <div class="p-2.5 mt-40 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <span class="text-[15px] ml-4 text-gray-200 font-semibold"><Link className="text-white hover:text-white" to="/home">Home</Link></span>
                    </div>
                    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <span class="text-[15px] ml-4 text-gray-200 font-semibold"><Link className="text-white hover:text-white" to="/characters">Characters</Link></span>
                    </div>
                </div>
            </body>
        </>

    )

}
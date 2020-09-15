import React, { Component } from 'react'

import { Navbar, Nav } from 'react-bootstrap';

export default class NavBar extends Component {

    componentDidMount = () => {

        let prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;

            //to show navbar on mobile on top
            if (currentScrollPos === 0)
                document.getElementById("navbar").style.top = "0";

            else if (prevScrollpos > currentScrollPos)
                document.getElementById("navbar").style.top = "0";

            else
                document.getElementById("navbar").style.top = "-100px";


            prevScrollpos = currentScrollPos;
        }
    }

    render() {
        return (
            <Navbar id="navbar" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mx-auto">
                        <Nav.Link href="#section1">Section 1</Nav.Link>
                        <Nav.Link href="#section2">Section 2</Nav.Link>
                        <Nav.Link href="#link">Resume</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

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
                document.getElementById("navbar").style.top = "-800px";

            prevScrollpos = currentScrollPos;
        }
    }

    render() {
        return (
            <div>
                <Navbar id="navbar" expand="lg">
                    <Navbar.Toggle id="navToggle" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="">Home</Nav.Link>
                            <Nav.Link href="#section1">Portfolio</Nav.Link>
                            <Nav.Link href="#section2">Resume</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar >
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class NavBar extends Component {

    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     position: 'relative',
    //     //     backgroundColor: 'transparent'
    //     // };
    // }

    componentDidMount = () => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;

             if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("navbar").style.backgroundColor = "white";
            }
            else {
                document.getElementById("navbar").style.top = "-60px";
                document.getElementById("navbar").style.backgroundColor = "white";
            }

            prevScrollpos = currentScrollPos;
        }
    }

    render() {
        return (
            <div>
                <nav id="navbar" className="nav-style navbar navbar-expand-lg site-navbar navbar-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link" href="#section2">Section 2</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section1">Section 1</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section-resume">Resume</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section-contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <img className="img-style" src={require(`../pictures/shoe.jpg`)} alt="" />
            </div>

        )
    }
}

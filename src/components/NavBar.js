import React, { Component } from 'react'

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 'relative',
            backgroundColor: 'transparent'
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.handleNavColor);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.handleNavColor);
    }

    handleScroll = () => {
        if (window.scrollY <= 200)
            this.setState({ position: 'relative' });
        else
            this.setState({ position: 'fixed' });
    }

    handleNavColor = () => {
        if (window.scrollY <= 200) {
            this.setState({ backgroundColor: 'transparent' });
        }
        else {
            this.setState({ backgroundColor: '#fff' });
        }
    }

    render() {
        return (
            <div>
                <nav style={{ position: this.state.position, backgroundColor: this.state.backgroundColor }} className="nav-style navbar navbar-expand-lg site-navbar navbar-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section-portfolio">Portfolio</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section-resume">Resume</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#section-contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

import React, { Component } from 'react'

import { Image } from 'react-bootstrap';

export default class Intro extends Component {
    render() {
        return (
            <div>
                <Image className="img-style" src={require(`../pictures/shoe.jpg`)} rounded />

                <div className="caption">
                    <p id="text1">Hello, I'm</p>
                    <h1 id="text2">Tomer Steiner</h1>
                    <p id="text3">and this is my resume</p>
                </div>
            </div >
        )
    }
}

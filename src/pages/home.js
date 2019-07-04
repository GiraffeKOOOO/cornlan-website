import React from 'react';
import { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Jumbotron id="nextEventJumbo">
                    <div id="infoText">
                    <h1 id="welcomeTitle" >Welcome to CornLAN</h1>
                    <h1 className="infoText"> Next event is <a href="nextEvents"> SickLAN 9</a></h1>
                    <h3 className="infoText">Date: 25th June 2019 -> 28th June 2019</h3>
                    <Button variant="outline-warning" id="signupButton" href="nextEvents">BOOK NOW</Button>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;
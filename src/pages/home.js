import React from "react";
import { Component } from "react";
import { Jumbotron, Button, Modal } from "react-bootstrap";
import { Grid, Cell } from "react-mdl";
import smallLogo from "../images/logo_small.png";
import calendarIcon from "../images/icons/calendar.png";
import clockIcon from "../images/icons/clock.png";
import discordIcon from "../images/icons/discord.png";
import fbIcon from "../images/icons/fb.png";
import ytIcon from "../images/icons/yt.png";
import homeGallery from "../components/homeGallery";

class Home extends Component {
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Jumbotron id="nextEventJumbo">
          <div id="infoText">
            <h1 id="welcomeTitle">Welcome to CornLAN</h1>
            <h2 className="infoText">
              Next event is
              <a href="nextEvents" id="nextEventTitle">
                SickLAN 9
              </a>
            </h2>
            <h3 className="infoText">
              <img
                src={calendarIcon}
                alt="calendar icon"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 165, 0, 0.7)",
                  padding: "1px",
                  marginRight: "5px"
                }}
              />
              25th June ➤ 28th June 2019
            </h3>
            <h3 className="infoText">
              <img
                src={clockIcon}
                alt="clock icon"
                style={{ width: "40px", height: "40px", marginRight: "5px" }}
              />
              Countdown: 49 days left!
            </h3>
            <Button
              variant="outline-warning"
              id="signupButton"
              href="nextEvents"
            >
              BOOK NOW
            </Button>
          </div>
        </Jumbotron>
        <div id="aboutText" style={{ width: "80%", margin: "auto" }}>
          <Grid>
            <Cell col={6}>
              <Grid>
                <Cell col={12}>
                  <h2>
                    What is CornLAN?
                    <img
                      src={smallLogo}
                      alt="small cornlan logo"
                      style={{
                        width: "80px",
                        height: "40px",
                        paddingLeft: "10px",
                        marginBottom: "10px"
                      }}
                    />
                  </h2>
                  <p>
                    We are the Cornish LAN party! We are a jolly bunch of people
                    which get together with their computers, laptops, consoles
                    (basically anything that plays games) and enjoy each other’s
                    company. We play games together, watch movies, or just spend
                    the time talking and catching up (crazy I know right). The
                    LAN parties we host are typically 3 days long, starting on a
                    Friday afternoon and ending on Monday afternoon.
                  </p>
                </Cell>
                <Cell col={12}>
                  <h2>Find us over on:</h2>
                  <a
                    href="https://www.facebook.com/cornlanuk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={fbIcon}
                      alt="facebook-icon"
                      className="socialIcons"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCNVqt3O4_fEUFGf9hARty9Q"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={ytIcon}
                      alt="youtube-icon"
                      className="socialIcons"
                    />
                  </a>
                  <a
                    href="https://discord.gg/JywShWe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={discordIcon}
                      alt="discord-icon"
                      className="socialIcons"
                    />
                  </a>
                </Cell>
              </Grid>
            </Cell>
            <Cell col={6}>
              <h2>What is SickLAN?</h2>
              <p>
                SickLAN are the events and here are some quick FAQ about them:
              </p>
              <ul>
                <li>
                  Location:
                  <a
                    href="https://goo.gl/maps/jW7B1NrBcVeR2QWs5"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "10px" }}
                  >
                    Sticker Village Hall
                  </a>
                </li>
                <li>
                  Next Event: <a href="nextEvents"> SickLAN 9</a>
                </li>
                <li>
                  Ticket price: £10 - £22
                  <Button
                    variant="outline-warning"
                    className="infoButton"
                    style={{ marginLeft: "10px" }}
                  >
                    Ticket info
                  </Button>
                </li>
                <li>Duration: 3 Days</li>
                <li>
                  What should I bring?
                  <Button
                    variant="outline-warning"
                    className="infoButton"
                    style={{ marginLeft: "10px" }}
                  >
                    Small Checklist
                  </Button>
                </li>
              </ul>
              <p>
                Also take a look at our <a href="about">About</a> page for more
                FAQ
              </p>
            </Cell>
          </Grid>
        </div>
        <div id="previousEventsText" style={{ width: "80%", margin: "auto" }}>
          <Grid>
            <Cell col={12}>
              <h3>Here are some photos from previous events:</h3>
              <homeGallery />
            </Cell>
            <Cell col={6} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;

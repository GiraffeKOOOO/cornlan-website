// library imports
import React from "react";
import { Component } from "react";
import { Jumbotron, Button, Modal } from "react-bootstrap";
import { Grid, Cell } from "react-mdl";
import Gallery from "react-grid-gallery";

// images import
import smallLogo from "../images/logo_small.png";
import calendarIcon from "../images/icons/calendar.png";
import clockIcon from "../images/icons/clock.png";
import discordIcon from "../images/icons/discord.png";
import fbIcon from "../images/icons/fb.png";
import ytIcon from "../images/icons/yt.png";
import b1 from "../images/galleryThumbnails/b1.jpg";
import b2 from "../images/galleryThumbnails/b2.jpg";
import s1 from "../images/galleryThumbnails/s1.jpg";
import regularTicketImage from "../images/icons/regular.png";
import studentTicketImage from "../images/icons/student.png";
import duoTicketImage from "../images/icons/duo.png";
import groupTicketImage from "../images/icons/group.png";
import spectatorTicketImage from "../images/icons/spectator.png";
import computerImage from "../images/icons/computer.png";
import monitorImage from "../images/icons/monitor.png";

const IMAGES = [
  {
    src: b1,
    thumbnail: b1,
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: b2,
    thumbnail: b2,
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: s1,
    thumbnail: s1,
    thumbnailWidth: 320,
    thumbnailHeight: 174
  }
];

class TicketInfoModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Ticket Prices</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table id="ticketTable">
            <tr id="ticketTypeRow">
              <td id="topLeft">
                <h3>Type:</h3>
              </td>
              <td className="colRegular">
                <h3>Regular</h3>
              </td>
              <td>
                <h3>Student</h3>
              </td>
              <td>
                <h3>Duo</h3>
              </td>
              <td>
                <h3>Group</h3>
              </td>
              <td id="topRight">
                <h3>Spectator</h3>
              </td>
            </tr>
            <tr id="ticketImages">
              <td />
              <td className="colRegular">
                <img
                  src={regularTicketImage}
                  alt="regular ticket"
                  style={{ width: "125px", height: "125px" }}
                />
              </td>
              <td>
                <img
                  src={studentTicketImage}
                  alt="student ticket"
                  style={{ width: "125px", height: "125px" }}
                />
              </td>
              <td>
                <img
                  src={duoTicketImage}
                  alt="duo ticket"
                  style={{ width: "125px", height: "125px" }}
                />
              </td>
              <td>
                <img
                  src={groupTicketImage}
                  alt="group ticket"
                  style={{ width: "125px", height: "125px" }}
                />
              </td>
              <td>
                <img
                  src={spectatorTicketImage}
                  alt="spectator ticket"
                  style={{ width: "125px", height: "125px" }}
                />
              </td>
            </tr>
            <tr id="ticketPrice">
              <td>
                <h4>Price:</h4>
              </td>
              <td className="colRegular">
                <h3>£22</h3>
              </td>
              <td>
                <h3>£15</h3>
              </td>
              <td>
                <tr>
                  <h3>£24</h3>
                </tr>
                <tr>
                  <h6>£12 each (2 minimum)</h6>
                </tr>
              </td>
              <td>
                <tr>
                  <h3>£33+</h3>
                </tr>
                <tr>
                  <h6>£11 each (3 minimum)</h6>
                </tr>
              </td>
              <td>
                <h3>£10</h3>
              </td>
            </tr>
            <tr id="ticketInfo">
              <td id="bottomLeft">
                <h4>What do I get?</h4>
              </td>
              <td className="colRegular">
                <tr className="ticketInfoTitle">
                  <td>1 BYOD ticket</td>
                </tr>
                <tr className="ticketInfoText">
                  <td>
                    You can bring your computer or console and a monitor or tv
                  </td>
                </tr>
                <br />
              </td>
              <td>
                <tr className="ticketInfoTitle">
                  <td>1 BYOD ticket</td>
                </tr>
                <tr className="ticketInfoText">
                  <td>
                    Being a student is hard, so heres a cheaper ticket to make
                    it a bit easier
                  </td>
                </tr>
              </td>
              <td>
                <tr className="ticketInfoTitle">
                  <td>2 BYOD tickets</td>
                </tr>
                <tr className="ticketInfoText">
                  <td>
                    If you have a friend that you want to bring along for the
                    weekend, get this ticket for the both of you and save loads
                    of money!
                  </td>
                </tr>
              </td>
              <td>
                <tr className="ticketInfoTitle">
                  <td>3 or more BYOD tickets</td>
                </tr>
                <tr className="ticketInfoText">
                  <td>
                    If you have more than 1 or 2 friends that you want to bring
                    down for the weekend, get this group ticket for your bunch
                    and save loads of money!
                  </td>
                </tr>
              </td>
              <td>
                <tr className="ticketInfoTitle">
                  <td>1 Spectator ticket</td>
                </tr>
                <tr className="ticketInfoText">
                  <td id="bottomRight">
                    Iif you don't fancy bringing your entire pc tower but you
                    still want to come down and watch some movies on the
                    projector or play some board games.
                  </td>
                </tr>
              </td>
            </tr>
            <tr id="buyTicket">
              <td />
              <td>
                <Button
                  variant="outline-warning"
                  className="infoButton ticketModalBuyButton"
                  href="nextEvents"
                >
                  Buy Regular
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-warning"
                  className="infoButton ticketModalBuyButton"
                  href="nextEvents"
                >
                  Buy Student
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-warning"
                  className="infoButton ticketModalBuyButton"
                  href="nextEvents"
                >
                  Buy Duo
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-warning"
                  className="infoButton ticketModalBuyButton"
                  href="nextEvents"
                >
                  Buy Group
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-warning"
                  className="infoButton ticketModalBuyButton"
                  href="nextEvents"
                >
                  Buy Regular
                </Button>
              </td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={this.props.onHide}
            variant="outline-warning"
            className="infoButton ticketModalBuyButton"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class ChecklistModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Small Checklist</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table id="smallChecklistTable">
            <tr className="imageTitle">
              <td>computer/xbox/playstation</td>
              <td>Monitor/TV/Display</td>
            </tr>
            <tr className="images">
              <td>
                <img
                  src={computerImage}
                  alt="computer"
                  style={{ width: "125px", height: "125px" }}
                />
              </td>
              <td>
                <img
                  src={monitorImage}
                  alt="monitor"
                  style={{ width: "125px", height: "125px" }}
                />
              </td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={this.props.onHide}
            variant="outline-warning"
            className="infoButton"
            style={{ marginLeft: "10px" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Home extends Component {
  constructor(...args) {
    super(...args);

    this.state = { TicketInfoModal: false, ChecklistModal: false };
  }
  render() {
    let modalClose = () =>
      this.setState({ TicketInfoModal: false, ChecklistModal: false });
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
                    onClick={() =>
                      this.setState({
                        TicketInfoModal: true,
                        ChecklistModal: false
                      })
                    }
                  >
                    Ticket info
                  </Button>
                  <TicketInfoModal
                    show={this.state.TicketInfoModal}
                    onHide={modalClose}
                  />
                </li>
                <li>Duration: 3 Days</li>
                <li>
                  What should I bring?
                  <Button
                    variant="outline-warning"
                    className="infoButton"
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      this.setState({
                        TicketInfoModal: false,
                        ChecklistModal: true
                      })
                    }
                  >
                    Small Checklist
                  </Button>
                  <ChecklistModal
                    show={this.state.ChecklistModal}
                    onHide={modalClose}
                  />
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
              <Gallery images={IMAGES} id="homeGallery" />,
            </Cell>
            <Cell col={6} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;

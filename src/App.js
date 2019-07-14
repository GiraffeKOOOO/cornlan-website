import React from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Content,
  FooterSection,
  FooterLinkList,
  Footer
} from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./pages/main";
import cornlanLogo from "./images/logo.png";
import smallLogo from "./images/logo_small.png";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          id="header"
          title={
            <span>
              <Link to="/">
                <img
                  src={cornlanLogo}
                  alt="cornlan logo"
                  width="200px"
                  height="60px"
                />
              </Link>
            </span>
          }
          scroll
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/nextEvents">Next Events</Link>
            <Link to="/pastEvents">Past Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
        <Footer size="mini">
          <FooterSection
            type="left"
            logo={
              <img
                src={smallLogo}
                alt="small-logo"
                style={{ width: "50px", height: "30px" }}
              />
            }
          >
            <FooterLinkList>
              <a href="/"> ©CornLAN</a>
              <a href="help">Help</a>
              <a href="privacy">Privacy & Terms</a>
              <a href="cookies">Cookies</a>
            </FooterLinkList>
          </FooterSection>
          <FooterSection type="center">
            <FooterLinkList>
              <a href="/"> Find us on: </a>
              <a
                href="https://www.facebook.com/cornlanuk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/channel/UCNVqt3O4_fEUFGf9hARty9Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
              {/* 
              a tag for instagram when I make one
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              */}
              <a
                href="https://discord.gg/JywShWe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;

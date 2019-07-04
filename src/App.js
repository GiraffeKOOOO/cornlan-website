import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './pages/main';
import cornlanLogo from './images/logo.png';



function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header id="header" title={<span><Link to="/"><img src={cornlanLogo} alt="cornlan logo" width="200px" height="60px"/></Link></span>} scroll>
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
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;

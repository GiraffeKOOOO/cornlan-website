import React from 'react';
import { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Logo from '../images/logo.png';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <div style={{width: '80%', margin: 'auto'}}>
                    <Grid className="grid-1">
                        <Cell col={1}><img
                        src={Logo}
                        alt="cornlan logo"
                        className="logo"
                        /></Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Home;
import React from 'react';

import { Link } from 'react-router';

class NavBar extends React.Component {

    render() {
        return (
            <div>
            	<ul>
            		<li><Link to="/"><img src={require('../images/resul_logo.png')} /></Link></li>
            		<li><Link to="/results">Tulokset</Link></li>
        		</ul>
            </div>
        );
    }
}

export default NavBar;
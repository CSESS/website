import React, {Component} from 'react';
import './footer.css';

import {SESSION} from '../const';

class Footer extends Component{
    render(){
        return (
            <footer className="footer">
                The Computer Science and Engineering Students' Society, HKUSTSU, Session {SESSION}
            </footer>
        );
    }
}

export default Footer;

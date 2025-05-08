import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import { TITLE } from '../../../const';

import Table from '../../table';

import './honMemPage.css';

class honMemPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            honMemList: []
        }
    }

    componentDidMount(){
        fetch('https://csess.su.hkust.edu.hk/api/honmem.php')
        .then(response => {return response.json()})
            .then(data => this.setState({honMemList: data}));
    }

    render(){
        return (
            <DocumentTitle title={`Honorary Members | ${TITLE}`}>
                <div className="honMemPage">
                    <div className="container">
                        <h1 className='pageHeader'>Honorary Members</h1>
                        <Table keys={[{id: 'session', display: 'Session'}, {id: 'position', display: 'Position'}, {id: 'name', display: 'Name'}]} datas={this.state.honMemList}/>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default honMemPage;

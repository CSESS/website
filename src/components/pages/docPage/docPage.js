import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import { TITLE } from '../../../const';

import Loader from '../../loader';

import './docPage.css';

class docPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            docs: []
        }
    }

    componentDidMount(){
        fetch('https://csess.su.hkust.edu.hk/api/documents.php')
        .then(response => {return response.json()})
            .then(data => this.setState({docs: data}));
    }

    renderDocs(){
        const docs = this.state.docs;
        if(docs && docs.length > 0){
            return docs.map((doc)=>{
                return (
                    <a href={doc.path} target="_blank" rel="noopener noreferrer" className='doc' key={doc.id}>
                        <div className="doc-detail doc-subject">
                            {doc.subject}
                        </div>
                        <div className="doc-detail doc-description">
                            {doc.description}
                        </div>
                        <div className="doc-detail doc-lastUpdate">
                            Last Update: {doc.lastUpdate}
                        </div>
                    </a>
            );
            });
        }else{
            return <Loader />
        }
    }

    render(){
        return (
            <DocumentTitle title={`Documents | ${TITLE}`}>
                <div className="docPage">
                    <div className="container">
                        <h1 className='pageHeader'>Documents</h1>
                        <div className="docs">
                            {this.renderDocs()}
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default docPage;

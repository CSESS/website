import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import groupBy from 'lodash/groupBy';
import keys from 'lodash/keys';
import size from 'lodash/size';

import { TITLE } from '../../../const';

import Loader from '../../loader';

import './publicationPage.css';

class publicationPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            publications: {}
        }
    }

    componentDidMount(){
        fetch('https://csess.su.hkust.edu.hk/api/publications.php')
        .then(response => {return response.json()})
            .then(data => {
                let pup = groupBy(data, 'session');
                this.setState({publications: pup});
            });
    }

    renderPublicationsBySession(session){
        const publications = this.state.publications;
        return publications[session].map((publication)=>{
            return (
                <a href={publication.path} target="_blank" rel="noopener noreferrer" className="publication" key={publication.id} >
                    <div className="publication-cover"><img src={publication.cover} alt={publication.title} /></div>
                    <div className="description"><div className="publication-name"><span>{publication.title}</span></div></div>
                </a>
            );
        })
    }

    renderPublicationGroup(){
        const publications = this.state.publications;
        if(publications && size(publications) > 0){
            return keys(publications).map((session)=>{
                return (
                    <div key={session}>
                        <h2>Session {session}</h2>
                        <div className="publications">
                            {this.renderPublicationsBySession(session)}
                        </div>
                    </div>
                );
            });
        }else{
            return <Loader />
        }
    }

    render(){
        return (
            <DocumentTitle title={`Publications | ${TITLE}`}>
                <div className="publicationPage">
                    <div className="container">
                        <h1 className='pageHeader'>Publications</h1>
                        {this.renderPublicationGroup()}
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default publicationPage;

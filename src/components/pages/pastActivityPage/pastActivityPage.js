import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import timeago from 'timeago.js';
import { TITLE } from '../../../const';

import { Link } from 'react-router-dom';

import Loader from '../../loader';

import './pastActivityPage.css';

function getRandomNumbers() {
    return Math.random() * 1000;
}

class pastActivityPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            activities: [],
            actToLoad: 10
        }
    }

    componentDidMount(){
        fetch('https://csess.su.hkust.edu.hk/api/activities.php?type=past')
        .then(response => {return response.json()})
            .then(data => this.setState({activities: data}));
    }

    setDefaultSrc(event){
        event.target.src = require('../../../assets/logo.svg');
    }

    renderActivites(){
        const activities = this.state.activities;
        if(activities && activities.length > 0){
            let loaded = 0;
            return activities.map((activity)=>{
                let random = getRandomNumbers();
                loaded ++;
                if(loaded > this.state.actToLoad){
                    return null;
                }
                return (
                    <Link key={activity.aid} to={`/activity/${activity.aid}`} className={`past-activity ${random < 50 ?'big':''} ${random > 800 ?'middle':''}`}>
                        <div className='act-image'><img onError={this.setDefaultSrc} src={activity.thumb} alt={activity.event}/></div>
                        <div className="act-detail">
                            <div className='act-name'><span>{activity.event}</span></div>
                            <div className='act-time'>{timeago().format(activity.starttime)}</div>
                        </div>
                    </Link>
                );
            })
        }else{
            return <Loader />
        }
    }

    render(){
        return (
            <DocumentTitle title={`Past Activities | ${TITLE}`}>
                <div className="pastActivityPage">
                    <div className="container">
                        <h1 className='pageHeader'>Past Activities</h1>
                        <div className='past-activities'>
                        {this.renderActivites()}
                        </div>
                        {
                            (this.state.activities && this.state.actToLoad < this.state.activities.length) &&
                            <button className='load-btn' onClick={() => {this.setState({actToLoad: this.state.actToLoad + 20})}}>Load More</button>
                        }
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default pastActivityPage;

import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import timeago from 'timeago.js';
import { TITLE } from '../../../const';

import { Link } from 'react-router-dom';

import Loader from '../../loader';

import '../indexPage/indexPage.css';
import './currentActivitiesPage.css';

function shortenString(str, length){
    if (str.length > length) {
      return str.substring(0, length - 3) + '...';
    } else {
      return str;
    }
}

class currentActivitiesPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            activities: [],
        }
    }

    componentDidMount(){
        fetch('https://csess.su.hkust.edu.hk/api/activities.php?type=current')
        .then(response => {return response.json()})
            .then(data => this.setState({activities: data}));
    }

    renderActivites(){
        const activities = this.state.activities;
        if(activities && activities.length > 0){
            return (
                <div className="activities">
                    {
                        activities.map((act, index)=>{
                            return (
                                <Link to={`/activity/${act.aid}`} className="activity" key={index}>
                                    <div className="activityDetails">
                                        <div className="title"><span>{shortenString(act.event, 60)}</span></div>
                                        <div className="date">{timeago().format(act.starttime)}</div>
                                    </div>
                                    <div className="thumb">
                                        <img src={act.thumb} alt={act.event}/>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            )
        }else{
            return <Loader />
        }
    }

    render(){
        return (
            <DocumentTitle title={`Activities | ${TITLE}`}>
                <div className="currentActivitiesPage">
                    <div className="container">
                        <h1 className='pageHeader'>Activities</h1>
                        {this.renderActivites()}
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default currentActivitiesPage;

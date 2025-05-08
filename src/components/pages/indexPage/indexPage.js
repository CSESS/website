import React, {Component, Fragment} from 'react';
import DocumentTitle from 'react-document-title';
import { withRouter, Link } from 'react-router-dom';

import timeago from 'timeago.js';

import { TITLE } from '../../../const';

import './indexPage.css';

import HomeLoader from './homeLoader';

function shortenString(str, length){
    if (str.length > length) {
      return str.substring(0, length - 3) + '...';
    } else {
      return str;
    }
}

class indexPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            activities: [],
            isLoading: true,
            hasError: false
        }
    }
    componentDidMount(){
        fetch('https://csess.su.hkust.edu.hk/api/activities.php')
        .then(response => {return response.json()})
            .then(data => this.setState({activities: data, isLoading: false}))
            .catch(error => this.setState({hasError: true}));

        fetch('https://csess.su.hkust.edu.hk/api/activities.php?type=upcoming')
        .then(response => {return response.json()})
            .then(data => this.setState({upcomingActivities: data}))
            .catch(error => this.setState({ hasError: true }));
    }

    renderActivities(){
        const {activities, isLoading, hasError} = this.state;
        if(hasError){
            return <div>We have encountered an error while fetching data, please try again later.</div>
        }
        if(!activities || isLoading){
            return (
                <Fragment>
                    <HomeLoader/>
                    <HomeLoader/>
                    <HomeLoader/>
                    <HomeLoader/>
                </Fragment>
            )
        }
        if(activities.length === 0){
            return <div>More events coming soon...</div>
        }
        return activities.map((act, index)=>{
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

    renderUpcomingActivities(){
        const {upcomingActivities} = this.state;
        return upcomingActivities.map((act, index)=>{
            return (
                <Link to={`/activity/${act.aid}`} className="activity" key={index} tabindex="0">
                    <div className="activityDetails">
                        <div className="title"><span>{shortenString(act.event, 40)}</span></div>
                        <div className="date">{timeago().format(act.starttime)}</div>
                    </div>
                    <div className="thumb">
                        <img src={act.thumb} alt={act.event}/>
                    </div>
                </Link>
            );
        })
    }

    renderUpcoming(){
        if(!this.state.upcomingActivities || this.state.upcomingActivities.length === 0){
            return (
                <Fragment />
            );
        }else{
            return(
                <div>
                    <h1>Upcoming Activities</h1>
                    <div className="activities">
                        {this.renderUpcomingActivities()}
                    </div>
                </div>
            );
        }

    }

    render(){
        return (
            <DocumentTitle title={`Home | ${TITLE}`}>
                <div className="indexPage">
                    <div className="container">
                        {this.renderUpcoming()}
                        <div>
                            <h1>Activities</h1>
                            <div className="activities">
                                {this.renderActivities()}
                            </div>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}

export default withRouter(indexPage);

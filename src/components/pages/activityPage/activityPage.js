import React, {Component, Fragment} from 'react';

import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { size } from 'lodash';

import { TITLE } from '../../../const';

import Loader from '../../loader';

import ShareIcon from '../../../assets/share.svg';
import CalendarIcon from '../../../assets/calendar.svg';

import './activityPage.css';

class activityPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            activity: {},
            notFound: false,
            couldShare: false
        }
    }

    componentDidMount(){
        if(navigator.share){
            this.setState({couldShare: true});
        }

        const id = this.props.match.params.id;
        fetch(`https://csess.su.hkust.edu.hk/api/activity.php?id=${id}`)
        .then(response => {return response.json()})
            .then(data => {
                if(data.error){
                    this.setState({notFound: true});
                }else{
                    this.setState({activity: data, notFound: false});
                }
            });
    }

    onClickShare(){
        const {activity} = this.state;
        if(navigator.share){
            let url = document.location.href;
            navigator.share({title: activity.event, url: url});
        }
    }

    renderData(){
        const id = this.props.match.params.id;
        const {activity, notFound, couldShare} = this.state;
        if(notFound){
            return (
                <Redirect to="/404/" />
            );
        }
        if(size(activity) > 0){
            return (
                <div>
                    <Helmet>
                        <meta name="Description" content={activity.description.replace(/<[^>]*>?/gm, '').substring(0, 150)} />
                        <meta property="og:title" content={`${activity.event ? activity.event : 'Activity'} | ${TITLE}`} />
                        <meta property="og:image" content={activity.thumb} />
                        <meta property="og:description" content={activity.description.replace(/<[^>]*>?/gm, '').substring(0, 150)} />
                    </Helmet>
                    <div className="act-page-grid">
                        <div className="header-side">
                            <h1 className='pageHeader'>Activity</h1>
                            <h2 className='activity-title'><span>{activity.event}</span></h2>
                            <div className='activity-details'>
                                <div className='activity-detail'>
                                    <div className='title'>Start Time</div>
                                    <div className='text'>{activity.starttime}</div>
                                </div>
                                <div className='activity-detail'>
                                    <div className='title'>End Time</div>
                                    <div className='text'>{activity.endtime}</div>
                                </div>
                                <div className='activity-detail'>
                                    <div className='detail title'>Venue</div>
                                    <div className='detail text'>{activity.venue}</div>
                                </div>
                            </div>
                        </div>
                        <div className="control-side">
                                {couldShare &&
                                    (
                                        <div className="control-item" onClick={this.onClickShare.bind(this)}>
                                            <img src={ShareIcon} alt="Share" />
                                        </div>
                                    )
                                }
                            <div className="control-item">
                                <a href={`https://csess.su.hkust.edu.hk/api/ical.php?id=${id}`} download><img src={CalendarIcon} alt="Download iCal" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='activity-desc'>
                        {
                            activity.description !== '<p></p>' &&
                            <Fragment>
                                <h3>Description</h3>
                                <div className='description' dangerouslySetInnerHTML={{__html: activity.description}}></div>
                            </Fragment>
                        }

                        {
                            activity.price !== '<p></p>' &&
                            <Fragment>
                                <h3>Price</h3>
                                <div className='price' dangerouslySetInnerHTML={{__html: activity.price}}></div>
                            </Fragment>
                        }
                        {
                            (activity.hasThumb) &&
                            <img className='thumb' src={activity.thumb} alt={activity.event} />
                        }
                    </div>
                </div>
            )
        }else{
            return <Loader />
        }

    }

    render(){
        return (
            <DocumentTitle title={`${this.state.activity.event ? this.state.activity.event : 'Activity'} | ${TITLE}`}>
                <div className="activityPage">
                    <div className="container">
                        {this.renderData()}
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default activityPage;

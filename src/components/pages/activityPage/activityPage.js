import React, {Component, Fragment} from 'react';

import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom';

import { TITLE } from '../../../const';

import Loader from '../../loader';

import './activityPage.css';

class activityPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            activity: {},
            notFound: false
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        fetch(`https://csess.su.ust.hk/api/activity.php?id=${id}`)
        .then(response => {return response.json()})
            .then(data => {
                if(data.error){
                    this.setState({notFound: true});
                }else{
                    this.setState({activity: data, notFound: false});
                }
            });
    }

    renderData(){
        const {activity, notFound} = this.state;
        if(notFound){
            return (
                <Redirect to="/404/" />
            );
        }
        if(activity){
            return (
                <div>
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
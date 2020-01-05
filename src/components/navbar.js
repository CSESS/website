import React, {Component} from 'react';
import './navbar.css';
import { NavLink, Link, withRouter } from 'react-router-dom';

import hambuger from '../assets/hambuger.svg';
import clear from '../assets/clear.svg';

const listItems = [
        {
            path: '/',
            displayName: 'Home'
        },
        {
            path: '/about/',
            displayName: 'About Us',
            child: [
                {
                    path: '/about/faq/',
                    displayName: 'FAQ 常見問題'
                },
                {
                    path: '/about/exco/',
                    displayName: 'Ex-co'
                },
                {
                    path: '/about/document/',
                    displayName: 'Document'
                },
                {
                    path: '/about/honary-member/',
                    displayName: 'Honary Members'
                }
            ]
        },
        {
            path: '/activity/',
            displayName: 'Activities',
            child: [
                {
                    path: '/activity/',
                    displayName: 'Current Session'
                },
                {
                    path: '/activity/past/',
                    displayName: 'Past Session'
                }
            ]
        },
        {
            path: '/welfare/',
            displayName: 'Welfare',
            child: [
                {
                    path: '/welfare/',
                    displayName: 'Society Product'
                },
                {
                    path: '/welfare/welfare-product/',
                    displayName: 'Welfare Product'
                },
                {
                    path: '/welfare/shops/',
                    displayName: 'Shop Discount'
                },
                {
                    path: '/welfare/publications/',
                    displayName: 'Publication'
                }
            ]
        },
        {
            path: '/sports/',
            displayName: 'Sports'
        },
        {
            path: '/link/',
            displayName: 'Links'
        }
    ];


class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isMobile: false,
            tabActive: false,
            activeIndex: "-1"
        };
    }

    componentDidMount(){
        window.addEventListener('resize', this.hendleResize.bind(this));
        this.setState({
            isMobile: window.innerWidth < 650
        });

        this.props.history.listen((location, action) => {
            this.setState({
                tabActive: false,
                activeIndex: '-1'
            });
        });
    }

    hendleResize(event){
        if(event.target.outerWidth < 650){
            this.setState({
                isMobile: true,
                tabActive: false
            });
        }else{
            this.setState({
                isMobile: false,
                tabActive: false
            });
        }

    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.hendleResize.bind(this));
    }


    renderChildren(items){
        return items.child.map((item, index) => {
            return(
                <Link to={item.path} className="nav_child_item" key={index} data-id={index}>{item.displayName}</Link>
            );
        });
    }

    renderNavItem(){
        return listItems.map((item, index)=>{
            return(
                <div key={index} className={`nav_group ${(this.state.activeIndex === ''+index) ? 'active' : ''}`}>
                    <NavLink to={item.path} className="nav_item" data-id={index} onClick={this.handleParentClick.bind(this)}>{item.displayName}</NavLink>
                    <ul className="nav_child">
                        {(item.child)? this.renderChildren(item) : ""}
                    </ul>
                </div>
            );
        });
    }

    handleHambugerClick(event){
        if(this.state.isMobile){
            this.setState({
                tabActive: !this.state.tabActive,
                activeIndex: '-1'
            });
        }
    }

    handleParentClick(event){
        if(this.state.isMobile){
            if(event.target.dataset.id === this.state.activeIndex || listItems[event.target.dataset.id].child.length === 0){
            }else{
                event.preventDefault();
                this.setState({
                    activeIndex: event.target.dataset.id
                });
            }
        }
    }

    render(){
        return (
            <div className={`navbar ${(this.state.tabActive && this.state.isMobile) ? 'active' : ''}`}>
                <div className={`hambuger ${(this.state.tabActive) ? 'active' : ''}`} onClick={this.handleHambugerClick.bind(this)}>
                    <img src={(this.state.tabActive ? clear : hambuger)} alt="-"/>
                </div>
                <nav className="nav">
                    {this.renderNavItem()}
                </nav>
            </div>
        );
    }
}

export default withRouter(NavBar);

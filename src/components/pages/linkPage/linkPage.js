import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import { TITLE } from '../../../const';

import './linkPage.css';

const Links = {
    cs: [
        {
            displayName: 'CSE UG Intranet',
            href: 'https://www.cse.ust.hk/ug/hkust_only/'
        },
        {
            displayName: 'Common Meeting Room Booking (ITSC VPN Required)',
            href: 'https://stubooking.cse.ust.hk/'
        },
        {
            displayName: 'CSE Course Assignment Submission System',
            href: 'https://course.cse.ust.hk/cass/submit.html'
        },
        {
            displayName: 'CS System',
            href: 'https://cssystem.cse.ust.hk/'
        }
    ],
    inside: [
        {
            displayName: 'HKUST',
            href: 'https://www.ust.hk',
        },
        {
            displayName: 'Department of Computer Science and Engineering',
            href: 'https://www.cse.ust.hk'
        },
        {
            displayName: 'myPortal',
            href: 'https://my.ust.hk/'
        },
        {
            displayName: 'Canvas',
            href: 'http://canvas.ust.hk'
        },
        {
            displayName: 'Path Advisor',
            href: 'https://pathadvisor.ust.hk/'
        },
        {
            displayName: 'School of Engineering',
            href: 'https://www.seng.ust.hk/web/eng/'
        },
        {
            displayName: 'The Computer Science and Engineering Alumni Association',
            href: 'https://www.cse.ust.hk/cseaa/main.html'
        }
    ],
    'outside': [
        {
            displayName: 'Hong Kong Computer Society',
            href: 'http://www.hkcs.org.hk/'
        },
        {
            displayName: 'Society of Computer Studies, HKPUSU',
            href: 'http://web.su.polyu.edu.hk/~scs/'
        },
        {
            displayName: 'Computer Science Association, Engineering Society, HKUSU',
            href: 'https://i.cs.hku.hk/~csa/'
        },
        {
            displayName: 'BU Computer Association',
            href: 'https://net4.hkbu.edu.hk/~sa-compu/'
        }
    ]
}

class linkPage extends Component{
    renderLinks(name){
        return Links[name].map((item, index) => {
            return (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="links-item"><span>{item.displayName}</span></a>
            );
        });
    }
    render(){
        return (
            <DocumentTitle title={`Links | ${TITLE}`}>
                <div className="linkPage">
                    <div className="container">
                        <h1 className="pageHeader">Links</h1>
                        <div>
                            <h2 className="highlighted">CS Student Portal</h2>
                            <div className="links">{this.renderLinks('cs')}</div>
                        </div>
                        <div>
                            <h2 className="highlighted">Inside HKUST</h2>
                            <div className="links">{this.renderLinks('inside')}</div>
                        </div>
                        <div>
                            <h2 className="highlighted">Outside HKUST</h2>
                            <div className="links">{this.renderLinks('outside')}</div>
                        </div>
                    </div>
                </div>
        </DocumentTitle>
        );
    }
}

export default linkPage;

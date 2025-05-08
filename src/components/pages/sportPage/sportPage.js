import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import { TITLE } from '../../../const';

import Table from '../../table';
import Select from '../../select';

import './sportPage.css';

class sportPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            sportType: 'Football',
            memberList: []
        }
    }

    componentDidMount(){
        fetch('https://csess.su.hkust.edu.hk/api/sportTeam.php?type=Football')
        .then(response => {return response.json()})
            .then(data => this.setState({memberList: data}));
    }

    handleTeamSelect(selected){
        this.setState({sportType: selected});

        fetch(`https://csess.su.hkust.edu.hk/api/sportTeam.php?type=${selected}`)
        .then(response => {return response.json()})
            .then(data => this.setState({memberList: data}));
    }

    render(){
        return (
            <DocumentTitle title={`Sports | ${TITLE}`}>
                <div className="sportPage">
                    <div className="container">
                        <h1 className='pageHeader'>Sports</h1>
                        <p>除了學業方面的發展，本會亦一向重視同學在體育方面的發展。本會設有3隊球隊，分別是羽毛球隊、足球隊及籃球隊，歡迎有興趣的同學加入。<br /> 此外，本年度，CSESS將會參與7項運動比賽，舉辦日期大致如下：
                        <br /> 環校跑 - 9月22日<br /> 水運會 - 9月24日<br /> 陸運會 - 11月19日<br /> 羽毛球比賽 - 9月28日開始，星期三比賽<br /> 籃球比賽 - 9月26日開始，星期一或四比賽<br /> 足球比賽 - 9月27日開始，星期二或五比賽<br />
                        <br /> 如同學有意參加本年度水運會、環校跑、陸運會或加入羽毛球、籃球隊或足球隊，歡迎聯絡本學生會幹事。

                        <br /><br /> Apart from academic development, we also attach much importance to the physical development of our members. CSESS has 3 sports teams, the badminton team, the football team and the basketball,
                                which welcomes all the CSE students who are interested to those sports to join. Besides, this year, CSESS will participate in seven different intramural competitions. The dates of the competitions
                                are shown as below:<br /> Campus Run – 22 Sept<br /> Aquatic Meet - 24 Sept<br /> Athletics Meet – 19 Nov<br /> Badminton Competition – start from 28 Sept, on Wednesday<br /> Basketball Competition – start from
                                26 Sept, on Monday or Thursday<br /> Football Competition - start from 27 Sept, on Tuesday or Friday<br /><br /> If you are interested to be one of the participants
                                in the aquatic meet, campus run, athletics meet or interested in joining the badminton team, basketball team or football team, you are welcome to contact us.
                        </p>

                        <div>
                            <div className="sportTitle">
                                <h3>{this.state.sportType} Team</h3>
                                <Select defaultValue='Football' options={['Football', 'Basketball', 'Badminton']} onSelect={this.handleTeamSelect.bind(this)}/>
                            </div>
                            <Table keys={[{id: 'fullName', display: 'Full Name'}, {id: 'nickName', display: 'Nick Name'}, {id: 'sex', display: 'Sex'}]} datas={this.state.memberList}/>
                        </div>

                    </div>
                </div>
        </DocumentTitle>
        );
    }
}

export default sportPage;

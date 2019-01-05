import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './select.css';

class Select extends Component{
    static propTypes = {
        defaultValue: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        onSelect: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            selected: this.props.defaultValue
        };
    }

    handleOptionSelect(selected){
        this.setState({selected: selected, isOpen: false});
        this.props.onSelect(selected);
    }

    renderOptions(){
        const options = this.props.options;
        if(options && options.length > 0){
            return options.map((option) => {
                return (
                    <button className="select-option" key={option} onClick={(event)=>{this.handleOptionSelect(option)}}>{option}</button>
                )
            });
        }else{
            return null;
        }
    }

    toggleSelect(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        return (
            <div className={`select ${(this.state.isOpen)?'active':''}`}>
                <button className="select-btn" onClick={this.toggleSelect.bind(this)}><span>{this.state.selected}</span><img src={require('../assets/down.svg')} alt="V"/></button>
                <div className='select-options'>
                    {this.renderOptions()}
                </div>
            </div>
        );
    }
}

export default Select;

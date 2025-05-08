import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import groupBy from 'lodash/groupBy';
import keys from 'lodash/keys';
import size from 'lodash/size';

import { TITLE } from '../../../const';

import Loader from '../../loader';

import './welfareProductPage.css';

class welfareProductPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            products: {}
        }
    }

    componentDidMount(){
        fetch('https://csess.su.hkust.edu.hk/api/welfareProducts.php')
        .then(response => {return response.json()})
            .then(data => {
                let prod = groupBy(data, 'session');
                this.setState({products: prod});
            });
    }

    renderProductsBySession(session){
        const products = this.state.products;
        return products[session].map((product)=>{
            return (
                <div className="welfare-product" key={product.id}>
                    <div className="product-image"><img src={product.image} alt={product.name} /></div>
                    <div className="description"><div className="product-name"><span>{product.name}</span></div></div>
                </div>
            );
        })
    }

    renderProductGroup(){
        const products = this.state.products;
        if(products && size(products) > 0){
            return keys(products).map((session)=>{
                return (
                    <div key={session}>
                        <h2>Session {session}</h2>
                        <div className="welfare-products">
                            {this.renderProductsBySession(session)}
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
            <DocumentTitle title={`Welfare Products | ${TITLE}`}>
                <div className="welfareProducts">
                    <div className="container">
                        <h1 className='pageHeader'>Welfare Products</h1>
                        <div className="products">
                            {this.renderProductGroup()}
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default welfareProductPage;

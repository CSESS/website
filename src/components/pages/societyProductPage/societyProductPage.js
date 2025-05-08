import React, {Component} from 'react';

import DocumentTitle from 'react-document-title';
import { TITLE } from '../../../const';

import Loader from '../../loader';

import './societyProductPage.css';

class societyProductPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            products: [],
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        fetch('https://csess.su.hkust.edu.hk/api/societyProducts.php')
        .then(response => {return response.json()})
            .then(data => this.setState({products: data, isLoading: false}));
    }

    renderSocietyProducts(){
        const {products, isLoading} = this.state;
        if (isLoading){
            return <Loader />;
        }
        if(products && products.length > 0){
            return products.map((product)=>{
                if(product.type === 'BUNDLE'){
                    return (
                        <div key={product.type} className='society-product bundle'>
                            <div className="product-type"><span>Bundle</span></div>
                            <div className="product-price">{product.price}</div>
                        </div>
                )
                }
                return (
                    <div key={product.type} className={`society-product ${(product.type === 'BUNDLE')?'bundle':''}`}>
                        <div className="product-type"><span>{product.type}</span></div>
                        <div className="product-image"><img src={product.image} alt={product.type} /></div>
                        <div className="product-price">{product.price}</div>
                    </div>
                );
            });
        }else{
            return <div>Society Products Coming Soon...</div>
        }
    }

    render(){
        return (
            <DocumentTitle title={`Society Products | ${TITLE}`}>
                <div className="societyProductPage">
                    <div className="container">
                        <h1 className='pageHeader'>Society Products</h1>
                        <div className="society-products">
                            {this.renderSocietyProducts()}
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default societyProductPage;

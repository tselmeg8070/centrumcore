import React from 'react';
import {Link} from 'react-router-dom';
import {numberWithCommas} from "../../utils/HelperFunctions";
import * as ROUTES from '../../constants/routes';

class Product extends React.Component {
    render() {
        const {name, image, price, category, id} = this.props;
        return (
            <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="card text-center card-product">
                    <div className="card-product__img">
                        <img className="card-img" src={image} alt=""/>
                    </div>
                    <div className="card-body">
                        <p>{category}</p>
                        <h4 className="card-product__title"><Link to={ROUTES.PRODUCT + id}>{name}</Link></h4>
                        <p className="card-product__price">{numberWithCommas(price)}₮</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;

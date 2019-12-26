import React from 'react';
import {connect} from "react-redux";
import {compose} from "recompose";
import {numberWithCommas} from "../../utils/HelperFunctions";
import {cartRemoveProduct} from "../../redux/actions/cart";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.cart.products
        }
    }

    onDeleteFromCart = (i) => {
        this.props.onRemoveFromCart(i);
        this.props.decrementCount();
        this.setState(state =>  {
            state.products.splice(i, 1);
            return {
                products: state.products
            }
        })
    };

    render() {
        let i = -1;
        let price = 0;
        const products = this.state.products;
        return (
            <div>
                <section className="cart_area">
                    <div className="container">
                        <div className="cart_inner">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Бүтээгдэхүүн</th>
                                        <th scope="col">Үнэ</th>
                                        <th scope="col">Ширхэг</th>
                                        <th scope="col">Нийт үнэ</th>
                                        <th scope="col">Үйлдэл</th>
                                    </tr>
                                    </thead>
                                    <tbody>


                                    {products.map(product => {
                                        i++;
                                        price += product.price*product.quantity;
                                        return  <tr>
                                            <td>
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img width={80} src={product.image} alt=""/>
                                                    </div>
                                                    <div className="media-body">
                                                        <p>{product.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>{numberWithCommas(product.price)}₮</h5>
                                            </td>
                                            <td>
                                                <h5>{product.quantity}</h5>
                                            </td>
                                            <td>
                                                <h5>{numberWithCommas(product.price*product.quantity)}₮</h5>
                                            </td>
                                            <td>
                                                <h5><a onClick={() => this.onDeleteFromCart(i)}>x</a></h5>
                                            </td>
                                        </tr>

                                    })}
                                    <tr>
                                        <td>

                                        </td>
                                        <td>

                                        </td> <td>

                                        </td>
                                        <td>
                                            <h5>Нийт үнэ</h5>
                                        </td>
                                        <td>
                                            <h5>{numberWithCommas(price)}₮</h5>
                                        </td>
                                    </tr>

                                    <tr className="out_button_area">
                                        <td className="d-none-l">

                                        </td>
                                        <td className="">

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <div className="checkout_btn_inner d-flex align-items-center">
                                                <a className="primary-btn ml-2" href="#">Захиалах</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.productState.products,
        cart: state.cartState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveFromCart: (i) => {dispatch(cartRemoveProduct(i))},
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Cart);

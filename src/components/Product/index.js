import React from 'react';
import {withFirebase} from "../../firebase";
import {numberWithCommas} from "../../utils/HelperFunctions";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: "",
                image: "",
                description: "",
                category: "",
                price: 0
            },
            quantity: 1,
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.firebase.getProduct(this.props.match.params.id).then((snapshot) => {
            this.setState({product: snapshot.data()})
        });
    }

    handleChange = (e) => {
        this.setState({quantity: e.target.value});
    };

    handleSubmit = () => {
        this.props.incrementCount();
        window.addedToCart();
    };

    render() {
        return <div>
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">
                                    <img className="img-fluid" src={this.state.product.image} alt=""/>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <h3>{this.state.product.name}</h3>
                                <h2>{numberWithCommas(this.state.product.price)}₮</h2>
                                <ul className="list">
                                    <li><a className="active" href="#"><span>Төрөл</span> : {this.state.product.category}</a></li>
                                </ul>
                                <p>{this.state.product.description}</p>
                                <div className="product_count mt-4">
                                    <label>Ширхэг:</label>

                                    <input type="number" value={this.state.quantity} onChange={this.handleChange} title="Ширхэг:" className="input-text qty"/>
                                    <br/>
                                        <a onClick={this.handleSubmit} className="button primary-btn" href="#">Сагсанд нэмэх</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withFirebase(Product);

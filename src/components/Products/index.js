import React from 'react';
import Product from '../shared/Product';
import {connect} from "react-redux";
import {categories} from "../../constants/categories";

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            category: "Бүгд",
            query: ""
        }
    }

    componentDidMount() {
        this.setState({products: this.props.products})
    }

    handleChange = (e) => {
        this.setState({query: e.target.value})
    };

    render() {
        return (
            <section className="section-margin--small mb-5 pt-0 mt-4">
                {console.log(this.state)}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="sidebar-categories">
                                <div className="head">Төрөл</div>
                                <ul className="main-categories">
                                    <li className="common-filter">
                                        <ul>
                                            <li className="filter-list"><input className="pixel-radio" type="radio"
                                                                               onChange={() => {
                                                                                   this.setState({category: 'Бүгд'});
                                                                               }}
                                                                               checked={'Бүгд' === this.state.category}
                                                                               name="brand"/><label
                                                htmlFor="men">Бүгд<span> ({this.state.products.length})</span></label>
                                            </li>
                                            {categories.map(category =>
                                                <li className="filter-list"><input className="pixel-radio" type="radio"
                                                                                   onChange={() => {
                                                                                       this.setState({category: category.name});
                                                                                   }}
                                                                                   checked={category.name === this.state.category}
                                                                                   name="brand"/><label
                                                    htmlFor="men">{category.name}<span> ({this.state.products.filter((product) => {
                                                    return product.category === category.name
                                                }).length})</span></label></li>
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-9 col-lg-8 col-md-7">
                            <div className="filter-bar d-flex flex-wrap align-items-center">

                                <div className="sorting mr-auto">

                                </div>
                                <div>
                                    <div className="input-group filter-bar-search">
                                        <input type="text" placeholder="Хайх" onChange={this.handleChange}/>
                                        <div className="input-group-append">
                                            <button type="button"><i className="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <section className="lattest-product-area pb-40 category-list">
                                <div className="row">
                                    {this.state.products.map(product => {
                                            if (this.state.category === 'Бүгд') {
                                                if (this.state.query === "") {
                                                    return <Product key={product.id} name={product.name}
                                                                    category={product.category} price={product.price}
                                                                    id={product.id} image={product.image}/>
                                                } else if (product.name.toLowerCase().includes(this.state.query.toLowerCase())) {
                                                    return <Product key={product.id} name={product.name}
                                                                    category={product.category} price={product.price}
                                                                    id={product.id} image={product.image}/>
                                                }
                                            } else if (product.category === this.state.category) {
                                                if (this.state.query === "") {
                                                    return <Product key={product.id} name={product.name}
                                                                    category={product.category} price={product.price}
                                                                    id={product.id} image={product.image}/>
                                                } else if (product.name.toLowerCase().includes(this.state.query.toLowerCase())) {
                                                    return <Product key={product.id} name={product.name}
                                                                    category={product.category} price={product.price}
                                                                    id={product.id} image={product.image}/>
                                                }
                                            }

                                        }
                                    )}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (state) => {
    return {
        products: state.productState.products
    }
};

export default connect(mapDispatchToProps)(Products);

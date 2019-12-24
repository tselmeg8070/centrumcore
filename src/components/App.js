import React from 'react';
import {compose} from 'recompose';
import {withFirebase} from '../firebase';
import {connect} from 'react-redux';
import {setProducts} from "../redux/actions/product";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {withAuthentication} from '../session';
import * as ROUTER from '../constants/routes';
import Navigation from './shared/Navigation';
import LandingPage from './Landing';
import ProductsPage from './Products';
import ProductPage from './Product';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.props.productsDispatch([]);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        this.props.firebase.getProductsInstance().then(snap => {
            this.props.productsDispatch(snap.data().products);
        })
    }

    incrementCount = () => {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    };
    decrementCount() {
        this.setState({count: this.state.count - 1})
    }
    render() {
    return (
      <Router>
        <Navigation count={this.state.count}/>
          {this.props.products !== undefined && this.props.products.length > 0 && <div>
              <Route exact path={ROUTER.LANDING} component={() => <LandingPage/>}/>
              <Route exact path={ROUTER.PRODUCTS} component={ProductsPage}/>
              <Route exact path={ROUTER.PRODUCT + ':id'} render={(props) => (
                  <ProductPage incrementCount={this.incrementCount} key={props.match.params.id} {...props} />)
              } />
          </div>}
      </Router>
    )
  }

}

const mapStateToProps = (state) => {
    return {
        products: state.productState.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        productsDispatch: (products) => dispatch(setProducts(products))
    }
};

export default compose(withFirebase, connect(mapStateToProps, mapDispatchToProps))(App);

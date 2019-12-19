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
class App extends React.Component {

    constructor(props) {
        super(props);
        this.props.productsDispatch([]);
    }
    componentDidMount() {
        this.props.firebase.getProductsInstance().then(snap => {
            this.props.productsDispatch(snap.data().products);
        })
    }

    render() {
    return (
      <Router>
        <Navigation/>
          {this.props.products !== undefined && this.props.products.length > 0 && <div>
              <Route exact path={ROUTER.LANDING} component={LandingPage}/>
              <Route exact path={ROUTER.PRODUCTS} component={ProductsPage}/>
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

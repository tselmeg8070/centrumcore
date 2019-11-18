import React from 'react';
import {Link} from 'react-router-dom';
class Navigation extends React.Component {
    render() {
        return (
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <Link className="navbar-brand logo_h" to="index.html"><img src={process.env.PUBLIC_URL + "/img/logo.png"} alt=""/></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                                    <li className="nav-item active"><Link className="nav-link" to="index.html">Home</Link>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                           role="button" aria-haspopup="true"
                                           aria-expanded="false">Shop</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="category.html">Shop
                                                Category</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="single-product.html">Product
                                                Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="checkout.html">Product
                                                Checkout</Link></li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                        to="confirmation.html">Confirmation</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="cart.html">Shopping
                                                Cart</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                           role="button" aria-haspopup="true"
                                           aria-expanded="false">Blog</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="blog.html">Blog</Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link" to="single-blog.html">Blog
                                                Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                           role="button" aria-haspopup="true"
                                           aria-expanded="false">Pages</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><Link className="nav-link" to="login.html">Login</Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                        to="register.html">Register</Link></li>
                                            <li className="nav-item"><Link className="nav-link"
                                                                        to="tracking-order.html">Tracking</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="contact.html">Contact</Link>
                                    </li>
                                </ul>

                                <ul className="nav-shop">
                                    <li className="nav-item">
                                        <button><i className="ti-search"></i></button>
                                    </li>
                                    <li className="nav-item">
                                        <button><i className="ti-shopping-cart"></i><span
                                            className="nav-shop__circle">3</span></button>
                                    </li>
                                    <li className="nav-item"><Link className="button button-header" to="#">Buy Now</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Navigation;

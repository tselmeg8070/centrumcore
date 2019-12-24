import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
class Navigation extends React.Component {
    render() {
        return (
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <Link className="navbar-brand logo_h" to={ROUTES.LANDING}><img src={process.env.PUBLIC_URL + "/img/logo.png"} alt=""/></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto ">
                                    <li className="nav-item"><Link className="nav-link" to={ROUTES.LANDING}>Нүүр</Link>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to={ROUTES.PRODUCTS}>Бараанууд</Link>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to={ROUTES.LANDING}>Камер</Link>
                                    </li>
                                </ul>

                                <ul className="nav-shop">
                                    <li className="nav-item">
                                        <button><i className="ti-shopping-cart"></i><span
                                            className="nav-shop__circle">{this.props.count}</span></button>
                                    </li>
                                    {/*<li className="nav-item"><Link className="button button-header" to="#">Buy Now</Link>*/}
                                    {/*</li>*/}
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

import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse">
                            <i className="fa fa-align-justify"></i>
                        </button>
                        <a className="navbar-brand" href="./">D&amp;Database</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">

                                <a
                                    href="#"
                                    className="dropdown-toggle userButton"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Player Tools
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Races</a>
                                    </li>
                                    <li>
                                        <a href="#">classNamees</a>
                                    </li>
                                    <li>
                                        <a href="#">Backgrounds</a>
                                    </li>
                                    <li>
                                        <a href="#">Items &amp; Equipment</a>
                                    </li>
                                    <li>
                                        <a href="#">Spells</a>
                                    </li>
                                    <li>
                                        <a href="#">Feats</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">

                                <a
                                    href="#"
                                    className="dropdown-toggle userButton"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">DM Tools
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Monsters</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">

                                <a
                                    href="#"
                                    className="dropdown-toggle userButton"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">User<span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown"></li>
                        </ul>
                        <form className="navbar-form">
                            <div className="form-group" action="index.php" method="get" role="search">
                                <div className="input-group navSearch">
                                    <input
                                        className="form-control"
                                        name="s"
                                        placeholder="Search all of 5E"
                                        value=''
                                        type="text"/>
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

        )
    }
}

export default NavBar;
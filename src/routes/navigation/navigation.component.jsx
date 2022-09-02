import "./navigation.styles.scss";
import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

export default class Navigation extends Component {
    render() {
        return (
            <>
                <div className="navigation">
                    <Link className="logo-container" to="/">
                        <CrownLogo className="logo" />
                    </Link>
                    <div className="nav-links-container">
                        <Link className="nav-link" to="/shop">
                            SHOP
                        </Link>
                        <Link className="nav-link" to="/sign-in">
                            SIGN-IN
                        </Link>
                    </div>
                </div>
                <Outlet />
            </>
        )
    }
}
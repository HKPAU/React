import React, {Component, } from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <CartSummary removeFromCart={this.props.delete_product} cart_products={this.props.cart_product}/>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navi;
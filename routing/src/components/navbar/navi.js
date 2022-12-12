import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

function Example() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">HK</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/products">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/cart-detail">Cart</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;
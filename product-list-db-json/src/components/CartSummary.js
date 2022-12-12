import React, {Component} from 'react';
import {Badge, Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

class CartSummary extends Component {
    renderCartSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart - <Badge className="bg-info">{this.props.cart_products.length}</Badge>
                </DropdownToggle>
                <DropdownMenu>
                    {this.props.cart_products.map(cart_product => (
                        <DropdownItem key={cart_product.product_id}><Button onClick={() => this.props.removeFromCart(cart_product.product_id)} className="btn btn-danger btn-sm"> <FontAwesomeIcon size="xs" icon={faTrash} /></Button> - {cart_product.product_name} - <Badge
                            className="bg-success">{cart_product.product_count}</Badge></DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    emtpyCartSummary(){
        return (
            <Badge className="bg-danger">0</Badge>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart_products.length > 0 ? this.renderCartSummary() : this.emtpyCartSummary()}
            </div>
        );
    }
}

export default CartSummary;
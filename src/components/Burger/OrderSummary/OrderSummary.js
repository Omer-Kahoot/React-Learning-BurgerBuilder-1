import React, { Component } from 'react';
import classes from './OrderSummary.module.css'
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This could be a functional component, doesn't have to be a class component just for checking, this is done.
    componentDidUpdate() {
        console.log('[OrderSummary] Didupdate');
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients).map((mpKey) => {
            return <li key={mpKey}><span style={{ textTransform: 'capitalize' }}>{mpKey}</span> : {this.props.ingredients[mpKey]}</li>
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;
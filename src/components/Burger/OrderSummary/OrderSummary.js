import React from 'react';
import classes from './OrderSummary.module.css'
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((mpKey)=>{
        return <li key={mpKey}><span style={{textTransform: 'capitalize'}}>{mpKey}</span> : {props.ingredients[mpKey]}</li>
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;
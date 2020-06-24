import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as orderActions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token);
    }

    render() {
        let ordersElement = <Spinner />;
        if (!this.props.loading) {
            ordersElement = (
                <div>
                    {
                        this.props.orders.map(order => {
                            return (<Order
                                key={order.id}
                                ingredients={order.ingredients}
                                price={order.price}

                            />);
                        })
                    }
                </div>
            );
        }

        return ordersElement;
    }

}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(orderActions.fetchOrdersStartAsync(token))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
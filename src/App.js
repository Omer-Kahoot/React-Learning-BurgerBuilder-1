import React, { Component } from 'react';
import Layout from './containers//Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
/*import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';*/
import Logout from './containers/Auth/Logout/Logout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth');
});

class App extends Component {
  state = {
    show: true
  };

  componentDidMount() {
    this.props.onTryAutoSignup();
    /*setTimeout(()=>{
      this.setState({
        show: false
      });
    }, 5000);*/
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" exact component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/auth" exact component={asyncAuth} />          
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
          {/*this.state.show ? <BurgerBuilder></BurgerBuilder> : null }
          <Checkout />*/}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

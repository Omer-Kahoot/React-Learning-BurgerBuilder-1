import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer : false
    };

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer : false
        });
    }

    sideBarOpenedHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer : !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideBarOpenedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}

export default Layout;
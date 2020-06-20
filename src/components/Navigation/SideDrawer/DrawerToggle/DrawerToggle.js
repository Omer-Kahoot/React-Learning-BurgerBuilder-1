import React from 'react';
import PropTypes from 'prop-types';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

drawerToggle.propTypes = {
    clicked: PropTypes.func
}

export default drawerToggle;
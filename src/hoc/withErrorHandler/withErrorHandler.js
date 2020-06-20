import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                error: null
            };
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });            
        }

        state = {
            error: null
        }

        //The following is definitely needed since if we don't use this, whenever a new component is created that
        //is wrapped inside this componetn it will call its constructor and interceptors will get created.
        //Now even if the axios instance is same but new interceptors will be created, and now even if that component
        //is not being used anymore the interceptors since they haven't been ejected, will remain in memory not doing anything.
        //and there is a memory leak, so we need to eject them whenever our compononet has unmounted.
        componentWillUnmount = () => {
            console.log('Will Unmount', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null});
        }

        /* Since this will run after all of the children component did mount have run, what will happen is
        that since we have a call to the backend database to get data inside burger builder's component did mount
        function the interceptor won't even be set before the call due to which the error won't get caught over here.
        For this best place to put it in componentWillMount or inside the construcotr since componentWillMount is 
        obsolete and support will not be present for it in the future.
        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }*/

        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
import React, { Component } from 'react';
import Layout from './containers//Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    show: true
  };

  componentDidMount(){
    /*setTimeout(()=>{
      this.setState({
        show: false
      });
    }, 5000);*/
  }

  render() {
    return (
      <div>       
        <Layout>
          {this.state.show ? <BurgerBuilder></BurgerBuilder> : null }
        </Layout>
      </div>
    );
  }
}

export default App;

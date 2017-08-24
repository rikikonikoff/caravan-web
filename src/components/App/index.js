import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import React, { Component, cloneElement } from 'react';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {
  render(){
    return(
      <div className='container'>
        {cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(App);

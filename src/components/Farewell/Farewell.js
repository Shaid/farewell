import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as farewellActions from '../../actions/farewell';

import Message from './Message/Message';

 class Farewell extends Component {
   static propTypes: {
     actions: PropTypes.object.isRequired,
     farewell: PropTypes.array.isRequired
   }
  render() {
    return (
      <div>
        <Message farewell={this.props.farewell} />
        <button onClick={this.props.actions.generateFarewell}>Another!</button>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    farewell: state.farewell
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(farewellActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Farewell);

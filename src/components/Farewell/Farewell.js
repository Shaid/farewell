import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as farewellActions from '../../actions/farewell';

import './Farewell.css';

import Message from './Message/Message';

 class Farewell extends Component {
   static propTypes: {
     actions: PropTypes.object.isRequired,
     farewell: PropTypes.array.isRequired,
     subject: PropTypes.string.isRequired
   };

   render() {
     return (
        <div className="Farewell">
          <div className="Message">
            <Message subject={this.props.subject} farewell={this.props.farewell} />
          </div>
          <footer onClick={this.props.actions.generateFarewell} className="Footer">
            <a >Another!</a>
          </footer>
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

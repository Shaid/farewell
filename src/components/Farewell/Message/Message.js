import React, { Component, PropTypes } from 'react';
import { sample } from 'lodash';

import './Message.css';

const fonts = [
  'indie-flower',
  'gloria-hallelujah',
  'permanent-maker',
  'reenie-beanie',
  'gochi-hand',
  'crafty-girls'
]

const salutations = require('./strings/salutations');
const fragments = require('./strings/messages');

export default class Message extends Component {
  static propTypes = {
    farewell: PropTypes.object.isRequired
  }

  constructor(){
    super();

    this.state = {
      message: {
        start: "Can't believe you're leaving!",
        middle: "I think some others want to tell you how they feel. Press the 'another' link for more!",
        end: "Cheers,"
      }
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      message: {
        start: sample(fragments.start),
        middle: sample(fragments.middle),
        end: sample(fragments.end)
      }
    });
  }

  render() {
    const {message, author} = this.props.farewell;
    const {subject} = this.props;
    const {start, middle, end } = fragments;

    return (
      <blockquote className={'container message ' + sample(fonts)}>
        <div>
          <p>{sample(salutations)} {subject},</p>
          <p>{this.state.message.start}. {this.state.message.middle}. {this.state.message.end}</p>
        </div>
        <footer className='author'>
          <cite>{author}</cite>
        </footer>
      </blockquote>
    );
  }
}

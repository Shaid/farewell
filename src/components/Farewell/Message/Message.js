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

export default class Message extends Component {
  static propTypes = {
    farewell: PropTypes.object.isRequired
  }

  render() {
    const {salutation, message, author} = this.props.farewell;
    const {subject} = this.props;

    return (
      <blockquote className={'container message '}>
        <div className='message__content'>
          <p>{salutation} {subject},</p>
          <p>{message.start} {message.middle} {message.end}</p>
        </div>
        <footer className='author'>
          <div className='author__photo'>
            <img src={author.portrait} role="presentation" />
          </div>
          <cite className='author__label'>
            <span className='author__name'>{author.name}</span>
            <span className='author__role'>{author.role}</span>
          </cite>
        </footer>
      </blockquote>
    );
  }
}

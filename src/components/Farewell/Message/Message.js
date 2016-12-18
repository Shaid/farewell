import React, { Component, PropTypes } from 'react';
import { sample } from 'lodash';
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
    const styles = require('./Message.css');
    console.log(styles);
    const {message, author} = this.props.farewell;

    return (
      <blockquote>
        <p className={styles.message + ' ' + styles[sample(fonts)]}>
          {message}
        </p>
        <footer className={styles.author}>
          <cite>{author}</cite>
        </footer>
      </blockquote>
    );
  }
}

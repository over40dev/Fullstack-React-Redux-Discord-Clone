import './Message.css';
import React from 'react';
import {Avatar} from '@material-ui/core'

function Message() {
  return (
    <div className="message">
      <Avatar/>
      <div className="message__info">
        <h4>
          Ted Cogent
          <span className="message__timestamp">
            this is a timestamp
          </span>
        </h4>

        <p>This is a message</p>
      </div>
    </div>
  )
}

export default Message;

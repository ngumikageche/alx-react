import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closebtn from './close-icon.png'
function Notifications () {
    function handleClick(){
        // Log a message to the console when the button is clicked.
        console.log('Close button has been clicked');
      }
    return (
        <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul className='notifications-list'>
            <li data-priority='default'>New course available</li>
            <li data-priority='urgent'>New resume available</li>
            <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification()}}/>
        </ul>
        <button
        style={{
            posistion: 'absolute',
            top: '0',
            right: '0',
            marginLeft: '93%'}}
            aria-label='Close'
            onClick={handleClick}>
            <img src={closebtn}  alt="close"/>
        </button>
        </div>
    );
}; 
export default Notifications;
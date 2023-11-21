import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import getLatestNotification from '../utils/utils';

function Notifications() {
    return (
    <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <ul>
            <li  data-priority='default'>New course available</li>
            <li data-priority='urgent'>New resume available</li>
            <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
        <button style={{ 
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            transform: 'scale(.4)',
            cursor: 'pointer',
         }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
            <img src={close} alt="close.png" />
        </button>
    </div>
    )
}
export default Notifications;
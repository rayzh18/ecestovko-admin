import React from 'react';

import img_setting from '../../assets/setting.png';
import img_alarm from '../../assets/alarm.png';
import img_avatar from '../../assets/avatar.png';

const Topbar = props => {
    return (
        <div className='top-bar-contain'>
            <div className='item'>
                <img src={img_avatar}></img>
                <div className='user-name'>admin@tonprint.sk</div>
                <i className="fas fa-sort-down"></i>
            </div>
            <div className='item'>
                <img src={img_alarm}></img>
                <span className='news-count'>5</span>
            </div>
            <div className='item'>
                <img src={img_setting}></img>
            </div>
        </div>
    )
}

export default Topbar;
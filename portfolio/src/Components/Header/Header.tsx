import { MY_NAME } from '../../Constants/Common';
import './Header.css';
import React from 'react';

const Header = () => {
    return ( 
        <div className="outer-header-container">
            <div className="text-black">

            </div>
            <div className="heading-div">
                {MY_NAME}
            </div>
            <div className="chat-div">

            </div>
        </div>
    );
}
 
export default Header;
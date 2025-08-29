import React from 'react';
import './StoryItem.css';
import { StoryItemProps } from '../../Types/ComponentProps';
import { getRandomColor } from '../../Constants/Constants';

const StoryItem = ({ icon: Icon, name, record }: StoryItemProps) => {
    const color = getRandomColor();
    const isSolid = Math.random() < 0.5;
    // const nameStyle = {
    //     color: isSolid ? 'rgba(255,255,255,0.85)' : color + 'cc',
    //     fontFamily: 'Alfa Slab One, regular',
    //     background: 'transparent',
    //     maxWidth: '70px',
    //     overflow: 'hidden',
    //     textOverflow: 'ellipsis',
    //     opacity: 1,
    // };
    return (
        <div className="storyitem-pic">
            <div
                className="story-top-container"
                style={{ background: isSolid ? color : color + '33' }}
            >
                {/* <div className="storyitem-name-rotated" style={nameStyle}>{name}</div> */}
                <Icon className="storyitem-icon" style={{ color: isSolid ? '#fff' : color }} />
            </div>
            <div className="story-small-container">
                <Icon className="storyitem-icon" />
            </div>
        </div>
    );
};

export default StoryItem;

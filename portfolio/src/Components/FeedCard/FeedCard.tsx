import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react';
import './FeedCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MovieIcon from '@mui/icons-material/Movie';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FeedCardProps } from '../../Types/ComponentProps';
import GradientGitHubIcon from '../../Assets/Icons/GradientGitHubIcon';
import GradientHeartBorderIcon from '../../Assets/Icons/GradientHeartBorderIcon';
import GradientMovieIcon from '../../Assets/Icons/GradientMovieIcon';

const FeedCard = ({ type, record }: FeedCardProps) => {
    // Card click handler
    const handleCardClick = () => {
        if (type === 'Projects' && record.gitlink) {
            window.open(record.gitlink, '_blank', 'noopener,noreferrer');
        }
    };
    const [liked, setLiked] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    const handleHeartClick = () => {
        setLiked(true);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 800);
    };
    const { name, StartDate, EndDate, Description, ...rest } = record;

    // useEffect(() => {
    //     console.log("Rendering FeedCard for:", type, record, liked);
    //     return () => setLiked(false);
    // }, [type]);
    const isClickable = type === 'Projects' || type === 'Experience';
    return (
        <div
            className={`feedcard-outer${isClickable ? ' feedcard-clickable' : ''}`}
        >
            <div
                className="feedcard-visual"
                onClick={isClickable ? handleCardClick : undefined}
                tabIndex={isClickable ? 0 : undefined}
                role={isClickable ? 'button' : undefined}
            >
                <img
                    src={record.visual}
                    alt={`${name} visual`}
                    className='feedcard-visual-img'
                />
            </div>
            <div className="feedcard-bottom">
                <div className="feedcard-options">
                    <span
                        className="feedcard-option"
                        style={{ position: 'relative', display: 'inline-block' }}

                    >
                        {/* Static heart (shows liked state) */}
                        {liked ? (
                            <FavoriteIcon
                                className="feedcard-option-icon-heart"
                                sx={{ color: '#e53935' }}
                            />
                        ) : (
                            <div
                                onClick={handleHeartClick}
                                onMouseEnter={() => setHoveredIcon('heart')}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                <GradientHeartBorderIcon hovered={hoveredIcon === 'heart'} />
                            </div>
                        )}
                        {/* Animated heart (fading effect) */}
                        {animate && (
                            <span
                                className={
                                    liked
                                        ? 'feedcard-option-icon-heart feedcard-heart-animate-red'
                                        : 'feedcard-option-icon-heart feedcard-heart-animate'
                                }
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    pointerEvents: 'none',
                                }}
                            >
                                <FavoriteIcon sx={{ color: '#e53935' }} />
                            </span>
                        )}
                    </span>
                    {/* <div 
                    className="feedcard-option-icon"
                    onMouseEnter={() => setHoveredIcon('movie')}
                    onMouseLeave={() => setHoveredIcon(null)}
                    >
                        <GradientMovieIcon hovered={hoveredIcon === 'movie'} />
                    </div> */}
                    {type === 'Projects' && record.gitlink && (
                        <a
                            className="feedcard-option-icon"
                            href={record.gitlink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredIcon('github')}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            <GradientGitHubIcon
                                hovered={hoveredIcon === 'github'}
                            />
                        </a>
                    )}
                </div>
                <div
                    className="feedcard-description"
                    onClick={isClickable ? handleCardClick : undefined}
                    tabIndex={isClickable ? 0 : undefined}
                    role={isClickable ? 'button' : undefined}
                >
                    {name && (
                        <div className="feedcard-name">{name}</div>
                    )}

                    {type === 'Projects' && Description && (
                        <div className="feedcard-project-desc">{Description}</div>
                    )}

                    {Object.entries(rest).map(([key, value], idx) => (
                        (key === 'icon' || key === 'gitlink' || key.toLowerCase() === 'description') || key === 'visual' ? null : (
                            <div className="feedcard-desc-row" key={key + idx}>
                                <span className="feedcard-desc-value feedcard-desc-gray">
                                    {Array.isArray(value) ? (
                                        <ul className="feedcard-desc-list feedcard-desc-list-gray">
                                            {value.map((item, i) => (
                                                <li key={i} className="feedcard-desc-list-item-gray">{item}</li>
                                            ))}
                                        </ul>
                                    ) : String(value)}
                                </span>
                            </div>
                        )
                    ))}

                    {(StartDate || EndDate) && (
                        <div className="feedcard-dates">
                            {(StartDate || '') + (StartDate && EndDate ? ' - ' : '') + (EndDate || '')}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeedCard;

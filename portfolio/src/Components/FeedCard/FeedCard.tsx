import React from 'react';
import './FeedCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MovieIcon from '@mui/icons-material/Movie';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FeedCardProps } from '../../Types/ComponentProps';

const FeedCard = ({ type, record }: FeedCardProps) => {
    const { name, StartDate, EndDate, Description, ...rest } = record;
    return (
        <div className="feedcard-outer">
            <div className="feedcard-visual">
                Visuals for {type}
            </div>
            <div className="feedcard-bottom">
                <div className="feedcard-options">
                    <FavoriteBorderIcon
                        className="feedcard-option-icon"
                        sx={{
                            transition: 'transform 0.3s ease, fill 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.4)',
                                fill: '#b41080',
                            },
                        }}
                    />
                    <MovieIcon
                        className="feedcard-option-icon"
                        sx={{
                            transition: 'transform 0.3s ease, fill 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.4)',
                                fill: '#b41080',
                            },
                        }}
                    />
                    {type === 'Projects' && record.gitlink && (
                        <a className="feedcard-option-icon" href={record.gitlink} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon
                                className="feedcard-option-icon"
                                sx={{
                                    transition: 'transform 0.3s ease, fill 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.4)',
                                        fill: '#b41080',
                                    },
                                }}
                            />
                        </a>
                    )}
                </div>
                <div className="feedcard-description">
                    {name && (
                        <div className="feedcard-name">{name}</div>
                    )}

                    {type === 'Projects' && Description && (
                        <div className="feedcard-project-desc">{Description}</div>
                    )}
                    
                    {Object.entries(rest).map(([key, value], idx) => (
                        (key === 'icon' || key === 'gitlink' || key.toLowerCase() === 'description') ? null : (
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

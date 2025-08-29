import { useState } from 'react';
import { MY_NAME, MY_DESCRIPTION, MY_SOCIALS, MY_NAV_ITEMS } from '../../Constants/Common';
import './NavPanel.css';
import { NavPanelProps } from '../../Types/ComponentProps';

const NavPanel = ({ selectedNav, setSelectedNav }: NavPanelProps) => {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    return (
        <div className="navpanel-outer">
            <div className="navpanel-details">
                <div className="navpanel-profile-pic">
                    <img
                        src={require('../../Assets/Images/dev.jpeg')}
                        alt="Profile"
                        className="navpanel-profile-img"
                    />
                </div>
                <div className="navpanel-personal-details">
                    <div className="navpanel-name">{MY_NAME}</div>
                    <div className="navpanel-description">{MY_DESCRIPTION}</div>
                </div>
                <div className="navpanel-social-media">
                    {MY_SOCIALS.map((each: any) => (
                        <div
                            className="navpanel-social-sub"
                            key={each.name}
                        >
                            <a
                                href={each.link}
                                target={each.name === 'Resume' ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="social-icon-link"
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className="social-icon"
                                    onMouseEnter={() => setHoveredIcon(each.name)}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                >
                                    <each.icon hovered={hoveredIcon === each.name} />
                                </div>
                            </a>
                            <div className="social-name">{each.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="navpanel-navigation-options">
                {MY_NAV_ITEMS.map((item: any) => (
                    <div
                        className={`navpanel-nav-item${selectedNav === item.name ? ' navpanel-nav-item-selected' : ''}`}
                        key={item.name}
                        onClick={() => setSelectedNav(item.name)}
                    >
                        <span className={`${selectedNav === item.name ? ' navpanel-nav-icon-selected' : 'navpanel-nav-icon'}`}><item.icon /></span>
                        <span className={`${selectedNav === item.name ? ' navpanel-nav-name-selected' : 'navpanel-nav-name'}`}>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavPanel;
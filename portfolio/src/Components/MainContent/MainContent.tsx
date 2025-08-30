import './MainContent.css';
import Stories from '../Stories/Stories';
import { MainContentProps } from '../../Types/ComponentProps';
import Profile from '../Profile/Profile';
import FeedCard from '../FeedCard/FeedCard';
import { PROJECTS, WORK_EXPERIENCE, EDUCATION } from '../../Constants/Common';

const MainContent = ({ selectedNav }: MainContentProps) => {
    const feedCardData = selectedNav === 'Projects'
        ? PROJECTS
        : selectedNav === 'Experience'
            ? WORK_EXPERIENCE
            : EDUCATION;
    return (
        <div className="maincontent-outer">
            <div className="maincontent-stories">
                <Stories />
            </div>
            <div className="maincontent-feed">
                <div className="common-title">{selectedNav}</div>
                <div className={
                    selectedNav === 'Profile'
                        ? 'feed-profile'
                        : selectedNav === 'Education'
                            ? 'education-feed'
                            : 'feed'
                }>
                    {selectedNav === 'Profile' ? (
                        <Profile />
                    ) : (
                        feedCardData.map((item, index) => (
                            <FeedCard
                                type={selectedNav as 'Projects' | 'Experience' | 'Education'}
                                record={item}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainContent;
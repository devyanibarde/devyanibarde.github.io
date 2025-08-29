import './MainContent.css';
import Stories from '../Stories/Stories';
import { MainContentProps } from '../../Types/ComponentProps';
import Profile from '../Profile/Profile';

const MainContent = ({ selectedNav }: MainContentProps) => {
    return ( 
        <div className="maincontent-outer">
            <div className="maincontent-stories">
                <Stories />
            </div>
            <div className="maincontent-feed">
                <div className="common-title">{selectedNav}</div>
                <div className="feed">
                    {selectedNav === 'Profile' ? (
                        <Profile />
                    ) : (
                        <div>Other Content</div>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default MainContent;
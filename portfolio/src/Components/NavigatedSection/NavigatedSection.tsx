import { EDUCATION, PROJECTS, WORK_EXPERIENCE } from "../../Constants/Common";
import { MainContentProps } from "../../Types/ComponentProps";
import FeedCard from "../FeedCard/FeedCard";
import Profile from "../Profile/Profile";

const NavigatedSection = ({ selectedNav }: MainContentProps) => {
    const feedCardData = selectedNav === 'Projects'
        ? PROJECTS
        : selectedNav === 'Experience'
            ? WORK_EXPERIENCE
            : EDUCATION;
    return ( 
        <>
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
                            <div key={`${selectedNav}-${item.name || index}`}>
                            <FeedCard
                                type={selectedNav as 'Projects' | 'Experience' | 'Education'}
                                record={item}
                            />
                            </div>
                        ))
                    )}
                </div>
                </>
     );
}
 
export default NavigatedSection;
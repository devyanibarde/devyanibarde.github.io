import './MainContent.css';
import Stories from '../Stories/Stories';
import { MainContentProps } from '../../Types/ComponentProps';
import NavigatedSection from '../NavigatedSection/NavigatedSection';

const MainContent = ({ selectedNav }: MainContentProps) => {
    return (
        <div className="maincontent-outer">
            {/* <div className="maincontent-stories">
                <Stories />
            </div> */}
            <div className="maincontent-feed">
                <NavigatedSection selectedNav={selectedNav} />
            </div>
        </div>
    );
}

export default MainContent;
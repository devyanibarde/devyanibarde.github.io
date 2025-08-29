import React from 'react';
import './Stories.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { STORIES_TITLE } from '../../Constants/Constants';
import { MY_SKILLS, EDUCATION, WORK_EXPERIENCE, PROJECTS } from '../../Constants/Common';
import StoryItem from '../StoryItem/StoryItem';

const Stories = () => {
    return (
        <div className="stories-outer">
            <div className="content-title">
                <div className="common-title">{STORIES_TITLE}</div>
                <div className="watch-all">
                    <PlayCircleOutlineIcon style={{ verticalAlign: 'middle', fontSize: '1.1rem', marginRight: '4px' }} />
                    Watch All
                </div>
            </div>
            <div className="show-stories">
                {(() => {
                    // Gather all records with icon, type, and full record
                    const allStories: { icon: any, name: string, record: any }[] = [];
                    allStories.push(...MY_SKILLS.map((s: any) => ({ icon: s.icon, name: 'skill', record: s })));
                    allStories.push(...EDUCATION.map((e: any) => ({ icon: e.icon, name: 'education', record: e })));
                    allStories.push(...WORK_EXPERIENCE.map((w: any) => ({ icon: w.icon, name: 'experience', record: w })));
                    allStories.push(...PROJECTS.map((p: any) => ({ icon: p.icon, name: 'project', record: p })));
                    // Shuffle
                    for (let i = allStories.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [allStories[i], allStories[j]] = [allStories[j], allStories[i]];
                    }
                    return allStories.map((story, idx) => (
                        <StoryItem key={story.name + idx} icon={story.icon} name={story.name} record={story.record} />
                    ));
                })()}
            </div>
        </div>
    );
};

export default Stories;

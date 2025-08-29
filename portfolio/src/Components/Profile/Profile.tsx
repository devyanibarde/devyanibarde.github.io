import './Profile.css';
import { EXTENDED_DESCRIPTION, MY_SKILLS } from '../../Constants/Common';

const Profile = () => {
    return (
        <div className="profile-outer">
            <section className="profile-section">
                <h2 className="profile-subheading">About Me</h2>
                <p className="profile-description">{EXTENDED_DESCRIPTION}</p>
            </section>
            <section className="profile-section">
                <h2 className="profile-subheading">Skills</h2>
                <div className="profile-skills">
                    {MY_SKILLS.map((skill: any) => (
                        <div className="profile-skill-card" key={skill.name}>
                            <span className="profile-skill-icon"><skill.icon /></span>
                            <span className="profile-skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Profile;
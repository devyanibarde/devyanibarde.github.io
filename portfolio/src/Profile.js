import dev from './dev.jpeg';
import res from './Resume.pdf'

const Profile = () => {
    return ( 
        <div className="profile" id='profileid'>
            <div className="info">
                <div className="propic">
                    <img src = {dev} width="200" height="200"></img>
                </div>
                <div id="intro">
                    <p>Hi, My name is</p>
                    <h1>Devyani Barde</h1>
                </div>
            </div>
            <div className="outer">
                <div className="social">
                    <p><a href='mailto:devyanibarde@gmail.com'>devyanibarde@gmail.com</a></p>
                    <p><h1><a href="https://www.linkedin.com/in/devyanibarde/" class="fa fa-linkedin"></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://github.com/devyanibarde" class="fa fa-github"></a></h1></p>
                        <a href={res}><button>Resume</button></a>
                </div>
            
                <div className="about">
                    <h3>About Me:</h3>
                    <p>As a computer science professional with both a Bachelor's and Master's degree, I bring a well-rounded understanding of the field to my work as a web developer. With over a year of experience in the industry, I have honed my skills and developed a passion for coding. My combination of education and hands-on experience make me a valuable asset to any team, and my enthusiasm for the field drives me to continue learning and growing in my career.</p>
                    <h4>Skills:</h4>
                    <div className="skills">
                        <div className="skill1">
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className="skill2">
                            <ul>
                                <li>Python</li>
                                <li>DJango</li>
                            </ul>
                        </div>
                        <div className="skill3">
                            <ul>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>
        </div>
     );
}
 
export default Profile;
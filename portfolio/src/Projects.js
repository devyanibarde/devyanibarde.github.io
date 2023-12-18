import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
const Projects = () => {
    let proj = [
        {
            pname: 'Facial Emotion Recognition', 
            gitlink: 'https://github.com/devyanibarde/FacialEmotionRecognition', 
            desc: 'A computer visison based machine learning model is developed to detect seven different emotions in any given facial image.', 
            id: 1
        },
        {
            pname: 'Market', 
            gitlink: 'https://github.com/devyanibarde/Market', 
            desc: 'A web portal for online purchases, created with Django framework.', 
            id: 2
        },
        {
            pname: 'Plant Pathology', 
            gitlink: 'https://github.com/devyanibarde/PlantPathology', 
            desc: 'Machine learning-based model to accurately classify a given leaf image from the test dataset to a particular disease category, and to identify an individual disease from multiple disease symptoms on a single leaf image.', 
            id: 3
        },
        {
            pname: 'Identification of Meritorious Students', 
            gitlink: 'https://github.com/devyanibarde/IoMS', 
            desc: 'A web portal for schools to manage student data.', 
            id: 4
        }
      ];
    let tech = [
        {
            data: ['Python', 'Keras', 'Jupyter', 'Matplotlib'], 
            s_id: 1
        },
        {
            data: ['Python', 'Django', 'HTML', 'CSS'], 
            s_id: 2
        },
        {
            data: ['Python', 'Tensorflow', 'Jupyter'], 
            s_id: 3
        },
        {
            data: ['Java', 'HTML', 'CSS', 'MySQL'], 
            s_id: 4
        }
      ];
    return ( 
        <div className="projects" id="projects">
            <br></br><br></br><br></br><br></br>
            <h1>My Projects:</h1>
            <Carousel autoPlay="True" interval={6000} centerMode="True" infiniteLoop="True">
            {proj.map((proj) => (
                
                <div className="projdiv" key={proj.id}>
                    <table>
                        <tr>
                            <td><h3>{ proj.pname }</h3></td>
                            <td className="gitproj"><a href={ proj.gitlink } class="fa fa-github"></a></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                {proj.desc}
                            </td>
                        </tr>
                    </table>
                    {tech.map((tech) => (
                        <div className="techdiv" key={tech.s_id}>
                            { (tech.s_id === proj.id) &&
                            <table>
                                <tr>
                                {tech.data.map((item) => (
                                    <td><ul><li key={item}>{item}</li></ul></td>
                                ))}
                                </tr>
                            </table>
                            }
                        </div>
                    ))}
                </div>
                
            ))}
            </Carousel>
        </div>
     );
}
 
export default Projects;
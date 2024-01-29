import { useState } from "react";

const Experience = () => {
    const [selectedExp, setSelectedExp] = useState(2);
    let exp = [
        {
            company: 'Drishti Software Solutions', 
            role: 'Web Developer', 
            sd: 'January 2020', 
            ed: 'December 2020', 
            id: 0
        },
        {
            company: 'University of North Carolina at Charlotte', 
            role: 'Teaching Assistant', 
            sd: 'August 2021', 
            ed: 'December 2021', 
            id: 1
        },
        {
            company: 'DataEconomy Inc.', 
            role: 'Software Developer Intern', 
            sd: 'July 2023', 
            ed: 'Present', 
            id: 2
        }
    ]
    let desc = [
        {
            data: [
                'Improved website performance by implementing Asynchronous Network calls', 
                'Implemented complete Software Development Life Cycle (SDLC) including Design, Coding, Development, and Testing', 
                'Utilized CI/CD for faster and reliable deployment', 
                'Worked with technologies such as HTML5, CSS3, React.js, and JavaScript', 
                'Built user interfaces based on approved designs.', 
                'Experienced in Agile and Scrum methodologies', 
                'Contributed to the success of the company through hands-on approach and technical skills in web development.'
            ], 
            e_id: 0
        },
        {
            data: [
                'Worked as a teaching assistant for front-end web development courses', 
                'Tutored students on various topics in front-end web development', 
                'Performed assistant teaching duties such as providing critical help, grading papers and assignments', 
                'Contributed to students\' learning and success through one-on-one tutoring and support.'
            ], 
            e_id: 1
        },
        {
            data: [
                'Developed user-friendly interfaces using React.js and TypeScript, ensuring responsive design and cross-browser compatibility.',
                'Created reusable React components, effectively managing state with Redux and Context API.',
                'Utilized Git for version control, including branching, merging, and conflict resolution.',
                'Familiarity with popular Java frameworks such as Spring Boot for rapid application development.',
                'Contributed to code reviews, following best practices to enhance code quality and maintainability.'
            ], 
            e_id: 2
        }
    ]

    const handleClick = (id) => {
        setSelectedExp(id);
    }

    return ( 
        <div className="experience" id="experience">
            <br></br><br></br><br></br><br></br>
            <h1>Where I&apos;ve Worked:</h1>
            <div className = "expRight">
                {exp.toReversed().map((exp) => (
                <>
                    <div 
                        className = {(exp.id === selectedExp) ? "expTabSelected" : "expTab"}
                        key={exp.id}
                        onClick= {() => handleClick(exp.id)}
                    >
                        <h4>{ exp.company }</h4>
                    </div>
                </>
                ))}
            </div>
            {exp.toReversed().map((exp) => (
                <>
                <div 
                    className="expdiv"
                    style={{display: (selectedExp === exp.id) ? "" : "none"}}
                >
                    {(selectedExp === exp.id) &&
                    <>
                        <h3>{ exp.role } &#64; { exp.company }</h3>
                        <p>{ exp.sd } - { exp.ed }</p>
                        {desc.map((desc) => (
                            <div className="descdiv" key={desc.e_id}>
                                { (desc.e_id === exp.id) &&
                                    <ul>
                                        {desc.data.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        ))}
                    </>
                    }
                </div>
                </>
                ))}
        </div>
     );
}
 
export default Experience;
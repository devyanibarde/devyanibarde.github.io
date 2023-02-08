const Experience = () => {
    let exp = [
        {company: 'Drishti Software Solutions', role: 'Web Developer', sd: 'January 2020', ed: 'December 2020', id: 0},
        {company: 'University of North Carolina at Charlotte', role: 'Teaching Assistant', sd: 'August 2021', ed: 'December 2021', id: 1}
    ]
    let desc = [
        {data: ['Improved website performance by implementing Asynchronous Network calls', 'Implemented complete Software Development Life Cycle (SDLC) including Design, Coding, Development, and Testing', 'Utilized CI/CD for faster and reliable deployment', 'Worked with technologies such as HTML5, CSS3, React.js, and JavaScript', 'Built user interfaces based on approved designs.', 'Experienced in Agile and Scrum methodologies', 'Contributed to the success of the company through hands-on approach and technical skills in web development.'], e_id: 0},
        {data: ['Worked as a teaching assistant for front-end web development courses', 'Tutored students on various topics in front-end web development', 'Performed assistant teaching duties such as providing critical help, grading papers and assignments', 'Contributed to students&#64; learning and success through one-on-one tutoring and support.'], e_id: 1}
    ]
        
    
    return ( 
        <div className="experience" id="experience">
            <h1>Where I&apos;ve Worked:</h1>
            {exp.map((exp) => (
                <div className="expdiv" key={exp.id}>
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
                </div>
            ))}
        </div>
     );
}
 
export default Experience;
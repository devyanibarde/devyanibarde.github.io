const Experience = () => {
    let exp = [
        {company: 'Drishti Software Solutions', role: 'Web Developer', sd: 'January 2020', ed: 'December 2020', id: 1},
        {company: 'University of North Carolina at Charlotte', role: 'Teaching Assistant', sd: 'August 2021', ed: 'December 2021', id: 2}
    ]
    return ( 
        <div className="experience" id="experience">
            <h1>Where I&apos;ve Worked:</h1>
            {exp.map((exp) => (
                <div className="expdiv" key={exp.id}>
                    <h3>{ exp.role } &#64; { exp.company }</h3>
                    <p>{ exp.sd } - { exp.ed }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Experience;
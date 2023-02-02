import { useState } from 'react';

const Education = () => {
    let edu = [
        {university: 'University of North Carolina at Charlotte', degree: 'Master of Science', major: 'Computer Science', startdate: 'January 2021', enddate: 'December 2022', id: 1},
        {university: 'Sant Gadge Baba Amravati University', degree: 'Bachelor of Engineering', major: 'Computer Science and Engineering', startdate: 'August 2015', enddate: 'October 2019', id: 2}
    ];

    return ( 
        <div className="education" id='education'>
                <h1>Universities I went to:</h1>
                {edu.map((edu) => (
                    <div className="edudiv" key={edu.id}>
                        <h3>{ edu.university }</h3>
                        <p><span className='deg'>{ edu.degree }</span> in { edu.major }</p>
                        <p>{ edu.startdate } - { edu.enddate }</p>
                    </div>
                ))}
        </div>
     );
}
 
export default Education;
import React from "react";
import "./skills.css"

const Skills = () => {
    return (
        <>
            <div className="skills">
                <p>Skills</p>
                <div className="logos">
                    <ul>
                        <li><img src="https://skillicons.dev/icons?i=html" alt="skill-icon"/></li>
                        <li><img src="https://skillicons.dev/icons?i=css" alt="skill-icon"/></li>
                        <li><img src="https://skillicons.dev/icons?i=js" alt="skill-icon"/></li>
                        <li><img src="https://skillicons.dev/icons?i=react" alt="skill-icon"/></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skills;
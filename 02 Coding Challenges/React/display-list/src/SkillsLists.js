import React from "react";

const SkillsList = ({ skills }) => {
    return (
        <div>
            <h2>Skills</h2>
            {skills && skills.length > 0 ? (
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            ) : (
                <p>No skills to diplay</p>
            )}
        </div>
    )
}

export default SkillsList
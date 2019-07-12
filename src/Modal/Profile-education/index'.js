import React from "react"

function ProfileEducation(props) {
    return (
        <div>
            <input type="text" name="education" id="" placeholder="Education" value={props.education}
                   onChange={props.handleChange}/>
        </div>
    );
}

export default ProfileEducation;
import React from "react"

function ProfileName(props) {
    return (
        <div>
            <input type="text" name="name" id="" placeholder="Name" value={props.name}
                   onChange={props.handleChange}/>
        </div>
    );
}

export default ProfileName;



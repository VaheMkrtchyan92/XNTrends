import React from "react"
import "./index.css"
function ProfileRegister(props) {
    return (
        <div>
            <button className="btn-register" onClick={props.buttonClick}>Register</button>
        </div>
    );
}

export default ProfileRegister
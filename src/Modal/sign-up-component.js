import React from "react"
import "./sign-up-component.css"
import PictureProfile from "./Profile-picture";
import ProfileName from "./Profile-name";
import ProfileEducation from "./Profile-education/index'";
import ProfileRegister from "./Profile-register";


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            name: "",
            education: "",
            file: "",
            imagePreviewUrl:"",
        }
    }

    handleChange = event => {

        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleImageUpload = e => {
        let reader = new FileReader();
        let file = e.target.files[0];

        console.log(file)

        if(!file) {
            return;
        }

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    };


    handleRegister = () => {
        return this.setState({step: 2});

    };

    render() {
      
        return (
            <div className="modal-profile">
                {this.state.step === 1 ? (
                    <div className="modal-profile">
                        <PictureProfile handleImageUpload={this.handleImageUpload} imagePreviewUrl={this.state.imagePreviewUrl}/>
                        <ProfileName handleChange={this.handleChange} name={this.state.name}/>
                        <ProfileEducation handleChange={this.handleChange} education={this.state.education}/>
                        <ProfileRegister buttonClick={this.handleRegister}/>
                    </div>
                ) : (
                    <div className="profile-end">
                            <div className="img-block">
                                <img src={this.state.imagePreviewUrl} alt="" className="upload-image"/>
                            </div>
                            <div className="name-education-block">
                                    <div className="name-block">Name: {this.state.name}</div>
                                    <div className="education-block">Education: {this.state.education}</div>
                            </div>
                    </div>
                )
                }
            </div>
            
        );
    }


}

export default SignUp;
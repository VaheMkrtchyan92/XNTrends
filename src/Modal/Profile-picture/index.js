import React from "react"
import "./profile-picture.css"

class PictureProfile extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let imagePreviewUrl = this.props.imagePreviewUrl;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} className="img-des"/>);
        }
        return (
            <div className="image-upload">
                <label htmlFor="file-input">
                    <div className="label-center">Edit</div>
                    {imagePreview }
                </label>
                <input id="file-input" type="file" onChange={(e) => this.props.handleImageUpload(e) } />
            </div>
        )
    }
}
export default PictureProfile
import React, { Component } from 'react';
import axios from 'axios';
import { DropzoneComponent } from 'react-dropzone-component';

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

axios.defaults.headers.post['Content-Type'] = 'application/json';

 
export default class GearForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nomenclature: "",
            nsn: "",
            size: "",
            category: "",
            gear_img: "",
            editMode: false,
            apiUrl: "http://127.0.0.1:5000/gear/add",
            apiAction: 'post'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildForm = this.buildForm.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handleImageDrop = this.handleImageDrop.bind(this);

        this.imageRef = React.createRef();
    }

    componentDidUpdate() {
        if (Object.keys(this.props.gearToEdit).length > 0) {
            const {
                id,
                nomenclature,
                nsn,
                size,
                category
                // gear_img
            } = this.props.gearToEdit;

            this.props.clearGearformToEdit();

            this.setState({
                id: id,
                nomenclature: nomenclature || "",
                nsn: nsn || "",
                size: size || "",
                category: category || "",
                editMode: true,
                apiUrl: `http://127.0.0.1:5000/gear/edit/${id}`,
                apiAction: 'put'    
                // gear_img
            })
        }
    }

    handleImageDrop() {
        return {
            addedfile: file => this.setState({ gear_img: file })
        }
    }

    componentConfig() {
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        }
    }

    djsConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    buildForm() {
        let formData = new FormData();

        formData.append('nomenclature', this.state.nomenclature);
        formData.append('nsn', this.state.nsn);
        formData.append('size', this.state.size);
        formData.append('category', this.state.category);

        if (this.state.gear_img) {
            formData.append("gear_img", this.state.thumb_image);
          }

        return JSON.stringify(formData);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        axios({
            url: this.state.apiUrl,
            method: this.state.apiAction,
            headers: { "Content-Type": "application/json"},
            data: JSON.stringify({
                category: this.state.category,
                nomenclature: this.state.nomenclature,
                nsn: this.state.nsn,
                size: this.state.size,
            })
        })
        .then(response => {
            if (this.state.editMode) {
                this.props.handleEditFormSubmit();
            }else {
                this.props.handleGoodFormSubmit(response.data)
            }
            this.setState({
                nomenclature: "",
                nsn: "",
                size: "",
                category: "",
                editMode: false,
                apiUrl: "http://127.0.0.1:5000/gear/add",
                apiAction: 'post'    
            })

            [this.imageRef].forEach(ref => {
                ref.current.dropzone.removeAllFiles();
            })
        }).catch(error => {
            console.log("handleSubmit error", error)
        })
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <h1>GearForm</h1>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <input
                            type="text"
                            name="nomenclature"
                            placeholder='Item Nomenclature'
                            value={this.state.nomenclature}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="nsn"
                            placeholder='National Stock Number'
                            value={this.state.nsn}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <input
                            type="text"
                            name="size"
                            placeholder='Size'
                            value={this.state.size}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <select
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        >
                            <option value="" disabled hidden>Choose Category</option>
                            <option value='cold-weather'>Cold Weather</option>
                            <option value='hot-weather'>Hot Weather</option>
                            <option value='combat'>Combat</option>
                        </select>
                    </div>

                    <div className='image-uploaders'>
                        <DropzoneComponent
                            ref={this.imageRef}
                            config={this.componentConfig()}
                            djsConfig={this.djsConfig()}
                            eventHandlers={this.handleImageDrop()}
                        >    
                            <div className="dz-message">Gear image</div>             
                        </DropzoneComponent>
                    </div>
                </div>

                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>

        </div>
        )
    }
}

import React, { PropTypes } from 'react'
import { Modal } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import CircularProgressbar from 'react-circular-progressbar';
import axios from 'axios'
import config from '../config/config'

class UploadModalContainer extends React.Component {
    constructor() {
        
        super()
            this.state = {
                accepted: [],
                rejected: [],
                uploading: false,
                percentage: 0
            }
    }
    
    uploadProgress(e) {
        console.log(e);
    }

    onDrop(accepted, rejected) {
         
        this.setState({ accepted, rejected, uploading: true })
        //console.log(config())

        const url = config().config.server.url;
        
        const fd = new FormData();

        fd.append('track', accepted[0])

        const c = {
            headers: {
                'Content-Type' : 'multipart/form-data',
                'Authorization' : 'Bearer ' + this.props.token
            },
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
              this.setState({percentage: percentCompleted})
              console.log(percentCompleted)
            }.bind(this)
        }


        axios.post(url + '/tracks', fd, c)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }
    
    render() {
        //console.log(this.state)
        return(
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        !this.state.uploading ? (
                            <Dropzone
                                accept="audio/*"
                                multiple={false}
                                onDrop={(accepted, rejected) => this.onDrop(accepted,rejected)}
                            />
                        ) : (
                            <CircularProgressbar percentage={this.state.percentage}/>
                        )
                    }
                    
                </Modal.Body>
                <Modal.Footer>
                    By uploading you agree to our Terms
                 </Modal.Footer>
            </Modal>
        )    
    }
}

UploadModalContainer.PropTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
}

export default UploadModalContainer;
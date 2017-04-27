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
                transcoding: false,
                percentage: 0,
            }
    }
    
    uploadProgress(e) {

        var percentCompleted = Math.round( (e.loaded * 100) / e.total );

        this.setState({percentage: percentCompleted})

        if(percentCompleted == 100) {
            this.setState({transcoding: true})
        }
    }

    onDrop(accepted, rejected) {
         
        this.setState({ accepted, rejected, uploading: true })

        const url = config().config.server.url;
        
        const fd = new FormData();

        fd.append('track', accepted[0])

        const c = {
            headers: {
                'Content-Type' : 'multipart/form-data',
                'Authorization' : 'Bearer ' + this.props.token
            },
            onUploadProgress: (e) => this.uploadProgress(e)
        }


        axios.post(url + '/tracks', fd, c)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    reset() {
        
        this.setState({accepted: [],
                rejected: [],
                uploading: false,
                transcoding: false,
                percentage: 0})
        this.props.onClose()
    }
    
    render() {
        //console.log(this.state)
        return(
            <Modal show={this.props.show} onHide={() => this.reset()}>
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
                            this.state.percentage < 100 ? (
                                <CircularProgressbar percentage={this.state.percentage}/>
                            ) : (
                                <div> Transcoding </div>
                            )
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
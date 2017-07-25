import React, { PropTypes } from 'react'
import { Modal, Grid, Row, Col } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import CircularProgressbar from 'react-circular-progressbar'
import PostFormModalContainer from './PostFormModalContainer'
import axios from 'axios'
import config from '../config/config'

class UploadModalContainer extends React.Component {
    constructor() {
        
        super()

            this.state = {
                accepted: [],
                rejected: [],
                modalTitle: 'Upload Track',
                trackTitle: "",
                postContent: "", 
                trackData: {},               
                uploading: false,
                transcoding: false,
                makingPost:false,
                percentage: 0,
            }
    }
    
    uploadProgress(e) {

        var percentCompleted = Math.round( (e.loaded * 100) / e.total );

        this.setState({percentage: percentCompleted})

        if(percentCompleted == 100) {
            this.setState({transcoding: true, uploading: false, makingPost: false })
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
            this.setState({modalTotal: 'Make Post',transcoding: false, uploading: false, makingPost: true, trackData: response.data })
        }).catch(error => {
            console.log(error)
        })
    }

    clearState() {
        this.setState({accepted: [],
                rejected: [],
                modalTitle: 'Upload Track',
                trackTitle: "",
                postContent: "",
                trackData: {},
                uploading: false,
                transcoding: false,
                makingPost: false,
                percentage: 0})
    }

    reset() {
        this.clearState()
        this.props.onClose()
    }

    setTrackTitle(input) {
        const value = input.target.value

        this.setState({trackTitle: value})
    } 

    setPostContent(input) {
        console.log(input +"!")
        this.setState({postContent: input})
    }

    submitContent() {
        const { postContent , trackTitle, trackData } = this.state 

        console.log(postContent)
        const url = config().config.server.url;

         const c = {
            headers: {
                'Authorization' : 'Bearer ' + this.props.token
            },
         }

        const body = {
            text: postContent,
            trackUrl: trackData.location
        }

        console.log(body)
        axios.post(url + '/posts', body, c)
            .then(response => {
            console.log(response)
            //console.log(done)
            //this.setState({modalTotal: 'Make Post',transcoding: false, uploading: false, makingPost: true, trackData: response.data })
        }).catch(error => {
            console.log(error)

        })
    }

    getModalBody() {
        const {uploading, makingPost, transcoding} = this.state
        
        if(!uploading && !makingPost && !transcoding) {
            
            return <Dropzone
                        accept="audio/*"
                        multiple={false}
                        onDrop={(accepted, rejected) => this.onDrop(accepted,rejected)}
                    />
        }
        else if(uploading) {
            return <div>
                        <Grid>
                            <Row>
                                <i>Uploading...</i>
                            </Row>
                        </Grid>
                        <CircularProgressbar percentage={this.state.percentage}/>
                    </div>
        } else if(transcoding) {
            return <div>
                        <Grid>
                            <Row>
                                <i>Processing...</i>
                            </Row>
                        </Grid>
                        <CircularProgressbar percentage={this.state.percentage}/>
                    </div>
        }
        else if(makingPost) {
            return <PostFormModalContainer 
                        token={this.props.token}
                        onPostContentChange={(e) => this.setPostContent(e)}
                        onTrackTitleChange={(e) => this.setTrackTitle(e)}
                        onSubmit={() => this.submitContent()}
                    />;
        }
    }
    
    render() {
        const modalBody = this.getModalBody();
        return(
            <Modal show={this.props.show} onHide={() => this.reset()}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostFormModalContainer 
                        token={this.props.token}
                        onPostContentChange={(e) => this.setPostContent(e)}
                        onTrackTitleChange={(e) => this.setTrackTitle(e)}
                        onSubmit={() => this.submitContent()}
                    />
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
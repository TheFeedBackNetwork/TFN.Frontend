import React, { PropTypes } from 'react'
import { Modal } from 'react-bootstrap'

class UploadModalContainer extends React.Component {
    

    
    render() {
        console.log(this.props)
        return(
            <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       
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
    onClose: PropTypes.func.isRequired
}

export default UploadModalContainer;
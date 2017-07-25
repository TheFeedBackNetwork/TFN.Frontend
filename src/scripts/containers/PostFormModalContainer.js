import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { Row, Grid, Col } from 'react-bootstrap'
import TFNEditor from '../components/TFNEditor'

class PostFormModalContainer extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <input type='text'onChange={this.props.onTrackTitleChange}/>
                </Row>
                <Row>
                    <TFNEditor
                        token={this.props.token}
                        readOnly={false}
                    />
                </Row>                
            </Grid>
        )
    }
}

PostFormModalContainer.PropTypes = {
    token: PropTypes.string.isRequired,
    onPostContentChange: PropTypes.func.isRequired,
    onTrackTitleChange: PropTypes.func.isRequired,
}

export default PostFormModalContainer;
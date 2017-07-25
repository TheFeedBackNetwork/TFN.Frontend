import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { Row, Grid, Col } from 'react-bootstrap'
import TFNModalEditor from '../components/TFNModalEditor'

class PostFormModalContainer extends React.Component {
    render() {
        return (
            <div>
                    <div>
                        <input className="editor DraftEditor-root" type='text'onChange={this.props.onTrackTitleChange}/>
                    </div>

                <TFNModalEditor
                    token={this.props.token}
                    readOnly={false}
                    onContentChanged={this.props.onPostContentChange}
                />
                <button className="btn btn-primary pull-right" onClick={this.props.onSubmit}>Post comment</button>
            </div>
        )
    }
}

PostFormModalContainer.PropTypes = {
    token: PropTypes.string.isRequired,
    onPostContentChange: PropTypes.func.isRequired,
    onTrackTitleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default PostFormModalContainer;
import React, { PropTypes } from 'react'
import { Row, Grid, Col } from 'react-bootstrap'
import albumCover from 'images/album-cover-placeholder.png'
import avatar from 'images/avatar-placeholder.png'
import upvote from 'images/upvote-inactive.png'
import downvote from 'images/downvote-inactive.png'

export default class DevZoneContainer extends React.Component {

    render() {
        return (
            <div className='container submission'>
                <Row>
                    <Col sm={2}>
                    <img src={albumCover} alt="Album Cover" className="album-cover"/>
                    <p className="title">Say my name</p>
                    <p className="time">(5:07)</p>
                    <p className="artist">HaydenPa <span className="rep green">+950</span></p>
                    </Col>
                    <Col sm={10}>
                        <div className="content">
                            <div className="pull-left comment-score">
                                <div className="vote">
                                    <button className="btn-vote transparent"><img src={upvote} alt="Upvote *inactive"/></button>
                                    <button className="btn-vote transparent"><img src={downvote} alt="Downvote *inactive"/></button>
                                </div>
                                <div className="current-score text-center">
                                    <p>243</p>
                                </div>
                            </div>

                            <div className="comment">
                                <div className="profile">
                                    <img src={avatar} className="img-circle img-profile"/>Username <span className="rep green">+950</span>

                                    <div className="pull-right"><a href="#" className="btn-reply">Reply</a></div>
                                </div>

                                <div className="entered-comment">
                                    <p>Really nice! I love the moment at <a href="#">@11:38</a>! Maybe add some more bass, and then it should be perfect IMO. Great job, looking forward to your new works!</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

{/*<!--

                <div class="col col-sm-2 col-xs-1">
                    <img src="assets/img/album-cover-placeholder.png" alt="Album Cover" class="album-cover">
                    <p class="title">Say my name</p>
                    <p class="time">(5:07)</p>
                    <p class="artist">HaydenPa <span class="rep green">+950</span></p>
                </div>
                <div class="col col-sm-10 col-xs-11">

                    <!-- Comment -->
                    <div class="content">
                        <div class="pull-left comment-score">
                            <div class="vote">
                                <button class="btn-vote transparent"><img src="assets/img/upvote-inactive.png" alt="Upvote *inactive"></button>
                                <button class="btn-vote transparent"><img src="assets/img/downvote-inactive.png" alt="Downvote *inactive"></button>
                            </div>
                            <div class="current-score text-center">
                                <p>243</p>
                            </div>
                        </div>

                        <div class="comment">
                            <div class="profile">
                                <img src="assets/img/avatar-placeholder.png" class="img-circle img-profile">Username <span class="rep green">+950</span>

                                <div class="pull-right"><a href="#" class="btn-reply">Reply</a></div>
                            </div>

                            <div class="entered-comment">
                                <p>Really nice! I love the moment at <a href="#">@11:38</a>! Maybe add some more bass, and then it should be perfect IMO. Great job, looking forward to your new works!</p>
                            </div>
                        </div>
                    </div>

                    <div class="parent-options">
                        <a href="comments.html" class="btn-read-more pull-right">Read 17 more comments</a>
                    </div>

                    <div class="enter-comment">
                        <!-- new parent comment -->
                        <textarea class="form-control" rows="3" style=""></textarea>
                        <button class="btn btn-primary">Post comment</button>
                    </div>
                </div>
-->
*/}
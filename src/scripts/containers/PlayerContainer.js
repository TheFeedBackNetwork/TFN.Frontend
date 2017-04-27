import React from 'react';
import ReactPlayer from 'react-player'
import ReactBootstrapSlider from 'react-bootstrap-slider';
import previousImage from 'images/player-previous.svg';
import playImage from 'images/player-play.svg';
import pauseImage from 'images/player-pause.svg';
import nextImage from 'images/player-next.svg';
import volumeImage from 'images/player-volume.svg';



export default class PlayerContainer extends React.Component {
    render() {
        //const volumeStyle = 
        return (
            <div className="player">
                <div className="container">
                    <div className="player-elements">
                        <div className="player-controls">
                            <img src={previousImage} alt="Previous" className="player-previous"/>
                            <img src={playImage} alt="Play" className="player-play"/>

                            <img src={nextImage} alt="Next" className="player-next"/>
                        </div>

                        <div className="player-volume-control">
                            <img src={volumeImage} alt="Volume" className="player-volume" />
                            <ReactBootstrapSlider id="volume"
                                min={0}
                                max={59}
                                id="volumeSlider"
                                step={1}
                                value={0}
                            />
                        </div>

                        <p id="timePassed" className="time time-passed">0:22</p>
                        <div className="player-playback">
                            <ReactBootstrapSlider id="playback"
                                min={0}
                                max={59}
                                id="playbackSlider"
                                step={1}
                                value={0}
                            />
                        </div>
                        <p id="timeDuration" className="time time-duration">3:37</p>
                    </div>
                </div>
            </div>
        )
    }    
}
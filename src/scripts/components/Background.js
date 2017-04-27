import React, { PropTypes } from 'react';
import image from 'images/background.jpg'

export default class Background extends React.Component {

    

    render() {
        const style = {
            height : '100%',
            width: '100%'
        }
        return (
            <div className="bg"> 
                <img style={style} src={image} />
            </div>
        )
    }
}
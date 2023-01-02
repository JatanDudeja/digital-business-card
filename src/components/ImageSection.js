import React from 'react'
import ReactDOM from 'react-dom'
import myImage from '../images/myImage.jpeg'

function ImageSection(){
    return(
            <img
            src={myImage}
            alt='My Image'
            className='image-section-my_image'

            />
    )
}

export default ImageSection
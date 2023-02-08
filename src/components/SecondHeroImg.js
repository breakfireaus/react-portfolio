import './SecondHeroImgStyle.css'
import React from 'react'

class secondHeroImg extends React.Component {
  render() {
    return (
      <div className='hero-image'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default secondHeroImg

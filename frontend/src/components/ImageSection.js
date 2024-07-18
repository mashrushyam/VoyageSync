import React from 'react'
import HomePageImage from '../images/HomePage.jpg'; // Import the carpooling image
import './Home.css';


export const ImageSection = () => {
  return (
    <div>
      <div className='image-section'>
        <img src={HomePageImage} alt='Carpooling' className='homepage-image' />
      </div>
    </div>
  )
}

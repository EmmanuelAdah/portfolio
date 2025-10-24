import React from 'react'
import ImgGallery from '../assets/Images/images.jpg'

function Gallery() {
  return (
    <div>
      <div className="swiper-slide gallery">
          <h1 className="heading">Gallery</h1>
          <div className="project"><img src={ImgGallery} alt="" /></div>
          <div className="project"><img src={ImgGallery} alt="" /></div>
          <div className="project"><img src={ImgGallery} alt="" /></div>
          <div className="project"><img src={ImgGallery} alt="" /></div>
          <div className="project"><img src={ImgGallery} alt="" /></div>
          <div className="project"><img src={ImgGallery} alt="" /></div>
        </div>
    </div>
  )
}

export default Gallery

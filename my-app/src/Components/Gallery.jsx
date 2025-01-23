import React from 'react'
import ImgGallery from '../assets/Image/images.jpg'

function Gallery() {
  return (
    <div>
      <div class="swiper-slide gallery">
          <h1 class="heading">Gallery</h1>
          <div class="project"><img src={ImgGallery} alt="" /></div>
          <div class="project"><img src={ImgGallery} alt="" /></div>
          <div class="project"><img src={ImgGallery} alt="" /></div>
          <div class="project"><img src={ImgGallery} alt="" /></div>
          <div class="project"><img src={ImgGallery} alt="" /></div>
          <div class="project"><img src={ImgGallery} alt="" /></div>
        </div>
    </div>
  )
}

export default Gallery

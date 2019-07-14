import React from 'react';
import Carousel from 'react-images';

const images = [{ src: '../images/galleryThumbnails/b1.jpg' }, { src: '../images/galleryThumbnails/b2.jpg' }];

class homeGallery extends React.Component {
  render() {
    return <Carousel views={images} />;
  }
}

export default homeGallery;
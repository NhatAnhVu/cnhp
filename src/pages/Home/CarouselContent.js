import React from 'react'
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Image } from "antd";
import slide1 from '../../common/images/imageHome_page/Slide1.png';
import slide2 from '../../common/images/imageHome_page/slide2.png';
import slide3 from '../../common/images/imageHome_page/slide3.png';

const CarouselContent = () => {
  return (
    <Carousel
      arrows={true}
      prevArrow={<LeftOutlined />}
      nextArrow={<RightOutlined />}
      dots={false}
    >
      <Image preview={false} src={slide1} />
      <Image preview={false} src={slide2} />
      <Image preview={false} src={slide3} />
    </Carousel>
  )
}

export default CarouselContent;
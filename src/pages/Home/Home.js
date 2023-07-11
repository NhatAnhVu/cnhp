import React from "react";
import CarouselContent from "./CarouselContent";
import { Image, Divider } from "antd";
import bg2 from '../../common/images/imageHome_page/bg2.png'
import bg3 from '../../common/images/imageHome_page/homepage-bg2.png'
import Number from "./Number";
import Grid from "./Grid";
import Service from "./Service";

const Home = () => {
  return <>
    <CarouselContent />
    <Divider className="mt-[0px]" />
    <Service />
    <Image preview={false} src={bg2} />
    <Grid />
    <Image preview={false} src={bg3} />
    <Number />
  </>;
};

export default Home;

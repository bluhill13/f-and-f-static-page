import React from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import video1 from "../images/videos/fogf.mp4";
// import video2 from "../images/videos/video2.mp4";
// import video3 from "../images/videos/video3.mp4";

const VideoSlider = () => {
  const videos = [video1];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div>
        {/* <ReactPlayer
          url={video1}
          playing
          controls
          width="50%"
          height="50%"
          volume="0"
          onError={(error) => console.log(error)}
        /> */}
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      {/* {videos ??
        videos.map((video, index) => (
          <div key={index}>
            <ReactPlayer
              url={video}
              playing
              controls
              width="100%"
              height="100%"
            />
          </div>
        ))} */}
    </Slider>
  );
};

export default VideoSlider;

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img src="./party01.jpg" />
        
        </div>
        <div>
          <img src="party03.jpg" />
        
        </div>
        <div>
          <img src="party04.jpg" />
       
        </div>
      </Carousel>
    </div>
  );
}

export default Banner
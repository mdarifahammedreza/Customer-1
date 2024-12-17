import { Carousel } from "react-responsive-carousel";

const Banner = () => {  
  return (
    <div className="w-screen h-[60vh]  flex justify-center items-center">
      <Carousel className="w-full h-full" showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false} showArrows={false} showIndicators={false} >
        <div>
          <img src="https://i.ibb.co.com/5MZPdhp/banner-1.jpg" alt="banner-1" />
        </div>
        {/* <div>
          <img src="https://i.ibb.co.com/thDf1NW/banner-2.jpg" alt="banner-2" />
        </div>
        <div>
          <img src="https://i.ibb.co.com/SyXjRsH/banner-3.jpg" alt="banner-3" />
        </div> */}
        {/* <div>
          <img src="https://i.ibb.co.com/vXDmnxy/banner-4.jpg" alt="banner-4" />
        </div>  
        <div>
          <img src="https://i.ibb.co.com/9hnWbDK/banner-5.jpg" alt="banner-5" /> 
        </div>
        <div>
          <img src="https://i.ibb.co.com/3yqJkQm/banner-6.jpg" alt="banner-6" />
        </div>
        <div>
          <img src="https://i.ibb.co.com/vcHzGcx/banner-7.jpg" alt="banner-7" />
        </div>   */}

      </Carousel>
    </div>
  );
}   
export default Banner;

// https://i.ibb.co.com/5MZPdhp/banner-1.jpg
// https://i.ibb.co.com/thDf1NW/banner-2.jpg
// https://i.ibb.co.com/SyXjRsH/banner-3.jpg
// https://i.ibb.co.com/vXDmnxy/banner-4.jpg
// https://i.ibb.co.com/9hnWbDK/banner-5.jpg
// https://i.ibb.co.com/3yqJkQm/banner-6.jpg
// https://i.ibb.co.com/vcHzGcx/banner-7.jpg
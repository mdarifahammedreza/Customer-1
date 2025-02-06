
import { ImagesSliderComponent } from "../Components/Banner/BannerNext";
import { RecentProject } from "../Components/RecentProject/RecentProject";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Count from "../Components/Home/Count";
import AboutSection from "../Components/Home/AboutSection";
import TestimonialComponent from "../Components/Home/TestomonialComponent";

const Home = () => {
    
      useEffect(() => {
        AOS.init({
          duration: 1000,
          // once: true, // Only trigger the animation once when it enters the viewport
        });
      }, []);

    return (
        <div className="mt-5 mb-20">
             <ImagesSliderComponent/>
             <div>
              <Count/>
             </div>
             <AboutSection/>
            <Line/>
            <RecentProject/>
          <Line/>
            <TestimonialComponent/>
        </div>
    )
}
export default Home;
const Line =() => {
    return (
        <div className="w-full h-3 grid grid-cols-3 bg-black mt-10">
        <div className="bg-base_500"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-violet-950"></div>
          </div>
      
    )
}
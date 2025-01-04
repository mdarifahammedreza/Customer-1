
import Banner from "../Components/Banner/Banner";
import { TimeEvent } from "../Components/Timeline/TimeEvent";
import ImageSlider from "../Components/tRASH/ImageSlider";

const Home = () => {
    return (
        <div className=" mt-24">
            <Line />
            <Banner />
            <Line/>
            <TimeEvent/>
        </div>
    )
}
export default Home;
const Line =() => {
    return (
        <div className="w-full h-5 grid grid-cols-3 bg-black">
        <div className="bg-sky-500"></div>
        <div className="bg-violet-950"></div>
        <div className="bg-yellow-500"></div>
          </div>
      
    )
}
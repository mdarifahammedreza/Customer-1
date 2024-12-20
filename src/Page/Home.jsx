
import Banner from "../Components/Banner/Banner";

const Home = () => {
    return (
        <div className=" mt-24">
            <Line />
            <Banner />
            <Line/>
        </div>
    )
}
export default Home;
const Line =() => {
    return (
        <div className="w-full h-3 grid grid-cols-3 bg-black">
        <div className="bg-sky-500"></div>
        <div className="bg-violet-950"></div>
        <div className="bg-yellow-500"></div>
          </div>
      
    )
}
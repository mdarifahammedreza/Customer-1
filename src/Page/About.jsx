import { TbTargetArrow } from "react-icons/tb";
import { GiBleedingEye } from "react-icons/gi";
const About = () => {
  return (
    <div>
      <img src="https://i.ibb.co.com/hFPQ6Kh/About-Cover.jpg" alt="About"  className="h-full w-full mt-10"/>
      <div className="w-full h-3 grid grid-cols-3 bg-black">
        <div className="bg-sky-500"></div>
        <div className="bg-violet-950"></div>
        <div className="bg-yellow-500"></div>
        </div>
        <div className="w-full grid grid-cols-3 gap-5 px-72 mt-10 justify-items-center p-10 ">
        <div className="">
          <div className="card ">
              <div className="card-body">
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Mission</p> <TbTargetArrow /></div></h2>
                  <p className="font-semibold">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                         {/* <div className="card-actions justify-end">
                           <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
          
        </div>
        <div className="">
        <div className="card">
              <div className="card-body">
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Vision</p> <GiBleedingEye /></div></h2>
                  <p className="font-semibold">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        </div>
        <div >
          <img src="https://i.ibb.co.com/VDQzp3T/Performance-Studies-upscaled.jpg" alt="Image" className="rounded-xl"/>
         </div>
        </div>
      
      
      <div  className="w-full h-3 grid grid-cols-3 gap-5 px-72  justify-items-center p-10">
        <div className="card col-span-2">
              <div className="card-body">
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Vision</p> <GiBleedingEye /></div></h2>
                  <p className="font-semibold">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        {/* <div className="card rounded-none">
              <div className="card-body">
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Vision</p> <GiBleedingEye /></div></h2>
                  <p className="font-semibold">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                               <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div>
               </div>
          </div> */}
        <div className="card bg-gray-200 rounded-none">
              <div className="card-body">
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Vision</p> <GiBleedingEye /></div></h2>
                  <p className="font-semibold">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        <div className="card bg-sky-500 rounded-none">
              <div className="card-body">
                  <h2 className="card-title font-sans font-bold text-white"><div className="flex items-center justify-center"><p>Vision</p> <GiBleedingEye /></div></h2>
                  <p className=" text-white">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        <div className="card  bg-violet-950 text-white rounded-none">
              <div className="card-body">
                  <h2 className="card-title font-sans font-bold "><div className="flex items-center justify-center"><p>Vision</p> <GiBleedingEye /></div></h2>
                  <p className="">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        <div className="card  bg-yellow-600 text-white rounded-none">
              <div className="card-body">
                  <h2 className="card-title font-sans font-bold"><div className="flex items-center justify-center"><p>Vision</p> <GiBleedingEye /></div></h2>
                  <p className="font-semibold">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        </div>
      
    </div>
  );
};

export default About;

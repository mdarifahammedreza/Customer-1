import { TbTargetArrow } from "react-icons/tb";
import { GiBleedingEye } from "react-icons/gi";
import { ImagesSlider } from "../Components/ui/images-slider";
import { motion } from "framer-motion";
import React from "react";
const About = () => {
  const images = [
    "https://i.ibb.co/SyXjRsH/banner-3.jpg"
  ];
  return (
    <div className="text-base_900 mt-10">
       <ImagesSlider className="h-[40rem]" images={images}/>
    
      <div className="w-full h-3 grid grid-cols-3 bg-black">
        <div className="bg-base_500"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-violet-950"></div>
        </div>
        <div className="px-72 mt-10  p-10">
          <p className="card-title font-sans font-bold text-base_600 underline underline-offset-8" >About CBSG</p>
          <p className="text-justify font-normal mt-2">
          Capacity Building Service Group (CBSG) is an international development consultancy
          with special interest in Evaluation and Research, Organizational Development, and ICT
          for Development, and Training. Established in 2003, CBSG has experienced significant
          growth over the past 22 years with offices in Bangladesh and Canada. CBSG provides
          consultancy services to International Development Partners, Government Agencies,
          Multi and Bi-lateral agencies across the Bangladesh and Asian region. CBSG projects
          range from short-term, output-based activities to more complex, multi-faceted, and long-
          term initiatives.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-5 px-72 mt-10 justify-items-center p-10 ">
        <div className="">
          <div className="card">
              <div className="card-body  pl-0 pt-0">
                  <h2 className="card-title font-sans font-bold text-base_600 underline underline-offset-8"><div className="flex items-center justify-center text-base_600"><p>Our Mission</p> </div></h2>
                  <p className="font-normal">Our mission is to strengthen capacities of individuals and institutions through promoting
value-based changes, developing methodological and professional competencies, and
fostering learning to be more effective and efficient in accomplishing their goals.</p>
                         {/* <div className="card-actions justify-end">
                           <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
          
        </div>
        <div className="">
        <div className="card">
              <div className="card-body pt-0">
                  <h2 className="card-title font-sans font-bold text-base_600 underline underline-offset-8"><div className="flex items-center justify-center"><p>Our Vision</p> </div></h2>
                  <p className="font-normal">To be recognized as a global leader for Organizational Development, Research and
                  Evaluation services.</p>
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
      
      
      <div  className="w-full grid grid-cols-3 gap-5 px-72  justify-items-center p-10">
        <div className="card col-span-2 w-full">
              <div className="card-body pl-0 ">
                  <h2 className="card-title font-sans font-bold text-base_600 underline underline-offset-8"><div className="flex items-center justify-center"><p>Our Core Values</p> </div></h2>
                  <p className="font-normal">Our core values focus on integrity, meaningful change, ethical practice, and inclusivity. We prioritize trust, drive sustainable improvements, deliver unbiased insights, and embrace diversity to foster transformative growth in organizations.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        {/* <div className="card rounded-none">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold text-base_600"><div className="flex items-center justify-center"><p>Vision</p> <GiBleedingEye /></div></h2>
                  <p className="font-semibold">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                               <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div>
               </div>
          </div> */}
        <div className="card shadow-md shadow-base_300 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-90duration-400">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold text-base_600 "><div className="flex items-center justify-center"><p>Integrity</p> </div></h2>
                  <p className="font-normal">We uphold trustworthiness and ethical standards, aligning with client values
                  and respecting all stakeholders in our OD interventions and research.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        <div className="card shadow-md shadow-base_300 bg-gradient-to-r from-base_300 to-base_500 rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210  duration-400">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold text-white"><div className="flex items-center justify-center"><p>Commitment to Meaningful Change:</p> </div></h2>
                  <p className=" text-white font-normal">We drive measurable, sustainable
                  improvements, fostering lasting growth and resilience in client organizations.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        <div className="card shadow-md shadow-base_300 bg-gradient-to-r from-base_500 to-base_600 text-white rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210  duration-400">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold "><div className="flex items-center justify-center"><p>Ethical Practice:</p> </div></h2>
                  <p className="font-normal">We deliver unbiased insights through rigorous methods and
                  transparent processes, empowering evidence-based decisions.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        <div className="card shadow-md shadow-base_300 bg-gradient-to-r from-base_600 to-indigo-900 text-white rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210  duration-400">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold "><div className="flex items-center justify-center"><p>Inclusivity and Adaptability:</p> </div></h2>
                  <p className="font-normal">We champion inclusivity by addressing diverse client
                  needs and contexts, that foster robust and transformative organizational growth.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        </div>
        <div className="px-72">
        <p className="card-title text-base_600 pb-5 w-full underline underline-offset-8 ">Our Core Competencies</p>
        <Core />
        </div>
        
       
     
    </div>
  );
};

export default About;

const Core = () => {
  const categories = [
    "Organizational Capacity Assessment",
    "Change Management",
    "Strategic Planning",
    "Business Development Planning",
    "Project Cycle Management",
    "Organizational Policy and System Development",
    "Qualitative and Quantitative Research",
    "Baseline and Endline Surveys",
    "Market Survey",
    "Impact Assessment",
    "Perception Survey",
    "Appraisal and Evaluation",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white   p-4 shadow-sm shadow-base_300 bg-gradient-to-r from-blue-100 to-indigo-100  transition ease-in-out delay-150  hover:translate-y-1 hover:scale-x-90 duration-400"
        >
          <h3 className="text-lg font-bold text-base_600">{category}</h3>
        </div>
      ))}
    </div>
  );
};

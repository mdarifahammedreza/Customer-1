import { TbTargetArrow } from "react-icons/tb";
import { GiBleedingEye } from "react-icons/gi";
import Footer from "../Components/Footer/Footer";
const About = () => {
  return (
    <div>
      <img src="https://i.ibb.co.com/hFPQ6Kh/About-Cover.jpg" alt="About"  className="h-full w-full mt-10"/> 
      <div className="w-full h-5 grid grid-cols-3 bg-black">
        <div className="bg-sky-500"></div>
        <div className="bg-violet-950"></div>
        <div className="bg-yellow-500"></div>
        </div>
        <div className="px-72 mt-10  p-10">
          <p className="card-title font-sans font-bold text-violet-950 " >About CBSG</p>
          <p className="text-justify font-medium mt-2">
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
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Our Mission</p> <TbTargetArrow /></div></h2>
                  <p className="font-medium">Our mission is to strengthen capacities of individuals and institutions through promoting
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
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Our Vision</p> <GiBleedingEye /></div></h2>
                  <p className="font-medium">To be recognized as a global leader for Organizational Development, Research and
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
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Our Core Values</p> </div></h2>
                  <p className="font-medium">Our core values focus on integrity, meaningful change, ethical practice, and inclusivity. We prioritize trust, drive sustainable improvements, deliver unbiased insights, and embrace diversity to foster transformative growth in organizations.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        {/* <div className="card rounded-none">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Vision</p> <GiBleedingEye /></div></h2>
                  <p className="font-semibold">Our mission is to provide high quality services to our clients and to contribute to the development of the society.</p>
                               <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div>
               </div>
          </div> */}
        <div className="card bg-gray-200 rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210 hover:bg-gray-300 duration-400">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold text-violet-950"><div className="flex items-center justify-center"><p>Integrity</p> </div></h2>
                  <p className="font-medium">We uphold trustworthiness and ethical standards, aligning with client values
                  and respecting all stakeholders in our OD interventions and research.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        <div className="card bg-sky-500 rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210 hover:bg-sky-700 duration-400">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold text-white"><div className="flex items-center justify-center"><p>Commitment to Meaningful Change:</p> </div></h2>
                  <p className=" text-white font-medium">We drive measurable, sustainable
                  improvements, fostering lasting growth and resilience in client organizations.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        <div className="card  bg-violet-950 text-white rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210 hover:bg-violet-800 duration-400">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold "><div className="flex items-center justify-center"><p>Ethical Practice:</p> </div></h2>
                  <p className="font-medium">We deliver unbiased insights through rigorous methods and
                  transparent processes, empowering evidence-based decisions.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        <div className="card  bg-yellow-600 text-white rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210 hover:bg-yellow-500 duration-400">
              <div className="card-body ">
                  <h2 className="card-title font-sans font-bold"><div className="flex items-center justify-center"><p>Inclusivity and Adaptability:</p> </div></h2>
                  <p className="font-medium">We champion inclusivity by addressing diverse client
                  needs and contexts, that foster robust and transformative organizational growth.</p>
                               {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                          </div> */}
               </div>
          </div>
        </div>
        <Core />
        <div className="w-full h-3 grid grid-cols-3 bg-black">
        <div className="bg-sky-500"></div>
        <div className="bg-violet-950"></div>
        <div className="bg-yellow-500"></div>
          </div>
       
      
    </div>
  );
};

export default About;

const Core = () => {
  return (
    <>
      <div className="card shadow-lg rounded-md  bg-white">
        <div className="card-body p-4">
          <p className="text-lg card card-title font-medium">
            Organizational Capacity Assessment
          </p>
        </div>
      </div>
    </>
  );
};

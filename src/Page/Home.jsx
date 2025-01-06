
import Banner from "../Components/Banner/Banner";
import { HeroParallaxDemo } from "../Components/RecentProject/HeroParallaxDemo";
import { TimeEvent } from "../Components/Timeline/TimeEvent";
import ImageSlider from "../Components/tRASH/ImageSlider";
import { AnimatedTestimonials } from "../Components/ui/animated-testimonials";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect.";

const Home = () => {
    const testimonials = [
        {
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Sarah Chen",
          designation: "Product Manager at TechFlow",
          src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Michael Rodriguez",
          designation: "CTO at InnovateSphere",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
          name: "Emily Watson",
          designation: "Operations Director at CloudScale",
          src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
          name: "James Kim",
          designation: "Engineering Lead at DataPro",
          src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
          name: "Lisa Thompson",
          designation: "VP of Technology at FutureNet",
          src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
    const words = `CBSG is a pioneering organization serving globally in Organizational Capacity Building,and Research and Evaluation areas. We foster growth through inclusive, need based
solutions for diverse client needs.`;
    return (
        <div className=" mt-24">
            <Line />
            <Banner />
            <Line/>
           <div className="border-2 my-20 mx-4 p-10 border-base_500 md:mx-11 lg:mx-24   mb-4 text-base_600 font-medium">
            <p className=" font-extrabold pb-2 rounded-md w-full  text-base_600">What we Do</p>
           <p className="text-sm font-normal text-blue-950">CBSG is a pioneering organization serving globally in Organizational Capacity Building,
            and Research and Evaluation areas. We foster growth through inclusive, need based
            solutions for diverse client needs.</p>
            <div className="grid grid-cols-1 gap-2 mt-5"> 
                <div className="p-2 flex flex-col md:flex-row border   items-center ">
                   <div className="w-1/2">
                    <p className="text-sm font-semibold min-h-10 text-right bg-base_600 text-white flex items-center justify-end px-2 mb-2 ">ORGANIZATIONAL AND INSTITUTIONAL DEVELOPMENT (OD/ID)</p>
                    <p className="text-xs font-sans font-normal text-blue-950 text-justify">CBSG takes Organizational Development and Change Management approach to
institutional development and capacity building. It pursues a planned and long-term
process of organizational strengthening. Our approach is based on appreciative
methodologies and customized with client organizations need. Transfer of skills are built
into our approach. We accompany organizations in capacity building planning and
implementation and provide follow up through Help Desk support systems. Our service
includes Organizational review and capacity assessment, strategic planning, project
cycle management, leadership development, team building, systems and policy
improvement including HRM and M&amp;E.</p></div>
                   <div className="w-1/2"><img src="https://i.ibb.co.com/HTnY3Mj/rb-19228.png" alt="Organizational Development"  className="w-1/2 relative left-32"/></div>
                </div>
                <div className="p-2 flex flex-col md:flex-row  items-center md:justify-around">
                  <div className="w-1/2"><img src="https://i.ibb.co.com/QHJjNMp/rb-1899.png" alt="Organizational Development"  className="w-1/2 relative -right-32"/>
                  </div>
                  <div className="md:w-1/2"> <p className="text-sm font-semibold  min-h-10 bg-base_600 text-white flex items-center justify-start px-2 mb-2">RESEARCH AND EVALUATION</p>
                    <p className="text-xs font-sans font-normal text-blue-950 text-justify">CBSG has strong competencies in applied research in a range of program areas
including agriculture, climate, health and nutrition, WASH, livelihood development,
governance, women empowerment, and social development. Results of our evaluation
and research are used to design development projects, form policies and assess
impacts. We conduct project and program evaluation, baseline survey, impact study, 
perception survey, service utilization survey, KAP survey for development programmes
and organizations. We use cutting edge research and evaluation methodologies
including social and statistical tools.</p></div>
                    
                </div>
            </div>
           </div>
            <TimeEvent/>
            <HeroParallaxDemo/>
          
            <AnimatedTestimonials testimonials={testimonials}/>
        </div>
    )
}
export default Home;
const Line =() => {
    return (
        <div className="w-full h-5 grid grid-cols-3 bg-black">
        <div className="bg-base_500"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-violet-950"></div>
          </div>
      
    )
}
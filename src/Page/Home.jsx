
import Banner from "../Components/Banner/Banner";
import { TimeEvent } from "../Components/Timeline/TimeEvent";
import ImageSlider from "../Components/tRASH/ImageSlider";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect.";

const Home = () => {
    const words = `CBSG is a pioneering organization serving globally in Organizational Capacity Building,and Research and Evaluation areas. We foster growth through inclusive, need based
solutions for diverse client needs.`;
    return (
        <div className=" mt-24">
            <Line />
            <Banner />
            <Line/>
           <div className=" border my-20 mx-4 p-10 border-violet-950 md:mx-11 lg:mx-24   mb-4 text-black font-medium">
           <p className="text-base">CBSG is a pioneering organization serving globally in Organizational Capacity Building,
            and Research and Evaluation areas. We foster growth through inclusive, need based
            solutions for diverse client needs.</p>
            <p className=" bg-violet-950 p-2 mt-10 rounded-md w-full text-center text-white">What we Do</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
                <div className="border border-violet-950 p-2 ">
                    <p className="text-sm font-semibold min-h-10">ORGANIZATIONAL AND INSTITUTIONAL DEVELOPMENT (OD/ID)</p>
                    <p className="text-xs font-sans font-normal">CBSG takes Organizational Development and Change Management approach to
institutional development and capacity building. It pursues a planned and long-term
process of organizational strengthening. Our approach is based on appreciative
methodologies and customized with client organizations need. Transfer of skills are built
into our approach. We accompany organizations in capacity building planning and
implementation and provide follow up through Help Desk support systems. Our service
includes Organizational review and capacity assessment, strategic planning, project
cycle management, leadership development, team building, systems and policy
improvement including HRM and M&amp;E.</p>
                </div>
                <div className="border border-violet-950 p-2 ">
                    <p className="text-sm font-semibold  min-h-10">RESEARCH AND EVALUATION</p>
                    <p className="text-xs font-sans font-normal ">CBSG has strong competencies in applied research in a range of program areas
including agriculture, climate, health and nutrition, WASH, livelihood development,
governance, women empowerment, and social development. Results of our evaluation
and research are used to design development projects, form policies and assess
impacts. We conduct project and program evaluation, baseline survey, impact study,
perception survey, service utilization survey, KAP survey for development programmes
and organizations. We use cutting edge research and evaluation methodologies
including social and statistical tools.</p>
                </div>
            </div>
           </div>
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
import  { useState, useEffect } from 'react'; 
import { VscOrganization } from 'react-icons/vsc'; 
import { TbSettingsSearch } from 'react-icons/tb';

const AboutSection = () => {

  const [loading, setLoading] = useState(true);
  const [image,setimage]=useState({});
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

   
    setimage({image:"https://i.ibb.co.com/HTnY3Mj/rb-19228.png",image1:"https://i.ibb.co.com/QHJjNMp/rb-1899.png"});


    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 border-2 my-20 p-10 border-base_500 md:mx-11 lg:mx-24 mb-4 text-base_600 font-medium" data-aos="zoom-in">
      <p className="font-extrabold pb-2 rounded-md w-full text-base_600" data-aos="fade-right">
        What we Do
      </p>
      <p className="text-sm font-normal text-blue-950" data-aos="fade-right">
        CBSG is a pioneering organization serving globally in Organizational Capacity Building,
        and Research and Evaluation areas. We foster growth through inclusive, need-based
        solutions for diverse client needs.
      </p>
      <div className="grid grid-cols-1 gap-2 mt-5">
        <div className="p-2 flex flex-col md:flex-row items-center">
          <div className="w-1/2">
            <p className="text-sm font-semibold min-h-10 text-right bg-gradient-to-r from-base_500 to-base_900 text-white flex items-center justify-end px-2 mb-2 gap-3" data-aos="fade-left">
              <span className="text-xl"> <VscOrganization /></span>ORGANIZATIONAL AND INSTITUTIONAL DEVELOPMENT (OD/ID)
            </p>
            <p className="text-xs font-sans font-normal text-blue-950 text-justify" data-aos="fade-left">
              CBSG takes Organizational Development and Change Management approach to
              institutional development and capacity building. It pursues a planned and long-term
              process of organizational strengthening. Our approach is based on appreciative
              methodologies and customized with client organizations' needs. Transfer of skills is built
              into our approach. We accompany organizations in capacity building planning and
              implementation and provide follow-up through Help Desk support systems. Our service
              includes Organizational review and capacity assessment, strategic planning, project
              cycle management, leadership development, team building, systems and policy
              improvement, including HRM and M&E.
            </p>
          </div>
          <div className="w-1/2" data-aos="fade-left">
            <img src={image.image} alt="Organizational Development" className="w-1/2 relative left-32" />
          </div>
        </div>
        <div className="p-2 flex flex-col md:flex-row items-center md:justify-around">
          <div className="w-1/2" data-aos="fade-right">
            <img src={image.image1} alt="Organizational Development" className="w-1/2 relative -right-32" />
          </div>
          <div className="md:w-1/2">
            <p className="text-sm font-semibold min-h-10 bg-gradient-to-r from-base_900 to-base_500 text-white flex items-center justify-start px-2 mb-2 gap-3" data-aos="fade-right">
              <span className="text-xl"><TbSettingsSearch /></span>RESEARCH AND EVALUATION
            </p>
            <p className="text-xs font-sans font-normal text-blue-950 text-justify" data-aos="fade-right">
              CBSG has strong competencies in applied research in a range of program areas
              including agriculture, climate, health and nutrition, WASH, livelihood development,
              governance, women empowerment, and social development. Results of our evaluation
              and research are used to design development projects, form policies, and assess
              impacts. We conduct project and program evaluation, baseline survey, impact study,
              perception survey, service utilization survey, KAP survey for development programmes
              and organizations. We use cutting edge research and evaluation methodologies
              including social and statistical tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

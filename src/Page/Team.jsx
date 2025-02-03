import { useEffect, useState } from "react";
import { BackgroundBeams } from "../Components/ui/background-beams";
import UITeam from "../Components/ui/UiTeam";
import { color } from "framer-motion";

const Team = () => {
  const [display, SetDisplay] = useState("Core Team");
  const [bgColor, SetBgColor] = useState("bg-teal-700");
  console.log(display);

  const bgColors = {
    "Core Team": "bg-base_300",
    "Technical Team": "bg-teal-300", 
    "International Consultant": "bg-violet-300", 
  };

  // Use useEffect to update bgColor when display changes
  useEffect(() => {
    SetBgColor(bgColors[display] || "bg-teal-700");
  }, [display]);
  

  return (
   <>
   <div>
   <section className="spax-4 flex justify-start items-center pl-5 mt-10">
      <button
        onClick={() => SetDisplay("Core Team")}
        className={`p-3 rounded-tl-md font-semibold ${display === "Core Team" ? bgColor : "bg-gray-300"}`}
      >
        Core Team
      </button>
      <button
        onClick={() => SetDisplay("Technical Team")}
        className={`p-3 font-semibold ${display === "Technical Team" ? bgColor : "bg-gray-300"} border-x-2 border-black`}
      >
        Technical Team
      </button>
      <button
        onClick={() => SetDisplay("International Consultant")}
        className={`p-3 rounded-tr-md font-semibold ${display === "International Consultant" ? bgColor : "bg-gray-300"}`}
      >
        International Consultant
      </button>
    </section>
    <div className={`hidden md:block mx-5 ${bgColor} shadow-md  `}>
      {display === "Core Team" && <div className="max-w-[90%] flex flex-col justify-center items-center"><p>Core team</p> <UITeam cards={cards} /></div>}
      {display === "Technical Team" && < div className="max-w-[90%] flex flex-col justify-center items-center"><p>Technical Team</p> <UITeam cards={cards} /></div>}
      {display === "International Consultant" && <div className="max-w-[90%] flex flex-col justify-center items-center"><p>International Consultant</p> <UITeam cards={cards} /></div>}
    </div>
   </div>
    <div className="mt-8 block md:hidden" >
    <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-full w-full">
        <p className="text-white mt-10 px-5 py-1 pl-5 rounded text-3xl max-w-5xl w-full border font-extrabold bg-teal-700 text-left">Core Team</p>
        <BackgroundBeams/>
        <div className="max-w-[90%] z-[30] ">
        <UITeam cards={cards} />
        </div>
    </div>
    <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-full w-full">
        <p className="text-white mt-10 px-5 font-extrabold py-1 pl-5 rounded text-3xl max-w-5xl w-full shadow-md shadow-Coral_800 bg-gradient-to-r  from-Coral_800 to-Coral_900   transition ease-in-out delay-150 hover:translate-y-1 hover:scale-90 duration-400 text-right">Technical Expert</p>
      
      <div className="max-w-[90%] z-[30] ">
        <UITeam cards={cards} />
      </div>
    </div>
    <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-full w-full">
        <p className="text-white mt-10 px-5 font-extrabold py-1 pl-5 rounded text-3xl max-w-5xl w-full shadow-md shadow-Golden_800 bg-gradient-to-r  from-Golden_800 to-Golden_900  transition ease-in-out delay-150 hover:translate-y-1 hover:scale-90 duration-400 text-left">International Consultant</p>
        
      <div className="max-w-[90%] z-[30] ">
        <UITeam cards={cards} />
      </div>
    </div>
    </div>
   </>
  );
}
export default Team;









const cards = [
  
 
  
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                    her melancholic and cinematic music style. Born Elizabeth Woolridge
                    Grant in New York City, she has captivated audiences worldwide with
                    her haunting voice and introspective lyrics. <br /> <br />Her songs
                    often explore themes of tragic romance, glamour, and melancholia,
                    drawing inspiration from both contemporary and vintage pop culture.
                    With a career that has seen numerous critically acclaimed albums, Lana
                    Del Rey has established herself as a unique and influential figure in
                    the music industry, earning a dedicated fan base and numerous
                    accolades.
                  </p>)
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>)
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Metallica, an iconic American heavy metal band, is renowned for their
                    powerful sound and intense performances that resonate deeply with
                    their audience. Formed in Los Angeles, California, they have become a
                    cultural icon in the heavy metal music industry. <br /> <br />Their
                    songs often reflect themes of aggression, social issues, and personal
                    struggles, capturing the essence of the heavy metal genre. With a
                    career spanning over four decades, Metallica has released numerous hit
                    albums and singles that have garnered them a massive fan following
                    both in the United States and abroad.
                  </p>)
      );
    },
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Himesh Reshammiya, a renowned Indian music composer, singer, and
                    actor, is celebrated for his distinctive voice and innovative
                    compositions. Born in Mumbai, India, he has become a prominent figure
                    in the Bollywood music industry. <br /> <br />His songs often feature
                    a blend of contemporary and traditional Indian music, capturing the
                    essence of modern Bollywood soundtracks. With a career spanning over
                    two decades, Himesh Reshammiya has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>)
      );
    },
  },
];


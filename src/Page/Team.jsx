import { BackgroundBeams } from "../Components/ui/background-beams";
import UITeam from "../Components/ui/UiTeam";

const Team = () => {
  return (
    <div className="mt-8" >
     
       <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-full w-full">
       
        <p className="text-white mt-10 px-5 py-1 pl-5 rounded text-3xl max-w-5xl w-full border font-extrabold bg-teal-700 text-left">Core Team</p>
      <BackgroundBeams/>
      <div className="max-w-[90%] z-[1000] ">
        <UITeam cards={cards} />
      </div>
    </div>
       <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-full w-full">
       
        <p className="text-white mt-10 px-5 font-extrabold py-1 pl-5 rounded text-3xl max-w-5xl w-full shadow-md shadow-Coral_800 bg-gradient-to-r  from-Coral_800 to-Coral_900   transition ease-in-out delay-150 hover:translate-y-1 hover:scale-90 duration-400 text-right">Technical Expert</p>
      <BackgroundBeams/>
      <div className="max-w-[90%] z-[1000] ">
        <UITeam cards={cards} />
      </div>
    </div>
       <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-full w-full">
       
        <p className="text-white mt-10 px-5 font-extrabold py-1 pl-5 rounded text-3xl max-w-5xl w-full shadow-md shadow-Golden_800 bg-gradient-to-r  from-Golden_800 to-Golden_900  transition ease-in-out delay-150 hover:translate-y-1 hover:scale-90 duration-400 text-left">International Consultant</p>
      <BackgroundBeams/>
      <div className="max-w-[90%] z-[1000] ">
        <UITeam cards={cards} />
      </div>
    </div>
     
    </div>
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


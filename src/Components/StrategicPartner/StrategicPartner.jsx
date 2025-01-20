import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router";

const StrategicPartner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      // once: true, // Whether animation should happen only once
    });
  }, []);

  const partners = Array.from({ length: 21 }, (_, index) => ({
    title: `Company ${index + 1}`,
    img: "https://i.ibb.co/HTfnsmb/rb-2148726151.png",
    link: "https://i.ibb.co/HTfnsmb/rb-2148726151.png",
  }));

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-16 justify-items-center mx-auto"
      data-aos="fade-up" // Adding animation to the entire grid
    >
      {partners.map((partner, idx) => (
        <Partner
          key={idx}
          title={partner.title}
          img={partner.img}
          link={partner.link}
          animation="zoom-in" // Custom animation for each card
        />
      ))}
    </div>
  );
};

const Partner = ({ title, img, link, animation }) => {
  return (
    <Link to={link}>
      <div
        className="relative min-w-32 min-h-32 sm:min-w-44 sm:min-h-44 max-w-56 max-h-56 bg-gradient-to-t from-blue-50 to-indigo-50 border border-base_900 shadow-md shadow-base_300 flex items-center justify-center group transition-all ease-in-out duration-500 hover:translate-y-2 hover:scale-110 hover:bg-gradient-to-b hover:from-base_600 hover:to-base_900"
        data-aos={animation} // Individual animation for each card
      >
        <h1 className="absolute opacity-0 group-hover:opacity-100 font-bold text-white text-sm sm:text-base transition-all duration-500">
          {title}
        </h1>
        <img
          src={img}
          alt={title}
          className="p-2 h-16 sm:h-24 group-hover:opacity-0 transition-all duration-500"
        />
      </div>
    </Link>
  );
};

export default StrategicPartner;

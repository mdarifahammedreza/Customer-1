import { useLoaderData } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Child_Organization_Development = () => {
  const title = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      // once: true, // Ensure the animation triggers only once per element
    });
  }, []);

  return (
    <div
      className="mx-auto px-4 transition-all duration-500 ease-in-out transform -translate-x-5"
      data-aos="fade-up" // Animation triggered when this element scrolls into view
    >
      <h1
        className="text-3xl font-bold text-center mt-4"
        data-aos="fade-right" // Separate animation for the title
      >
        {title}
      </h1>
      <p
        className="text-lg text-center mt-4"
        data-aos="fade-left" // Separate animation for the description
      >
        A technology company that builds economic infrastructure for the internet.
      </p>
    </div>
  );
};

export default Child_Organization_Development;

import axios from "axios";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { useEffect, useState } from "react";

// Function to fetch testimonials from the API
const fetchTestimonials = async () => {
  try {
    const response = await axios.get('/src/Components/Home/testimonial.json');
    return response.data; // Ensure your API response is in the correct format
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return []; // Return an empty array in case of error
  }
};

const TestimonialComponent = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data once the component mounts
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data);
      setLoading(false); // Set loading to false after data is fetched
    };

    getData();
  }, []); // Empty dependency array ensures this runs once on mount

  // Show loader while the testimonials are being fetched
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-bars loading-lg"></span> {/* Loader */}
      </div>
    );
  }

  // Once data is fetched, show the testimonials
  return (
    <>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
};

export default TestimonialComponent;

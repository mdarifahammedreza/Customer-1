import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "../ui/carousel";
const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]; 
const CarouselComponentData = async () => {
  try {
    const response = await axios.get('/carouselData.json'); // Ensure this is the correct API or path
    return  slideData;
  } catch (error) {
    console.error("Failed to fetch slideData:", error);
    return [];
  }
};

const CarouselComponent = () => {
  const [slideData, setSlideData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await CarouselComponentData();
      if (data && Array.isArray(data)) {
        setSlideData(data);
      } else {
        console.error("Fetched data is not in the expected format");
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden w-full h-full my-5">
      {slideData.length > 0 ? (
        <Carousel slides={slideData} />
      ) : (
        <p>No slides available</p>
      )}
    </div>
  );
};

export default CarouselComponent;

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppProvider";
import { ParallaxScroll } from "../Components/ui/parallax-scroll";
import CBSGCharLoader from "../Page/CBSGCharLoader";
const Gallery = () => {

    const {uri}=useContext(AppContext);
    const [images,setImages]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);


    useEffect(()=>{
        axios.get(`${uri}gallery/`)
        .then((res)=>{
            console.log(res.data);
            setImages(res.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("Error fetching images:",error);
            setError(error);
            setLoading(false);
        });
    },[uri]);

    if(loading){
        return <CBSGCharLoader/>
    }

    if(error){
        return <p>Error: {error.message}</p>
    }

  return (
    <div>
      <ParallaxScroll images={images} />
    </div>
  );
};

export default Gallery;
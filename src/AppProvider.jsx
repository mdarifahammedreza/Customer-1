"use client";
import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

// Create Context
export const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  const uri = "http://127.0.0.1:8000/api/";
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerRes = await axios.get(`${uri}home-banners/`);
        setImages(bannerRes.data.map((item) => item.image));

        const assignmentRes = await axios.get(`${uri}assignments/`);
        setAssignments(assignmentRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ uri, images, loading, assignments }}>
      {children}
    </AppContext.Provider>
  );
};

// PropTypes Validation
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;

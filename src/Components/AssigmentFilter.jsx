"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppProvider";

const AssignmentFilter = () => {
  const [assignments, setAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [filters, setFilters] = useState({
    serviceType: "",
    practiceArea: "",
    client: "",
  });
  const [uniqueFilters, setUniqueFilters] = useState({
    serviceTypes: [],
    practiceAreas: [],
    clients: [],
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { uri } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`${uri}assignments/`)
      .then((res) => {
        
        setAssignments(res.data);
        setFilteredAssignments(res.data);
        extractFilterOptions(res.data);
      })
      .catch((err) => console.error("Error fetching assignments:", err));
  }, [uri]);

  const extractFilterOptions = (data) => {
    const serviceTypes = [...new Set(data.map((item) => item.service_type))];
    const practiceAreas = [...new Set(data.map((item) => item.practice_area))];
    const clients = [...new Set(data.map((item) => item.sub_service_area))];

    setUniqueFilters({ serviceTypes, practiceAreas, clients });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    const filteredData = assignments.filter(
      (item) =>
        (updatedFilters.serviceType === "" ||
          item.service_type === updatedFilters.serviceType) &&
        (updatedFilters.practiceArea === "" ||
          item.practice_area.toString() === updatedFilters.practiceArea) &&
        (updatedFilters.client === "" ||
          item.sub_service_area.toString() === updatedFilters.client)
    );

    setFilteredAssignments(filteredData);
    setIsDropdownOpen(true); // Open the dropdown when filters are applied
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div className="w-4/5 mx-auto mt-5 relative z-50">
      <form className="flex flex-col gap-3 items-center">
        <div className="flex gap-4 w-full">
          <div className="flex-1">
            <select
              name="serviceType"
              className="select select-bordered w-full p-3"
              onChange={handleChange}
              aria-label="Select Service Type"
            >
              <option value="">All Service Types</option>
              {uniqueFilters.serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <select
              name="practiceArea"
              className="select select-bordered w-full p-3"
              onChange={handleChange}
              aria-label="Select Practice Area"
            >
              <option value="">All Practice Areas</option>
              {uniqueFilters.practiceAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <select
              name="client"
              className="select select-bordered w-full p-3"
              onChange={handleChange}
              aria-label="Select Client"
            >
              <option value="">All Clients</option>
              {uniqueFilters.clients.map((client) => (
                <option key={client} value={client}>
                  {client}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>

      {/* Dropdown Menu for Filtered Assignments */}
      {isDropdownOpen && (
        <div className="mt-4 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {filteredAssignments.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 p-4">
              {filteredAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={assignment.photo}
                    alt={assignment.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <h4 className="mt-2 font-semibold">{assignment.title}</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: assignment.description,
                    }}
                  />
                  <img
                    src={assignment.company_logo}
                    alt="Company Logo"
                    className="w-12 h-12 mt-2 rounded-full"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 p-4">No matching assignments found.</p>
          )}
        </div>
      )}

      {/* Button to Toggle Dropdown */}
      <button
        onClick={toggleDropdown}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {isDropdownOpen ? "Hide Results" : "Show Results"}
      </button>
    </div>
  );
};

export default AssignmentFilter;
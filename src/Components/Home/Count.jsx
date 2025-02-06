import { useState, useEffect } from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";

const Count = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000); // You can adjust this time

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 bg-gradient-to-r from-base_600 to-indigo-900 text-white">
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }

  return (
    <div className="flex justify-evenly items-center bg-gradient-to-r from-base_600 to-indigo-900 p-10 text-white">
      <div className="px-10 flex flex-col justify-center items-center h-full w-full text-xl">
        <HiOutlineUserGroup />
        <p className="text-3xl font-semibold">120+</p>
        <p>Customers</p>
      </div>
      <div className="border-x px-10 flex flex-col justify-center items-center h-full w-full text-xl">
        <MdOutlineAssignmentTurnedIn />
        <p className="text-3xl font-semibold">80+</p>
        <p>Assignments</p>
      </div>
      <div className="px-10 flex flex-col justify-center items-center h-full w-full text-xl">
        <RiUserLocationFill />
        <p className="text-3xl font-semibold">18+</p>
        <p>Countries</p>
      </div>
    </div>
  );
};

export default Count;

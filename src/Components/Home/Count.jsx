import { useState, useEffect } from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";

const Count = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 bg-gradient-to-r from-base_600 to-indigo-900 text-white">
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 justify-evenly items-center bg-gradient-to-tr from-base_600 to-indigo-900 p-6 text-white">
      <CountItem icon={<HiOutlineUserGroup />} number="120+" label="Customers" />
      <CountItem icon={<MdOutlineAssignmentTurnedIn />} number="80+" label="Assignments" />
      <CountItem icon={<RiUserLocationFill />} number="18+" label="Countries" />
      <CountItem icon={<RiUserLocationFill />} number="18+" label="Countries" />
    </div>
  );
};

const CountItem = ({ icon, number, label }) => (
  <div className="flex flex-col justify-center items-center text-lg space-y-1">
    <div className="text-3xl opacity-80">{icon}</div>
    <p className="text-2xl font-medium">{number}</p>
    <p className="text-sm opacity-90">{label}</p>
  </div>
);

export default Count;

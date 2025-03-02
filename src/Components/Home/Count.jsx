import { useEffect, useState } from 'react';
import { FaBriefcase, FaFlag, FaRegNewspaper } from 'react-icons/fa'; // Replaced GiAmericanFlag with FaFlag
import { MdBusinessCenter } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import CBSGCharLoader from '../../Page/CBSGCharLoader';

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
      <div className="flex justify-center items-center">
        <CBSGCharLoader />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 justify-evenly items-center bg-gradient-to-tr from-base_600 to-indigo-900 p-6 text-white text-center">
      <CountItem icon={<MdBusinessCenter />} number="380+" label="Contracts for International Agencies" />
      <CountItem icon={<FaFlag />} number="290+" label="US Government Projects" />
      <CountItem icon={<RiTeamLine />} number="140+" label="Organizational Capacity Assessment" />
      <CountItem icon={<FaRegNewspaper />} number="180+" label="Research and Evaluation Assignments" />
      <CountItem icon={<FaBriefcase />} number="23+" label="Years of Experience" />
    </div>
  );
};

const CountItem = ({ icon, number, label }) => (
  <div className="flex flex-col justify-center items-center text-lg space-y-1">
    <div className="text-3xl opacity-80">{icon}</div>
    <p className="text-2xl font-medium">{number}</p>
    <p className="text-sm opacity-90 text-center">{label}</p>
  </div>
);

export default Count;

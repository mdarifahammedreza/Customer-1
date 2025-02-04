import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";

const Count = () => {
    
    
    return (
        <div className="flex justify-evenly items-center bg-gradient-to-r from-base_600 to-indigo-900 p-10 text-white">
        <div className=" px-10 flex flex-col justify-center items-center h-full w-full text-xl"><HiOutlineUserGroup /><p className="text-3xl font-semibold">120+</p><p>Customers</p></div>
        <div className="border-x px-10 flex flex-col justify-center items-center h-full w-full text-xl"><MdOutlineAssignmentTurnedIn /><p className="text-3xl font-semibold">80+</p><p>Assignment</p></div>
        <div className=" px-10 flex flex-col justify-center items-center h-full w-full text-xl"><RiUserLocationFill /><p className="text-3xl font-semibold">18+</p><p>Country</p></div>
      
        </div>
    );
    }

export default Count;
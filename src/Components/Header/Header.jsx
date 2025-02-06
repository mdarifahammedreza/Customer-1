
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../../../lib/utils";
import { CiMenuFries } from "react-icons/ci";
import { Link, useLocation } from "react-router";
import { useState } from "react";

const Header = ({HeaderData}) => {
 
  return (
    <header>
      
      <Navbar className="hidden md:block"/>
      <Phonenav  />

    </header>
  );
}   
export default Header;

function Navbar({ className }) {
  const location = useLocation(); // Get the current location
  const [active, setActive] = useState(null);
  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  // Define the active class
  const activeClass = 'border-t-2 text-blue-500'; // Customize this class for your active link style

  return (
    <div className={cn('relative inset-x-0 z-50', className)}>
      <Menu setActive={setActive}>
        {/* Menu Links */}
        <HoveredLink 
          to="/" 
          className={isActive('/') ? activeClass : ''}
        >
          Home
        </HoveredLink>
        <HoveredLink 
          to="/About" 
          className={isActive('/About') ? activeClass : ''}
        >
          About us
        </HoveredLink>

        {/* Services Menu */}
        <MenuItem setActive={setActive} active={active} item="Our services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink 
              to="/Services/Organization-Development" 
              className={isActive('/Services/Organization-Development') ? activeClass : ''}
            >
              Organization Development
            </HoveredLink>
            <HoveredLink 
              to="/Services/Research&Evaluation" 
              className={isActive('/Services/Research&Evaluation') ? activeClass : ''}
            >
              Research and Evaluation
            </HoveredLink>
          </div>
        </MenuItem>

        {/* Other Links */}
        <HoveredLink 
          to="/Practice-areas" 
          className={isActive('/Practice-areas') ? activeClass : ''}
        >
          Practice areas
        </HoveredLink>
        <HoveredLink 
          to="/team" 
          className={isActive('/team') ? activeClass : ''}
        >
          Our team
        </HoveredLink>
        <HoveredLink 
          to="/work&reach" 
          className={isActive('/work&reach') ? activeClass : ''}
        >
          Our work and reach
        </HoveredLink>
        <HoveredLink 
          to="/contacts" 
          className={isActive('/contacts') ? activeClass : ''}
        >
          Contacts
        </HoveredLink>
      </Menu>
    </div>
  );
}

const Phonenav = () => {
  return (
  <div className=" md:hidden lg:hidden"><div className="navbar bg-base-300 z-50 w-full">
  <div className="flex justify-between w-full  px-4">
        <img src="https://i.ibb.co.com/pf3YyhR/logo.png" alt="CBSG logo" className="shadow-xl w-8" />
        <h1 className="font-semibold text-sm  w-full ">Capacity Building Service Group</h1>
    <div >
 
    </div>
    <div className=""> 
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost text-black font-semibold lg:hidden">
      <CiMenuFries />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52 p-2 shadow overflow-y-scroll flex-row h-96 whitespace-normal">
        <li className="w-full"><Link>Home</Link></li>
        <li className="w-full"><Link>About us</Link></li>
        <li>
          <p>Our services</p>
          <ul className="p-2">
            <li><Link>Organization Development</Link></li>
            <li><Link>Research and Evaluation</Link></li>
          </ul>
        </li>
        <li>
          <p>Practice areas</p>
          <ul className="p-2">
            <li><Link>Health and Nutrition</Link></li>
            <li><Link>Governance and Human Rights</Link></li>
            <li><Link>Women, Child and Youth Development</Link></li>
            <li><Link>Climate and Disaster Management</Link></li>
            <li><Link>Agriculture, Livelihood and Food Security </Link></li>
            <li><Link>Education </Link></li>
            <li><Link>WASH</Link></li>
            <li><Link>Decent Work / Workers Rights </Link></li>
          </ul>
        </li>
        <li>
          <p>Our Teams</p>
          <ul className="p-2">
            <li><Link>Executive Team</Link></li>
            <li><Link>Technical Experts </Link></li>
            <li><Link>Consultants and Associates  </Link></li>
          </ul>
        </li>
       
        <li className="w-full"><Link>Our work and reach</Link></li>
        <li className="w-full"><Link>Contact</Link></li>
      </ul>
    </div>
    </div>
  </div>
  
</div>
</div>  
  )}
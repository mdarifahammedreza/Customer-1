
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../../../lib/utils";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router";

const Header = () => { 
  return (
    <header>
      
      <Navbar className="hidden md:block"/>
      <Phonenav  />

    </header>
  );
}   
export default Header;

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn(" relative inset-x-0  z-50  ", className)}>
      <Menu setActive={setActive}>
        {/* Services Menu */}
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/About">About us</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Our services">
          <div className="flex flex-col  space-y-4  text-sm">
            <HoveredLink href="/Services/Organization-Development">Organization Development</HoveredLink>
            <HoveredLink href="/Services/Research&Evaluation">Research and Evaluation</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/Practice-areas">Practice areas</HoveredLink>
         
        <HoveredLink href="/team">Our team</HoveredLink>
        <HoveredLink href="/work&reach">Our work and reach</HoveredLink>
        <HoveredLink href="/contacts">Contacts</HoveredLink>
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
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../../../lib/utils";
import { CiMenuFries } from "react-icons/ci";
import {  useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="w-full">
      <Navbar className="hidden lg:block" />
      <Phonenav className="lg:hidden" />
    </header>
  );
};

export default Header;

function Navbar({ className }) {
  const location = useLocation();
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  const activeClass = "border-b-2 border-blue-500 text-blue-500 font-semibold";

  return (
    <div className={cn("relative inset-x-0 z-50 bg-white ", className)}>
      <Menu setActive={setActive}>
        <HoveredLink to="/" className={isActive("/") ? activeClass : ""}>
          Home
        </HoveredLink>
        <HoveredLink to="/About" className={isActive("/About") ? activeClass : ""}>
          About us
        </HoveredLink>

        {/* Services Menu */}
        <MenuItem setActive={setActive} active={active} item="Our services">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink
              to="/Services/Organization-Development"
              className={isActive("/Services/Organization-Development") ? activeClass : ""}
            >
              Organization Development
            </HoveredLink>
            <HoveredLink
              to="/Services/Research&Evaluation"
              className={isActive("/Services/Research&Evaluation") ? activeClass : ""}
            >
              Research and Evaluation
            </HoveredLink>
          </div>
        </MenuItem>

        <HoveredLink to="/practice-areas" className={isActive("/practice-areas") ? activeClass : ""}>
          Practice areas
        </HoveredLink>
        <HoveredLink to="/team" className={isActive("/team") ? activeClass : ""}>
          Our team
        </HoveredLink>
        <HoveredLink to="/work&reach" className={isActive("/work&reach") ? activeClass : ""}>
          Our work and reach
        </HoveredLink>
        <HoveredLink to="/contacts" className={isActive("/contacts") ? activeClass : ""}>
          Contacts
        </HoveredLink>
      </Menu>
    </div>
  );
}

const Phonenav = () => {
  return (
    <div className="block lg:hidden">
      <div className="navbar bg-base-300 z-50 w-full">
        <div className="flex justify-between items-center w-full px-4 py-2">
          <img
            src="https://i.ibb.co.com/pf3YyhR/logo.png"
            alt="CBSG logo"
            className="shadow-xl w-8"
          />
          <h1 className="font-semibold text-sm text-center flex-1">
            Capacity Building Service Group
          </h1>

          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="text-black font-extrabold text-xl md:text-2xl cursor-pointer"
            >
              <CiMenuFries />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-56 p-3 shadow-lg rounded-lg overflow-y-auto h-96 whitespace-normal"
            >
              <li>
                <Link to="/" className="w-full">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="w-full">
                  About us
                </Link>
              </li>
              <li>
                <p className="font-semibold">Our services</p>
                <ul className="pl-4">
                  <li>
                    <Link to="/Services/Organization-Development">
                      Organization Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/Services/Research&Evaluation">
                      Research and Evaluation
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/practice-areas">Practice areas</Link>
              </li>
              <li>
                <Link to="/team">Our team</Link>
              </li>
              <li>
                <Link to="/work&reach">Our work and reach</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

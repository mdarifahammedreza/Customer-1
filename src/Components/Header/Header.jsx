
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../../lib/utils";
import { useState } from "react";

const Header = () => { 
  return (
    <header>
      <Navbar className="top-2"/>
    </header>
  );
}   
export default Header;

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn(" inset-x-0  z-50", className)}>
      <Menu setActive={setActive}>
        {/* Services Menu */}
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/About">About us</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Our services">
          <div className="flex flex-col bg-white space-y-4 text-sm">
            <HoveredLink href="/web-dev">Organization Development</HoveredLink>
            <HoveredLink href="/interface-design">Research and Evaluation</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Practice areas">
          <div className="flex flex-col bg-white space-y-4 text-sm">
            <HoveredLink href="/web-dev">Health and Nutrition</HoveredLink>
            <HoveredLink href="/interface-design">Governance and Human Rights</HoveredLink>
            <HoveredLink href="/seo">Women, Child and Youth Development</HoveredLink>
            <HoveredLink href="/branding">Climate and Disaster Management</HoveredLink>
            <HoveredLink href="/branding">Agriculture, Livelihood and Food Security </HoveredLink>
            <HoveredLink href="/branding">WASH</HoveredLink>
            <HoveredLink href="/branding">Decent Work / Workers Rights </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our team">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Executive Team</HoveredLink>
            <HoveredLink href="/individual">Technical Experts </HoveredLink>
            <HoveredLink href="/team">Consultants and Associates </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our work and reach">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/individual">Technical Experts </HoveredLink>
            <HoveredLink href="/team">Consultants and Associates </HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/team">Contacts</HoveredLink>
      </Menu>
    </div>
  );
}
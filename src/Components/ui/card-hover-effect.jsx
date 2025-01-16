import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";


export const HoverEffect = ({ items, IsSideBar,SideBar, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const Effect = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={cn(`${SideBar?"":Effect}`, className)}>
      {items.map((item, idx) => (
        <Link
          to={`/Services/${item?.mainPath}/${item?.Subpath}`}
          key={item?.Subpath}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-100 block "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card onClick={() => IsSideBar(true)}>  {/* Corrected onClick */}
            <CardTitle>{item.title}</CardTitle>
            {/* <CardDescription>{item.description}</CardDescription> */}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children, onClick }) => {
  return (
    <div
      className={cn(
        "h-full w-full p-2 overflow-hidden card shadow shadow-indigo-900 bg-gradient-to-r from-base_600 to-base_900 rounded-none transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-x-95 duration-400",
        className
      )}
      onClick={onClick}  // Added onClick here to handle click event
    >
      <div className="relative z-20">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-white font-thin text-sm tracking-wide", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-4 text-base_900 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};

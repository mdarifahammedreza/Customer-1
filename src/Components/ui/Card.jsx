import { cn } from "../../../lib/utils";

const Card = ({ title, description, image ,className}) => {
    return (
      <div 
            className={cn(
              "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4   bg-slate-100 border border-transparent justify-between flex flex-col space-y-4 h-[18rem] ",
              
            className)}
          >
            <img src={image} alt={title} className="rounded-md"/>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
              
              <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                {title}
              </div>
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                {description}
              </div>
            </div>
          </div>
    );
  };
  export default Card;
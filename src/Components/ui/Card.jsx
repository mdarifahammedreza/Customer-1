//Ook ok ok 

import PropTypes from 'prop-types';
import { cn } from "../../../lib/utils";
const Card = ({ title, description, photo, className }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4   bg-slate-100 border border-transparent justify-between flex flex-col space-y-4 h-[18rem] max-w-[20rem]",

        className
      )}
    >
      <div className="flex items-center justify-center"><img src={photo} alt={title} className="rounded-md h-[10rem] w-fit" /></div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>

        <div
  dangerouslySetInnerHTML={{
    __html: description.length > 120 ? description.substring(0, 120) + "..." : description,
  }}
  className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300"
/>
      </div>
    </div>
  );
};
export default Card;
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string,
  className: PropTypes.string,
};
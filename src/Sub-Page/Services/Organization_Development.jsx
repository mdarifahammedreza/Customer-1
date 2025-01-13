
import { Outlet } from "react-router";
import Line from "../../Components/Line/Line";
import { HoverEffect } from "../../Components/ui/card-hover-effect";

const Organization_Development = () => {
  return (
    <div className="">
     <div className="mx-auto px-4 ">
      <HoverEffect items={projects} />
    </div>
    {/* click content. */}
    <div className=" w-full h-96 mt-2  ">
      <Line/>
      <Outlet />
    </div>
    </div>
  );
};
export default Organization_Development; 

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    OrganizationDevelopmentSubPath: "Stripe",  // Only the title
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    OrganizationDevelopmentSubPath: "Netflix",  // Only the title
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    OrganizationDevelopmentSubPath: "Google",  // Only the title
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    OrganizationDevelopmentSubPath: "Meta",  // Only the title
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    OrganizationDevelopmentSubPath: "Amazon",  // Only the title
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    OrganizationDevelopmentSubPath: "Microsoft",  // Only the title
  },
];

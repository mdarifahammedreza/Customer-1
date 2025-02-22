import React, { useState } from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const Time = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemHeight = 60; // Height of each h1 element, adjust accordingly
  const totalItems = 15;

  // Handle scroll event
  const handleScroll = (e) => {
    const scrollY = e.target.scrollTop;
    setScrollPosition(scrollY);
  };

  // Calculate opacity based on the scroll position
  const getOpacity = (index) => {
    const middlePosition = scrollPosition + window.innerHeight / 2; // Middle of the screen
    const itemPosition = index * itemHeight + itemHeight / 2; // Middle position of each item

    // Calculate distance from middle
    const distanceFromMiddle = Math.abs(middlePosition - itemPosition);
    const maxDistance = window.innerHeight / 2; // Max distance where the opacity will be 0

    const opacity = Math.max(0, 1 - distanceFromMiddle / maxDistance); // Adjust opacity based on distance
    return opacity;
  };

  return (
    <div className="mt-5">
      <StickyScroll content={content} />
    </div>
  );
};

export default Time;
export const content = [
  {
    title: "2003-2008",
    description:
      "CBSG contributed to enhance organizations, strengthens livelihoods, expands training with UNICEF, advances urban governance with ADB, and drives healthcare insights for USAID’s Smiling Sun Program. ",
    content: (
      <div className="h-full w-full0">
        <div className="grid grid-cols-2 gap-4 bg-whiborder ">
          <div className="m-5 text-base_600 bg-white shadow-sm shadow-base_900  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <img
              src="https://i.ibb.co.com/k2NNZrTR/logo-1.png"
              className="w-20 "
              alt="working image"
            />
            {/* <h1 className="font-bold">AB Company Limited</h1> */}
            <p className="p-2 text-xs bg-white">
              Strengthening Organizational Excellence: CBSG’s Engagement with
              Shishu Polli Plus
            </p>
            <img
              src="https://i.ibb.co.com/k2NNZrTR/logo-1.png"
              className="w-20 "
              alt="working image"
            />
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 top-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">CD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 bottom-0  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">BD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900  bottom-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABC Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2011-2008",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full">
        <div className="grid grid-cols-2 gap-4 border ">
          <div className="m-5 text-white shadow-sm shadow-base_900  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ACD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 top-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">BCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 bottom-0  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABC Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900  bottom-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ACD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in time with your team, clients
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2008-2006",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full">
        <div className="grid grid-cols-2 gap-4 border ">
          <div className="m-5 text-white shadow-sm shadow-base_900  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 top-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 bottom-0  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900  bottom-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2012-2013",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full">
        <div className="grid grid-cols-2 gap-4 border ">
          <div className="m-5 text-white shadow-sm shadow-base_900  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 top-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 bottom-0  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900  bottom-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2013-2018",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full">
        <div className="grid grid-cols-2 gap-4 border ">
          <div className="m-5 text-white shadow-sm shadow-base_900  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 top-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 bottom-0  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900  bottom-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2032-2018",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full">
        <div className="grid grid-cols-2 gap-4 border ">
          <div className="m-5 text-white shadow-sm shadow-base_900  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 top-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900 bottom-0  h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
          <div className="m-5 text-white shadow-sm shadow-base_900  bottom-0 right-0 h-[calc(50%-40px)] w-[calc(50%-40px)] absolute p flex flex-col items-center justify-center">
            <h1 className="font-bold">ABCD Company Limited</h1>
            <img
              src="https://i.ibb.co.com/HTfnsmb/rb-2148726151.png"
              className="w-20 "
              alt="working image"
            />
            <p className="p-2 text-xs">
              Work together in real time with your team, clients
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

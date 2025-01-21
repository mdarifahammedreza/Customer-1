import Line from "../Components/Line/Line";
import { BackgroundBeams } from "../Components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "../Components/ui/background-beams-with-collision";
import { Carousel } from "../Components/ui/carousel";

const Work = () => {   
    const slideData = [
        {
          title: "Mystic Mountains",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Urban Dreams",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Neon Nights",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Desert Whispers",
          button: "Explore Component",
          src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ]; 
    return (
        <div className="mt-5">
           
            <BackgroundBeamsWithCollision>
      <h2
        className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-base_500 to-base_600  text-center font-sans font-bold flex justify-center items-center"
      >
        Our work fuels it.{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span>Our reach</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span>Our reach</span>
          </div>
         
        </div>
        <div>
            <span className="ml-1">
               {" "}defines it
            </span>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
    <div className="h-0.5 bg-gradient-to-t from-purple-800 to-violet-700"></div>
    <div className="relative overflow-hidden w-full h-full my-5">
      <Carousel slides={slideData} />
    </div>
    <div className="h-0.5 bg-gradient-to-t from-purple-800 to-violet-700"></div>
    {/* <Line/> */}
    <div className="h-[30rem] w-full bg-gradient-to-b from-white to-gray-100 relative flex flex-col items-center justify-center antialiased">
  <div className="w-full p-4 flex flex-col justify-center items-center">
    {/* Title */}
    <h1 className="relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-base_500 to-base_600 text-center font-sans font-bold">
      Explore Services & Research Areas
    </h1>

    {/* Subtitle */}
    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
      Welcome to MailJet, the best transactional email service on the web. We
      provide reliable, scalable, and customizable email solutions for your
      business. Whether you&apos;re sending order confirmations, password reset
      emails, or promotional campaigns, MailJet has got you covered.
    </p>

    {/* Form */}
    <form
      className="flex flex-col gap-3 w-4/5 items-center"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
      }}
    >
      <div className="flex gap-4 w-full">
        {/* Service Type */}
        <div className="flex-1">
          <label
            htmlFor="serviceType"
            className="block mb-2 text-sm font-medium text-neutral-700"
          >
            Service Type
          </label>
          <select
            id="serviceType"
            className="rounded border border-base_900 focus:ring-2 focus:ring-base_600 p-3 w-full"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Service Type
            </option>
            <option value="consulting">Consulting</option>
            <option value="legal">Legal</option>
            <option value="training">Training</option>
            <option value="custom">Custom Service</option>
          </select>
        </div>

        {/* Practice Area */}
        <div className="flex-1">
          <label
            htmlFor="practiceArea"
            className="block mb-2 text-sm font-medium text-neutral-700"
          >
            Practice Area
          </label>
          <select
            id="practiceArea"
            className="rounded border border-base_900 focus:ring-2 focus:ring-base_600 p-3 w-full"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Practice Area
            </option>
            <option value="corporateLaw">Corporate Law</option>
            <option value="taxation">Taxation</option>
            <option value="intellectualProperty">
              Intellectual Property
            </option>
            <option value="litigation">Litigation</option>
          </select>
        </div>

        {/* Client */}
        <div className="flex-1">
          <label
            htmlFor="client"
            className="block mb-2 text-sm font-medium text-neutral-700"
          >
            Client
          </label>
          <select
            id="client"
            className="rounded border border-base_900 focus:ring-2 focus:ring-base_600 w-full p-3"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Client
            </option>
            <option value="clientA">Client A</option>
            <option value="clientB">Client B</option>
            <option value="clientC">Client C</option>
            <option value="clientD">Client D</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-base_600 text-white py-2 px-4 rounded hover:bg-base_700 focus:ring-2 focus:ring-base_600 max-w-sm"
      >
        Submit
      </button>
    </form>
  </div>

  {/* Background Beams */}
  <BackgroundBeams />
</div>

        </div>
    );
}
export default Work;
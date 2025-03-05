import { motion } from "framer-motion";
import ContinentSelector from "../Components/Report&service/ContinentSelector";
import ReportsPagination from "../Components/Report&service/Report";
import CarouselComponent from "../Components/Work/CarouselComponent";
import { BackgroundBeams } from "../Components/ui/background-beams";
import { ParallaxScroll } from "../Components/ui/parallax-scroll";
import WorldMap from "../Components/ui/world-map";
const Work = () => {
  return (
    <div className="mt-5">
      {/* <BackgroundBeamsComponent /> */}
      {/* <Line/> */}
      <div className="h-[25rem] w-full bg-gradient-to-b from-white to-gray-100 relative flex flex-col items-center justify-center antialiased">
        <div className="w-full p-4 flex flex-col justify-center items-center">
          {/* Title */}
          <h1 className="relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-base_500 to-base_600 text-center font-sans font-bold">
            Explore Services & Research Areas
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>

          {/* Form */}
          <form
            className="flex flex-col gap-3 w-4/5 items-center mt-5 z-[500]"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted successfully!");
            }}
            onChange={(e) => {
              e.target.practiceArea.value;
            }}
          >
            <div className="flex gap-4 w-full">
              {/* Service Type */}
              <div className="flex-1">
                <select className="select select-bordered  max-w-xs rounded border border-base_900 focus:ring-2 focus:ring-base_600 p-3 w-full">
                  <option disabled selected>
                    Select service type
                  </option>
                  <option value="Organization Development">
                    Organization Development
                  </option>
                  <option value="Research and Evaluation">
                    Research and Evaluation
                  </option>
                </select>
                {/* <select
            id="serviceType"
            className=""
            defaultValue=""
            required
          >
            <option value="" disabled>
              
            </option>
            
          </select> */}
              </div>

              {/* Practice Area */}
              <div className="flex-1">
                <select
                  id="practiceArea"
                  className="select select-bordered  max-w-xs rounded border border-base_900 focus:ring-2 focus:ring-base_600 p-3 w-full"
                >
                  <option disabled selected>
                    Practice area
                  </option>
                  <option value="Health and Nutrition">
                    Health and Nutrition
                  </option>
                  <option value="Governance and Human Rights">
                    Governance and Human Rights
                  </option>
                  <option value="Women, Child and Youth Development">
                    Women, Child and Youth Development
                  </option>
                  <option value="Climate and Disaster Management">
                    Climate and Disaster Management
                  </option>
                  <option value="Agriculture, Livelihood and Food Security">
                    Agriculture, Livelihood and Food Security
                  </option>
                  <option value="WASH">WASH</option>
                  <option value="Decent Work/Workers Rights">
                    Decent Work/Workers Rights
                  </option>
                </select>
              </div>

              {/* Client */}
              <div className="flex-1">
                <select className="select select-bordered  max-w-xs rounded border border-base_900 focus:ring-2 focus:ring-base_600 p-3 w-full">
                  <option disabled selected>
                    Client
                  </option>
                  <option value="USG">USG</option>
                  <option value="Other">Other</option>
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
      {/* <div className=" bg-gradient-to-b from-white to-gray-100 rounded-md shadow-md p-5">
        <section className="flex justify-evenly items-center font-semibold px-2">
          <p>Name</p>
          <p>Area</p>
          <p>Description</p>
        </section>
        {[...Array(6)].map((_, index) => (
          <Link key={index}>
            {" "}
            <section className="flex justify-evenly items-center border-t  px-5 py-3 hover:bg-gray-200 hover:border-x hover:cursor-pointer transition-colors duration-200">
              <p>Name</p>
              <p>Area</p>
              <p>Description</p>
            </section>
          </Link>
        ))}
      </div> */}
      <div className="h-0.5 bg-gradient-to-t from-purple-800 to-violet-700"></div>
      <CarouselComponent />
      <div className="h-0.5 bg-gradient-to-t from-purple-800 to-violet-700"></div>

      <div className="h-0.5 bg-gradient-to-t from-purple-800 to-violet-700"></div>
      <section className="w-full  mt-5 bg-gradient-to-t from-base_500 via-base_600 to-base_500 shadow-lg shadow-base_300 p-6">
        <ReportsPagination />
      </section>
      <section>
        <div className=" mt-10 p-5 dark:bg-black bg-white w-full">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
              Where we{" "}
              <span className="text-neutral-400">
                {"work".split("").map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </p>
            <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
              The environment where we work greatly influences productivity and
              creativity. Whether at home, in an office, or a co-working space,
              the setting shapes our success.
            </p>
          </div>
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>

        <ContinentSelector />
      </section>
      <div className="relative ">
        {/* Watermark */}
        <p className="absolute inset-0 flex items-center justify-center text-white text-5xl font-extrabold opacity-50 pointer-events-none z-10">
          Capacity Building Service Group
        </p>

        {/* Image Gallery */}
        <ParallaxScroll images={images} />
      </div>
    </div>
  );
};
export default Work;
export const images = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
];

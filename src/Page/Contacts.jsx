import { MdLocationPin } from "react-icons/md";
import { MdEmail, MdPhone, MdWeb } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="mt-5 flex justify-center items-center">
      <section className="w-full max-w-7xl mt-5 bg-base_900/[15%] rounded-lg shadow-lg p-6">
        <div className="flex flex-col justify-center items-center">
          <p className="p-2 font-serif font-semibold text-2xl border-b-2 border-gray-300 text-base_600">Contact Person</p>
          <img 
            className="w-40 h-40 lg:w-48 lg:h-48 rounded-full shadow-md mt-4" 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Photo chairman-CBSG" 
          />
          <div className="flex flex-col items-center p-3 text-center">
            <p className="font-serif font-bold text-3xl text-base_600">Joyanta Roy</p>
            <p className="font-serif font-bold text-xl text-base_600/[80%]">Chairman/ President & CEO</p>
            <p className="font-serif font-bold text-lg text-base_600/[80%]">Capacity Building Service Group (CBSG)</p>
          </div>
          <div className="flex flex-col items-center p-3 w-full max-w-2xl">
            <address className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <p className="font-serif text-base_600/[80%] p-3 bg-gray-200 rounded-lg shadow-sm">
                <span className="text-base_600 font-medium flex items-center justify-center text-lg gap-2">
                  <MdLocationPin /> Bangladesh Location:
                </span>
                <br />4/2 Block - B, Lalmatia, Dhaka<br />Dhaka 1207, Bangladesh
              </p>
              <p className="font-serif text-base_600/[80%] p-3 bg-gray-200 rounded-lg shadow-sm">
                <span className="text-base_600 font-medium flex items-center justify-center text-lg gap-2">
                  <MdLocationPin /> Canada Location:
                </span>
                <br />104 Crockford Blvd, Scarborough,<br />Ontario M1R 3C3, Canada
              </p>
            </address>
            <div className="text-center mt-4 space-y-2">
              <p className="font-serif font-bold text-lg text-base_600 flex items-center justify-center gap-2">
                <MdEmail /> Email: 
                <a href="mailto:joyanta.roy@cbsg-canada.ca" className="text-base_600/[80%] text-base hover:underline"> joyanta.roy@cbsg-canada.ca</a>, 
                <a href="mailto:joyanta@cbsg-bd.org" className="text-base_600/[80%] text-base hover:underline"> joyanta@cbsg-bd.org</a>
              </p>
              <p className="font-serif font-bold text-lg text-base_600 flex items-center justify-center gap-2">
                <MdPhone /> Cell: 
                <span className="text-base_600/[80%] text-base">+1 (416)-206-5672</span>, 
                <span className="text-base_600/[80%] text-base">+880 1737-345361</span>
              </p>
              <p className="font-serif font-bold text-lg text-base_600 flex items-center justify-center gap-2">
                <MdWeb /> Website: 
                <a href="http://www.cbsg-bd.org" target="_blank" rel="noopener noreferrer" className="text-base_600/[80%] text-base hover:underline">www.cbsg-bd.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;

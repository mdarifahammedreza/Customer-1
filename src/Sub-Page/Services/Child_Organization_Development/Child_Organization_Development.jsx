import { useLoaderData } from "react-router";

const Child_Organization_Development = () => {  
    const title = useLoaderData();

  return (
    <div className="mx-auto px-4 transition-all duration-500 ease-in-out transform  -translate-x-5">
      <h1 className="text-3xl font-bold text-center mt-4 ">{title}</h1>
      <p className="text-lg text-center mt-4 ">A technology company that builds economic infrastructure for the internet.</p>
    </div>
  );
}
export default Child_Organization_Development;  

import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppContext } from "../../../AppProvider";
// import { filterAssignments } from "../../../Components/Assignment";
import Card from "../../../Components/ui/Card";

const ChildOrganizationDevelopment = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { uri,assignments } = useContext(AppContext);
  console.log(assignments);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (!id) return;
    
    const fetchData = async () => {
      try {
        const response = await axios.get(`${uri}sub-service-areas/${id}/`);
        setData(response.data);
      } catch (err) {
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className=" flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-lg transition-all duration-500 ease-in-out transform" data-aos="fade-up">
      {data.images && <img src={data.images} alt={data.name} data-aos="fade-left" className="max-w-xl h-96"/>}
      <h1 className="text-4xl font-bold text-center text-base_600" data-aos="fade-right">
        {data.name}
      </h1>
      
      <div className="dynamic-content mt-5" data-aos="fade-left" dangerouslySetInnerHTML={{ __html: data.description }} />
      <div>
        <LoadAssignment assignments={assignments} type={data.name} />
      </div>
    </div>
  );
};

export default ChildOrganizationDevelopment;



const LoadAssignment = (assignments, type) => {
  console.log(assignments);
  console.log(type);
  const filteredAssignments = assignments.filter(
    (assignment) => assignment.sub_service_area.name === type
  );

  console.log(filteredAssignments);
  return filteredAssignments?.map((assignment) =>
    assignment ? (
      <Link key={assignment.id} to={`/assignments/${assignment.id}`}>
        <Card
          title={assignment.title}
          description={assignment.description}
          photo={assignment.photo}
          logo={assignment.company_logo}
          practiceArea={assignment.practice_area.name}
          subServiceArea={assignment.sub_service_area.name}
          serviceType={assignment.service_type}
        />
      </Link>
    ) : null
  );
};




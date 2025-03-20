import { Outlet } from 'react-router'; // Correct import for React Router
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const Root = () => {
  const HeaderData = {
    firstName: import.meta.env.VITE_FIRST_NAME,
    lastName: import.meta.env.VITE_LAST_NAME,
    credential: import.meta.env.VITE_CREDENTIAL
  };
  


  return (
    <div className="font-sans bg-gray-100 ">
      <div className='px-4'><Header data={HeaderData} />
      
      <Outlet /></div>
      <Footer />
    </div>
  );
};

export default Root;


import { Outlet } from 'react-router'
import Header from './Components/Header/Header'
import Bar from './Components/Contact info bar/Bar';
import Footer from './Components/Footer/Footer';



const Root = () => {
  return (
    < div className='font-sans  bg-floor'>
    <Header/>
    <Outlet />
    <Footer/>
    </div>
  )
}
export default Root

import { Outlet } from 'react-router'
import Header from './Components/Header/Header'
import Bar from './Components/Contact info bar/Bar';



const Root = () => {
  return (
    < div className='font-sans bg-floor'>
    <Header/>
    <Outlet />
    </div>
  )
}
export default Root;

import { Outlet } from 'react-router'
import Header from './Components/Header/Header'
import Bar from './Components/Contact info bar/Bar';



const Root = () => {
  return (
    < div className='bg-floor'>
    <Bar/>
    <Header/>
    <Outlet />
    </div>
  )
}
export default Root;
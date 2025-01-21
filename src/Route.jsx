import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Page/Home";
import About from "./Page/About";
import Services from "./Page/Services";
import Practice from "./Page/Practice";
import Team from "./Page/Team";
import Work from "./Page/Work";
import Contacts from "./Page/Contacts";
import Organization_Development from "./Sub-Page/Services/Organization_Development";
import Reacher_Evaluation from "./Sub-Page/Services/Research_Evaluation";
import Child_Organization_Development from "./Sub-Page/Services/Child_Organization_Development/Child_Organization_Development";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [{
        path: "/",
        element: <Home/>,
      //   children: [],
      },
  
  
     
      {
        path: "/About",
        element: <About/>,
      //   children: [],
      },
  
  
      {
        path: "/Services",
        element: <Services/>,
       children: [
        {
          path: "/Services/Organization-Development",
          element: <Organization_Development/>,
          children:[
            {
              path: "/Services/Organization-Development/:Subpath",
              loader: ({params}) => {return params.Subpath}, 
              element: <Child_Organization_Development />,
            }
          ]
        },
        {
          path: "/Services/Research&Evaluation",
          element: <Reacher_Evaluation/>,
          children:[
            {
              path: "/Services/Research&Evaluation/:Subpath",
              loader: ({params}) => {return params.Subpath}, 
              errorElement:<div>Sorry Content Not found</div>,
              element: <Child_Organization_Development />,
            }
          ]
        },
       ],
      },
  
  
      {
          path: "/Practice-area",
          element: <Practice/>,
        //   children: [],
      },
  
  
      {
          path: "/team",
          element: <Team/>,
        //   children: [],
      },
  
  
      {
          path: "/Work&reach",
          element: <Work/>,
        //   children: [],
      },
  
  
      {
          path: "/contacts",
          element: <Contacts/>,
        //   children: [],
      },  ],
    },  
  ]);
  export default router;
  
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
        },
        {
          path: "/Services/Research&Evaluation",
          element: <Reacher_Evaluation/>,
        },
       ],
      },
  
  
      {
          path: "/Practice-area",
          element: <Practice/>,
        //   children: [],
      },
  
  
      {
          path: "/Team",
          element: <Team/>,
        //   children: [],
      },
  
  
      {
          path: "/Work-&-reach",
          element: <Work/>,
        //   children: [],
      },
  
  
      {
          path: "/Contact",
          element: <Contacts/>,
        //   children: [],
      },  ],
    },  
  ]);
  export default router;
  
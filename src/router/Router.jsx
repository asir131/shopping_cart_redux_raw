import {createBrowserRouter,} from "react-router-dom";
import Root from "../pages/Root"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
 export const ourRouter = createBrowserRouter([
    {
        path: "/",
    element: <Root />,
    
    children: [
        { path: "/", index: true, element: <Shop/> },
        { path: "/cart", element: <Cart />  },
    ],
    }
  ]);
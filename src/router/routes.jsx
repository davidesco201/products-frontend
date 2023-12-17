import { Navigate } from "react-router-dom";
import Default from "../pages/default/default";
import NotFound from "../pages/not-found/not-found";
import Product from "../pages/product/product";
import Cart from "../pages/cart/cart";
const routes = [
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "/", element: <Navigate to="/products" />, },
      { path: "/products", element: <Product />, },
      { path: "/cart", element: <Cart />, },
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  },
];
export default routes;

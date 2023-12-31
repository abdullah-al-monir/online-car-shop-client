import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BrandPage from "../Pages/BrandPage/BrandPage";
import Update from "../Pages/Update/Update";
import ProductDetails from "../Components/Products/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://online-car-shop-server-8px3eqa97-abdullah-al-monirs-projects.vercel.app/cart"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/brand/:name",
        element: <BrandPage />,
        loader: ({ params }) =>
          fetch(`https://online-car-shop-server-8px3eqa97-abdullah-al-monirs-projects.vercel.app/brand/${params.name}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://online-car-shop-server-8px3eqa97-abdullah-al-monirs-projects.vercel.app/products/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://online-car-shop-server-8px3eqa97-abdullah-al-monirs-projects.vercel.app/products/${params.id}`),
      },
    ],
  },
]);

export default Route;

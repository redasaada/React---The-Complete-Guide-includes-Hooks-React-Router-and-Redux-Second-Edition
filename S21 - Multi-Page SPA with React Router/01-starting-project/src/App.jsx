import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import ProductsPage from "./pages/Products.jsx";
import RootLayout from "./pages/Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductDetailPage from "./pages/ProductDetail.jsx";

// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path={'/'} element={<HomePage/>}/>
//         <Route path={'/products'} element={<ProductsPage/>}/>
//     </Route>
// );
//
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'products', element: <ProductsPage/>},
            {path: 'products/:productId', element: <ProductDetailPage/>},
        ],
        errorElement: <ErrorPage/>
    },
]);

function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App

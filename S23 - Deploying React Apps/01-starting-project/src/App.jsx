import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import BlogPage, { loader as postsLoader } from './pages/Blog.jsx';
import HomePage from './pages/Home.jsx';
// import PostPage, {loader as postLoader} from './pages/Post.jsx';
import RootLayout from './pages/Root.jsx';
import {lazy, Suspense} from "react";

const BlogPage = lazy(() => import('./pages/Blog'));
const PostPage = lazy(() => import('./pages/Post'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'posts',
                children: [
                    {
                        index: true,
                        element: <Suspense fallback={<p>Loading...</p>}><BlogPage/></Suspense>,
                        loader: () => import('./pages/Blog').then((module) => module.loader())
                    },
                    {
                        path: ':id',
                        element:<Suspense fallback={<p>Loading...</p>}><PostPage/></Suspense>,
                        loader: (meta) => import('./pages/Post').then((module) => module.loader(meta))
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;

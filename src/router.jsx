import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Vdi from './components/routes/Vdi.jsx'
import Post from './components/routes/Post.jsx'
import Ecom from './components/routes/Ecom.jsx'
export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/vdi', element: <Vdi /> },
    { path: '/post', element: <Post /> },
    { path: '/ecom', element: <Ecom /> },
])
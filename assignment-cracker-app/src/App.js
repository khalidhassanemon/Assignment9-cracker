
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Main from './Component/Main/Main';
function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main></Main>,
  children:[
    { path: '/header', element: <Header></Header> },
    {path:'/home',element:<Home></Home>},
    {path:'about',element:<About></About>},
    {path:'blog',element:<Blog></Blog>}
  ]
    },
 {path:'*',element:<div>This route not found</div>}
  ])
  return (
    <div className='App'>
                <h2 style={{color:'blue'}}>Assignment Crackers</h2>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Main from './Component/Main/Main';
import Cards from './Component/Cards/Cards';
import Blogdetails from './Component/Blogdetails/Blogdetails';
import Blogs from './Component/Blogs/Blogs';
import Statistics from './Component/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: 'header', element: <Header></Header> },
        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'blogs', element: <Blogs></Blogs> },
        {
          path: 'statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>
        },
        {
          path: 'cards',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },

          element: <Cards></Cards>
        },
        {
          path: '/blog/:blogId',
          loader: async ({ params }) => {
            // console.log(params.blogId); 
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.blogId}`)
          },
          element: <Blogdetails></Blogdetails>
        }

      ]
    },
    { path: '*', element: <div>This route not found</div> }
  ])
  return (
    <div className='container'>
      <div className='App'>
        <div className='row'>
          <h2 style={{ color: 'yellowGreen', marginTop: '120px' }}>Assignment Crackers</h2>
        </div>
        <div className='row-2'>
          <RouterProvider router={router}></RouterProvider>
        </div>

      </div>
    </div>
  );
}

export default App;

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Main from './Component/Main/Main';
import Cards from './Component/Cards/Cards';
import Quiz from './Component/Quiz/Quiz';

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
        {
          path: 'cards',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },

          element: <Cards></Cards>
        },
        {
          path: '/quiz/:quizId',
          element: <Quiz></Quiz>
        }

      ]
    },
    { path: '*', element: <div>This route not found</div> }
  ])
  return (
    <div>
      <div className='App'>
        <h2 style={{ color: 'yellowGreen' }}>Assignment Crackers</h2>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;

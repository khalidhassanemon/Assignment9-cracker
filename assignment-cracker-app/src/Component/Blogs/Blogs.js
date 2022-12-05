import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-24 border bg-gray-500 mr-6 -ml-6 p-20 mr-32'>
            <div className='mr-16'>
          <h2 className='text-3xl text-center'>What is the purpose of react router?</h2>
          <p className='text-center'><small>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web <br>
          </br> or mobile apps that allow navigating without refreshing the page.</small></p>
          <h2 className='text-3xl text-center'>How does context API works?</h2>
          <p className='text-center'><small> Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly,<br></br>instead of passing it down through a chain of props.</small></p>
          <h2 className='text-3xl text-center'>What is useRaf hook?</h2>
          <p className='text-center'><small>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.<br></br> It can be used to access a DOM element directly.</small>
          </p>
          </div>
        </div>
    );
};

export default Blogs;
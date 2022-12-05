import React from 'react';
import Header from '../Header/Header';
import './Abbout.css'
const About = () => {
    return (
        <div className='second mt-24 border bg-gray-500 -ml-48 p-20 mr-48'>
            <h2>About Component</h2>
            <div className='mr-16'>
                <p>In This Assignment we learned A plenty of Things.</p>
                <p>For Example:1.React Router</p>
                <p>2.API Loading from different dynamic data</p>
                <p>3.Making Quiz Web page from different dynamic data</p>
                <p>4.Also It gives us the knowledge by clicking correct ans from an Icon</p>
                <p>5.Rechart or Barchart Making</p>
            </div>
        </div>
    );
};

export default About;
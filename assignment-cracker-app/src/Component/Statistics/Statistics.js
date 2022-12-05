import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const data=useLoaderData();
    return (
        <div className='my-100'>
            <LineChart width={600} height={300} data={data.data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }}/>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip/>
            </LineChart>

        </div>
    );
};

export default Statistics;
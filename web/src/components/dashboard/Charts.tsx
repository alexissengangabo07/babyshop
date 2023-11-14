"use client"

import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Bar,
    LineChart,
    Line,
    Tooltip
} from 'recharts';

interface tooltipParams {
    active: boolean,
    payload: object[],
    label: string
}

const Charts = () => {

    const CustomTooltip = () => {
        // if (active && payload && payload.length) {
        return (
            <div className='bg-gray-300 text-green-600 font-bold p-4'>
                <p className="label">Label : value payload</p>
            </div>
        );
        // }

        // return null;
    };

    return (
        <div className="mb-8">
            <ResponsiveContainer width="100%" height={330} className="text-white text-xs rounded-lg bg-[#1f2937]">
                <BarChart data={[]}>
                    <Bar dataKey="production" barSize={15} fill="#feff" />
                    <XAxis dataKey="product" tick={{ fill: 'lightgray' }} />
                    <YAxis dataKey="production" tick={{ fill: 'lightgray' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                </BarChart>
            </ResponsiveContainer>
            <div className='mt-5'>
                <div className='text-gray-400 font-medium text-lg'>Les productions par produit</div>
                <div className='text-blue-300 text-sm'>Total General</div>
            </div>
        </div>
    )
}

export default Charts;
"use client"

import { fetchProductsStock } from '@/features/stock.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
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
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state: RootState) => state.stockReducer);
    useEffect(() => {
        dispatch(fetchProductsStock());
    }, []);

    const CustomTooltip = () => {
        // if (active && payload && payload.length) {
        return (
            <div className='bg-green-200 hover:bg-red-400 text-green-600 font-bold p-4'>
                <p className="label">Label : value payload</p>
            </div>
        );
        // }
        // return null;
    };

    return (
        <div className="mb-8">
            <ResponsiveContainer width="100%" height={330} className="text-white text-xs rounded-lg bg-[#1f2937]">
                <BarChart data={data}>
                    <Bar dataKey="quantity" barSize={15} fill="green" />
                    <XAxis dataKey="productId.name" tick={{ fill: 'lightgray' }} />
                    <YAxis dataKey="quantity" tick={{ fill: 'lightgray' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid stroke="blue" strokeDasharray="5 5" />
                </BarChart>
            </ResponsiveContainer>
            <div className='mt-5'>
                <div className='text-gray-400 font-medium text-lg'>Produits en stock</div>
                <div className='text-blue-300 text-sm'>Total General</div>
            </div>
        </div>
    )
}

export default Charts;
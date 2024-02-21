"use client";

import { useEffect } from "react";
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProductsStock } from "@/features/stock.slice";

const Categories = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((store: RootState) => store.stockReducer);

    useEffect(() => {
        dispatch(fetchProductsStock());
    }, []);

    return (
        // <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
        <div className='basis-1/4 hidden md:block bg-white shadow-md p-6 h-fit'>
            <div className="divide-y divide-gray-200">
                <h2 className="mb-2">Catégories</h2>
                <div>
                    <div className="space-y-2 mt-3">
                        {
                            categories.data.map((category, i) => (
                                <div className="flex items-center" key={i}>
                                    <input type="checkbox" name={"cat-" + i} id={"cat-" + i}
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label htmlFor={"cat-" + i} className="text-gray-600 ml-3 cusror-pointer capitalize">{category.productId?.category}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
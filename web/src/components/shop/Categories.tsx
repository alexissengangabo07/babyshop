"use client";

import { useEffect } from "react";
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchCategories } from "@/features/categories.slice";

const Categories = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((store: RootState) => store.categoriesReducer);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        // <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
        <div className='basis-1/4 hidden md:block bg-white shadow-md p-6 h-fit'>
            <div className="divide-y divide-gray-200 space-y-5">
                <div>
                    {/* <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Catégories</h3> */}
                    <div className="space-y-2">
                        {
                            categories.data.map((category, i) => (
                                <div className="flex items-center" key={i}>
                                    <input type="checkbox" name="cat-1" id="cat-1"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label htmlFor="cat-1" className="text-gray-600 ml-3 cusror-pointer capitalize">{category.title}</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Prix</h3>
                    <div className="mt-4 flex items-center">
                        <input type="text" name="min" id="min"
                            className="w-full outline-none border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="min" />
                        <span className="mx-3 text-gray-500">-</span>
                        <input type="text" name="max" id="max"
                            className="w-full outline-none border-gray-400 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="max" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
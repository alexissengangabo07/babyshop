"use client";
import { useEffect } from "react";
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProductsStock } from "@/features/stock.slice";

const CategoriesHome = () => {
    const dispatch = useAppDispatch();
    const stock = useAppSelector((store: RootState) => store.stockReducer);

    useEffect(() => {
        dispatch(fetchProductsStock());
    }, []);

    return (
        <div className="divide-y divide-gray-300 divide-dashed basis-1/3 hidden md:block bg-white shadow-md h-fit">
            {
                stock.data.map((category: any, i) => (
                    // <Link href={''} key={i}>
                    <p key={i} className="flex items-center py-4 px-6 transition cursor-pointer text-gray-600  hover:text-primary text-sm">
                        <img src="../assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="w-5 h-5 object-contain" />
                        <span className="ml-3 capitalize">{category?.productId?.category}</span>
                    </p>
                    // </Link>
                ))
            }
        </div>
    )
}

export default CategoriesHome;
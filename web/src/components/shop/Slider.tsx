"use client";
import { useEffect, useState } from "react";
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProductsStock } from "@/features/stock.slice"; import Link from "next/link";

const Slider = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((store: RootState) => store.stockReducer);
    const [currentItem, setCurrent] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    useEffect(() => {
        dispatch(fetchProductsStock());
    }, []);

    useEffect(() => {
        let slide = setInterval(() => {
            if (currentItem < products.data.length - 1) {
                setCurrent(currentItem + 1);
                setTranslateValue(-(currentItem + 1) * 100);
            }
            else {
                setTranslateValue(0);
                setCurrent(0);
            }
        }, 5000);

        return () => {
            clearInterval(slide);
        }
    }, [products, currentItem]);

    const handleDotClick = (index: number) => {
        setCurrent(index);

        if (index === 0) {
            setTranslateValue(0);
        }
        else {
            let t = index * 100;
            setTranslateValue(-t);
        }
    }

    return (
        <div className="relative w-full h-[64vh] overflow-hidden whitespace-nowrap">
            <div className="relative w-full h-full" style={{ transform: `translateX(${translateValue}%)`, transition: 'tranform ease-out 0.4s' }}>
                {
                    products.data.map((product, i) => (
                        <div key={i} className="relative inline-block h-full w-full" style={{ background: `url(${product.productId?.image.url})`, backgroundRepeat: 'no-repeat',  backgroundPosition: "center", backgroundSize: "cover" }}>
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 flex flex-col items-center justify-center gap-5">
                                <h1 className="capitalize text-lg bg-gradient-to-r from-orange-500 to-violet-400 bg-clip-text text-transparent font-bold">{product.productId?.name}</h1>
                                <Link href={'/produit/' + product._id} className="text-gray-200 text-sm bg-primary hover:bg-red-700 py-3 px-6 rounded-3xl border-none cursor-pointer">Achetez maintenant</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="z-50 absolute bottom-1 left-[50%] translate-x-[-50%] flex flex-row items-center  justify-center gap-2">
                {
                    products.data.map((prod, i) => (
                        <span key={i} onClick={() => handleDotClick(i)} className={`text-[30px] cursor-pointer ${currentItem === i ? 'text-primary' : 'text-slate-800'}`}>&#8226;</span>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider;
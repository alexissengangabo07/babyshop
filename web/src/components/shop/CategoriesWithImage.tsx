"use client"
import { useState, useEffect } from 'react'
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchCategories } from '@/features/categories.slice';

const CategoriesWithImage = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((store: RootState) => store.categoriesReducer);
    const [imagesCat, setImagesCat] = useState([
        'kid.png',
        // 'category-1.jpg',
        // 'category-2.jpg',
        // 'category-3.jpg',
        // 'category-4.jpg',
        // 'category-5.jpg',
        // 'category-6.jpg'
    ]);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <div className="px-6 pt-8 pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">ACHETER PAR CATÉGORIE</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    categories.data.map((category, i) => (
                        <div className="relative rounded-sm overflow-hidden group" key={i}>
                            <img src={"assets/images/category/" + imagesCat[0]} alt="category 1" className="w-full" />
                            <a href="#"
                                className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{category.title}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesWithImage
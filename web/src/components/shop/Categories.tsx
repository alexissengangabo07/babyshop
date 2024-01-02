import React from 'react'

const Categories = () => {
    return (
        // <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
        <div className='basis-1/4'>
            <div className="divide-y divide-gray-200 space-y-5">
                <div>
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Catégories</h3>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input type="checkbox" name="cat-1" id="cat-1"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="cat-1" className="text-gray-600 ml-3 cusror-pointer">Bedroom</label>
                            <div className="ml-auto text-gray-600 text-sm">(15)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="cat-2" id="cat-2"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="cat-2" className="text-gray-600 ml-3 cusror-pointer">Sofa</label>
                            <div className="ml-auto text-gray-600 text-sm">(9)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="cat-3" id="cat-3"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="cat-3" className="text-gray-600 ml-3 cusror-pointer">Office</label>
                            <div className="ml-auto text-gray-600 text-sm">(21)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="cat-4" id="cat-4"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="cat-4" className="text-gray-600 ml-3 cusror-pointer">Outdoor</label>
                            <div className="ml-auto text-gray-600 text-sm">(10)</div>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Prix</h3>
                    <div className="mt-4 flex items-center">
                        <input type="text" name="min" id="min"
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="min" />
                        <span className="mx-3 text-gray-500">-</span>
                        <input type="text" name="max" id="max"
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="max" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
import React from 'react'

const OrderSummary = () => {
  return (
    <div className="basis-2/6 border border-gray-200 p-4 rounded">
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <div>
                        <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
                        <p className="text-sm text-gray-600">Size: M</p>
                    </div>
                    <p className="text-gray-600">
                        x3
                    </p>
                    <p className="text-gray-800 font-medium">$320</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
                        <p className="text-sm text-gray-600">Size: M</p>
                    </div>
                    <p className="text-gray-600">
                        x3
                    </p>
                    <p className="text-gray-800 font-medium">$320</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
                        <p className="text-sm text-gray-600">Size: M</p>
                    </div>
                    <p className="text-gray-600">
                        x3
                    </p>
                    <p className="text-gray-800 font-medium">$320</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
                        <p className="text-sm text-gray-600">Size: M</p>
                    </div>
                    <p className="text-gray-600">
                        x3
                    </p>
                    <p className="text-gray-800 font-medium">$320</p>
                </div>
            </div>

            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>shipping</p>
                <p>Free</p>
            </div>

            <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
                <p className="font-semibold">Total</p>
                <p>$1280</p>
            </div>

            <a href="#"
                className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">
                    Valider l'Achat
                </a>
        </div>
  )
}

export default OrderSummary
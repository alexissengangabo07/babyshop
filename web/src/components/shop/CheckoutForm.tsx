import React from 'react'

const CheckoutForm = () => {
    return (
        <div className="basis-4/6 border border-gray-200 p-4 rounded">
            <h3 className="text-lg font-medium capitalize mb-4">Payement</h3>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="first-name" className="text-gray-600">Prenom<span
                            className="text-primary">*</span></label>
                        <input type="text" name="first-name" id="first-name" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="text-gray-600">Nom <span
                            className="text-primary">*</span></label>
                        <input type="text" name="last-name" id="last-name" className="input-box" />
                    </div>
                </div>
                <div>
                    <label htmlFor="region" className="text-gray-600">Adresse physique</label>
                    <input type="text" name="region" id="region" className="input-box" />
                </div>
                <div>
                    <label htmlFor="phone" className="text-gray-600">Numero de téléphone <span
                            className="text-primary">*</span></label>
                    <input type="text" name="phone" id="phone" className="input-box" />
                </div>
            </div>

        </div>
    )
}

export default CheckoutForm
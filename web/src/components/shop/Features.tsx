import { FaQuestionCircle } from "react-icons/fa";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { SiMoneygram } from "react-icons/si";


const Features = () => {
    return (
        <div className="bg-white hidden shadow-md lg:grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center mt-6 mb-8">
            <div className="p-3 flex justify-start lg:justify-center items-center gap-5">
                <HiMiniShieldCheck size={50} color={'#F38A45'} />
                <div>
                    <h4 className="font-medium text-lg">Paiement sécurisé et fiable</h4>
                    <p className="text-gray-500 text-sm">Payer avec les reseaux mobile</p>
                </div>
            </div>
            <div className="p-3 flex justify-start lg:justify-center items-center gap-5">
                <SiMoneygram size={40} color={'#F38A45'} />
                <div>
                    <h4 className="font-medium text-lg">Garantie de remboursement</h4>
                    <p className="text-gray-500 text-sm">10 jours de remboursement avant usage</p>
                </div>
            </div>
            <div className="p-3 flex justify-start lg:justify-center items-center gap-5">
                <FaQuestionCircle color={'#F38A45'} size={40} />
                <div>
                    <h4 className="font-medium capitalize text-lg">Assistance 24/7</h4>
                    <p className="text-gray-500 text-sm">Assistance à la clientèle</p>
                </div>
            </div>
        </div>
    )
}

export default Features;
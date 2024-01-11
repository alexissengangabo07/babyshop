import { FaQuestion } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoStorefront } from "react-icons/io5";

const TopCard = () => {
    return (
        <div className="bg-white shadow-md p-2 h-fit text-xs">
            <div className="flex gap-2 mb-4 items-center">
                <div className="border h-fit w-fit p-2 rounded-full border-primary text-primary"><FaQuestion /></div>
                <div>
                    Centre d'assistance
                    <p className="text-xs text-gray-400">
                        Guide du service client
                    </p>
                </div>
            </div>
            <div className="flex gap-2 mb-4 items-center">
                <div className="border h-fit w-fit p-2 rounded-full border-primary text-primary"><FiPhoneCall /></div>
                <div>
                    Commandez au 2520006161
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="border h-fit w-fit p-2 rounded-full border-primary text-primary"><IoStorefront /></div>
                <div>
                    Acheter sur Bambino Shop
                    <p className="text-xs text-gray-400">
                        Ouvrez votre shop ici
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopCard;
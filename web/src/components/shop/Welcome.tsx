import Link from "next/link";
import { FaQuestion } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoStorefront } from "react-icons/io5";

const Welcome = () => {
    return (
        <div className="basis-1/6 bg-white hidden shadow-md p-2 h-fit text-xs lg:flex flex-col justify-between">
            <p>Bienvenue chez Bambino Shop</p>
            <Link href={'login'} className="bg-orange-300 rounded-full px-4 py-2 text-gray-200 hover:bg-orange-500 text-center">Connectez vous</Link>
        </div>
    )
}

export default Welcome;
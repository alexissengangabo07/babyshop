import Link from "next/link"

const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center py-36 px-6" style={{ background: 'url(/assets/images/banner.png)' }}>
            <div className="container">
                <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
                    Meilleures collections <br />d'articles pour <br /> bébé
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
                    accusantium perspiciatis, sapiente
                    magni eos dolorum ex quos dolores odio</p>
                <div className="mt-12">
                    <Link href="/boutique" className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary">Voir plus</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
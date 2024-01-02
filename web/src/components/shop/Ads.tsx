import Link from "next/link"

const Ads = () => {
    return (
        <div className="px-6 pb-16">
            <Link href="/boutique">
                <img src="assets/images/offer.jpg" alt="ads" className="w-full" />
            </Link>
        </div>
    )
}

export default Ads
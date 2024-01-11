import Link from "next/link"

const Ads = () => {
    return (
        <div className="pb-16">
            <Link href="/boutique">
                <img src="assets/images/offer.jpg" alt="ads" className="w-full" />
            </Link>
        </div>
    )
}

export default Ads
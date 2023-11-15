import { Suspense } from 'react'

const loading = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Suspense fallback={<div className='text-white bg-red-500 ok text-5xl text-center'>CHARGEMENT EN COURS</div>}>
                {children}
            </Suspense>
        </>
    )
}

export default loading
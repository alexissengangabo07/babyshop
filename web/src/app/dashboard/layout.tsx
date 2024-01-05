import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import Footer from '@/components/dashboard/Footer'
import Breadcrumb from '@/components/dashboard/Breadcrumb';

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen relative">
            <Sidebar />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header />
                <main className='bg-[#111827] min-h-[90vh]'>
                    <div className="px-4 sm:px-6 lg:px-5 py-4 w-full max-w-9xl mx-auto">
                        {/* Dashboard actions */}
                        <div className="sm:flex sm:justify-between sm:items-center mb-8">
                            <Breadcrumb
                                homeElement={
                                    <span className='flex items-center'>
                                        <svg className="w-3 h-5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Accueil
                                    </span>
                                }
                                separator={
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                }
                                activeClasses='!text-amber-500'
                                containerClasses='flex gap-2 items-center'
                                listClasses='hover:underline flex items-center font-medium text-gray-400'
                                capitalizeLinks
                            />
                        </div>
                        {/* Content */}
                        <div className=''>
                            {children}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}
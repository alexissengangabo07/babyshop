// 'use client';

// import { getToken } from '@/utils/cookie';
// import { redirect } from 'next/navigation';
// import { useEffect } from 'react';

// const WithAuth = (Component: any) => {
//     const token = getToken('token');

//     return function WithAuth(props: any) {
//         useEffect(() => {
//             if (token === null) {
//                 redirect('/dashboard');
//             }
//         }, []);

//         if (token === null) {
//             return null;
//         }
//         return <Component {...props} />
//     }
// }

// export default WithAuth
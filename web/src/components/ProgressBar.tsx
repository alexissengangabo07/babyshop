"use client";

import { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < 100) {
            setProgress(progress + 10);
        }
    }, [progress]);

    return (
        <div className='absolute top-0 left-0 w-full h-1 bg-white z-10'>
            <div className='h-full w-0 bg-blue-600 z-50' style={{ transition: 'width 0.5s ease-in-out', width: `${progress}%` }}></div>
        </div>
    )
}

export default ProgressBar
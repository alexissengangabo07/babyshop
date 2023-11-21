"use client"

import NextNProgress from 'nextjs-progressbar';
import { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [progres, setProgress] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                prevProgress === 100 ? 0 : prevProgress + 10
            });
        }, 600);
    }, []);

    return (
        <NextNProgress />
    )
}

export default ProgressBar
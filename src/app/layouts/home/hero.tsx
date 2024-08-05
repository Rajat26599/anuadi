'use client'
import Image from 'next/image'
import Frame from '../../assets/img/hero-frame.png'
import GoldFlower from '../../assets/img/hero-gold-flower.png'
import React, { useEffect, useState } from 'react'
import getTimeRemaining, { TimeRemaining } from '@/app/util/commonFunctions/getTimeRemaining'
import { weddingTime } from '@/app/constants/constants'
import capitalize from '@/app/util/commonFunctions/capitalize'

const Hero: React.FC = () => {
    // const timeRemaining: TimeRemaining = getTimeRemaining(weddingTime)
    const [ timeRemaining, setTimeRemaining ] = useState(getTimeRemaining(weddingTime))

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(getTimeRemaining(weddingTime))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className='flex'>
            <div className='flex mx-40 mt-60'>
                <div className='prose flex flex-col items-center'>
                    <h1 className='mb-0'>Ritesh & Zoya</h1>
                    <p>Our big day is November 14, 2022</p>
                    <Image src={GoldFlower} alt='Gold Flower' />
                    <div className='flex'>
                        {
                            Object.keys(timeRemaining).reverse().map((label, index) => (
                                <span key={index} className='mx-4 first:ml-0 last:mr-0 text-center'>
                                    <p suppressHydrationWarning>{timeRemaining[label]}</p>
                                    <p>{capitalize(label)}</p>
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div></div>
            </div>
            <Image className='absolute' src={Frame} alt='Floral frame' />
        </div>
    )
}

export default Hero
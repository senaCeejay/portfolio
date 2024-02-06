import React from 'react'
import Typewriter from 'typewriter-effect';
import Button from './Button';
import * as LR from "lucide-react"
const HeroSection = () => {
    return (
        <div className='lg:mt-0 grid lg:grid-cols-2 md:mt-10 h-full items-center hero-section  flex flex-col-reverse' >
            <div className='lg:mx-0 flex flex-col gap-3 mt-10 md:mt-0'>
                <div className='hero-left flex flex-col gap-2'>
                    <div className='flex flex-col flex-wrap gap-2'>
                        <p className='font-bold'>Hello, I'm</p>
                        <h1 className='text-6xl font-bold '>Chris Cee-jay Sena</h1>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className=" font-bold">And I'm a </p>
                        <div className='typewriter'>
                            <Typewriter
                                options={{
                                    strings: ['Front-End Developer', ' Web Designer', ' UI/UX Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam harum magnam quam quod, similique distinctio ab laudantium, praesentium at quas voluptatem ipsam esse. Illo ipsum delectus eum laudantium eligendi.</p>
                </div>
                <Button variant="dark" className='font-semibold flex gap-2 align-center justify-center text-sm'>
                    Download CV <LR.ArrowDownToLine size={18} />
                </Button>
            </div>
            <div className=' hero-right flex justify-center lg:justify-end mt-8 md:mt-0'>
                <img className="" src="" alt="img" />
            </div>
        </div>
    )
}

export default HeroSection
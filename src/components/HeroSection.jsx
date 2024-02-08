import React from 'react';
import Typewriter from 'typewriter-effect';
import Button from './Button';
import * as LR from "lucide-react";

const HeroSection = () => {
    return (
        <div className='grid grid-cols-2 hero-section gap-10 '>
            <div className='flex flex-col gap-2 justify-center'>
                <div className='hero-left flex flex-col gap-1'>
                    <div className=''>
                        <p className='font-bold'>Hello, I'm</p>
                        <h1 className='text-6xl font-bold'>Chris Cee-jay Sena</h1>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className="font-bold">And I'm a</p>
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

                <div className=''>
                    <p>Enthusiastic junior front-end developer with a strong foundation in HTML, CSS, and JavaScript, with a particular focus on Reactjs.</p>
                </div>
                <Button variant="dark" className='font-semibold flex gap-2 align-center justify-center text-sm'>
                    Download CV <LR.ArrowDownToLine size={18} />
                </Button>
            </div>
            <div className='flex justify-center lg:justify-end hero-right'>
                <img className="" src="" alt="img" />
            </div>
        </div>
    );
}

export default HeroSection;

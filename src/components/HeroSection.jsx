import React from 'react';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import * as LR from "lucide-react";

const HeroSection = () => {

    const [ref1, inView1] = useInView();
    const animateLeft = "animate__animated animate__fadeInLeft "
    const animateRight = "animate__animated animate__fadeInRight animate__delay-1s"

    return (
        <div className='grid grid-cols-2 hero-section gap-10'>
            <div className={`flex flex-col gap-2 justify-center  ${inView1 && animateLeft}`}>
                <div ref={ref1}>
                    {inView1 &&
                        <>
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

                            <a href="https://drive.usercontent.google.com/u/0/uc?id=1yZQyKWBwKRjF26eieV1PUQkxQ9jFinFx&export=download" className='font-semibold w-36 rounded-md mt-2 flex gap-2 align-center justify-center text-sm p-2 bg-sky-400 text-white hover:bg-sky-500'>
                                Download CV <LR.ArrowDownToLine size={18} />
                            </a>
                        </>
                    }
                </div>
            </div>
            {inView1 &&
                <>
                    <div className={`flex justify-center lg:justify-end hero-right ${inView1 && animateRight}`}>
                        <img className="" src="https://lh3.googleusercontent.com/fife/AGXqzDnhpTmOvVuL1dTQD70mQlHUT4iWw0rWQfDonvF9ZC2aHz-kJzS6z-9nXEIijwPwFCNvXB6YnUGoYnqBhbSOq91vI55ca2hYU4nXbXR-7mZ_EL2rM984rb3J-naXcTXS3oMpdk9NLQn0zkJ0Knmq7vDWnyV8b5ty6sAnlKDo4K4tKdPAKkZTNGo8f_V2GGk7_IcwiE-Q72ac8SUo0lUpWcBXtJnk8oonIydqQardAJl7Hghj6dbwbIBetwEbFGMR5P73R7WDWuken5ard8SKfZ4hySK9CK3MbiXZWs0s_DViRVmYHfmaGEu3vvCLTvM5hRUXsXZRQxFyzU3lDvOs37iDjp5LLvttYM7Ua3UtydEPo7L9LxgR882vFd2litIQ8muLChR9Sm5u6WgyASu7fwILHJ-Qrzjts1ozPPaNTAJfEMCmSTHOf5whlgR_8vllBoXvxVuGDGZ-y4v3KIAD7efLziEo72sBLfASCV_PJ2B9CKar54YsOgw0OQjB2k4xUWbQ-_J5bK_Xb42HV4GS42IvDOYXjdJwP0O-D-rFiAsCBELjCrSx3u3CLxH1Mu1Ej3SiaFiUAO9HGZEmIiWfl7ljg1sEJsyF57tidlxujSbH9-E_RxUVcJQ39jkbXNDs4nm7pGGChVwGmIoOKx8LrYoqI2XOhicEGqNdHmCBtGt2V-8pE2v_FtdZZXWfATCSrnXs6Af0K_1lk23Vusg3aPT3ilxOAN8Y12J7tTo0LidqTegQRN9fIvJXz57QyDFxsnSPUaSQy1Do-sp_wN98GuvDpEWZrIWbMdRKOjPpRP-L5M_gjYRYZEpgRto1YbGP6bibPIgxUOVN6Oqp1JEHwnu3SwUEqx-Apo6t3kCrSi68zn_Ry81aJMoHQINiLZYWd2uxRumQsXdzCHY1q7Jy2JxchJJg0Zxtp3u0EXAwrNh1Mno2HtfpLERLpM140uuxOKcrwhhtkBlSQVjcWDwKn4wks7Xx6FNweqF0vFKD1RIPr2nPJZvyIUniYoDofbKgCwVUPpyInQL_cJKG6lJeQOGEB_hKyvb2yhhMWSHiRnCanezgUh-vvYT8CAbJQOcGVeChTExAr88Rr9lg2NZ5PcIR0nEruZZEOnOeBAI5PW_fL4izbiEYW3xPhtLKlS7cqgBR98BmO5NpIdnCsxGTLWaoEd90fA2DAit1cva1RzEMWzLBw4LOahdouSUBOq9CIQOFHpqJ3kWeDT_mYL54Z36Fec-gsrhe3H7rRipUisnvkoMyyzQ-aVzi_zJL45BQU3MEJcw-pdC0pVQXj7bfDH3HPwh3QPSfApj4DiT7Ydok0oJYVDZLT2LeC8osyoGHRRoQBDw9n6O0og7oicvaPXL4ljvpniZEsG2I2M-kQY5-2cqYp_-Uo4RPpA_zMwbibgOIQ1RtQEoq3-pqrKU-IG1or0XA0YvhXYXKjT3R-D7B730_plIuSsat562UMRGaSBLCVYAffrwcWVcM9L_Jb0wCZZx-z0Imc4vMamjCEQoroa080pPdqtvrarF7FeChhZdKkczFLHgOrauczF7fbpygbnxzdsIykbzjJ-KkfRUjJmI-dWbBJWGIx_W_fF8xq0pzIo3XApoFErv8OxXH=w1600-h739" alt="img" />
                    </div>
                </>
            }
        </div >
    );
}

export default HeroSection;

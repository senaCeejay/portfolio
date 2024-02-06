import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
const PageHeader = () => {
    return (
        <>
            <div className='flex justify-between items-center p-2'>
                <h1 className='text-xl font-bold '>Chris Cee-jay</h1>
                <div>
                    <p className='cursor-pointer p-1'>
                        <Link
                            to="Contributors"
                            // activeStyle={mystyle}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Hero
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default PageHeader
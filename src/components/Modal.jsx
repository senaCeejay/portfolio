import React, { useState } from 'react';

const Modal = (props) => {
    const [nav, setNav] = useState(true);

    const handleClick = () => {
        setNav(false);
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <>
            <div className="w-screen md:w-0 h-screen mt-2 flex flex-col items-center bg-white fixed">
                <div className='mt-4 flex flex-col gap-6'>
                    <a href="#home" className="font-bold" onClick={handleClick}>Home</a>
                    <a href="#about" className="font-bold" onClick={handleClick}>About</a>
                    <a href="#project" className="font-bold" onClick={handleClick}>Project</a>
                    <a href="#contact" className="font-bold" onClick={handleClick}>Contact</a>
                </div>
            </div>
        </>
    )
}

export default Modal;

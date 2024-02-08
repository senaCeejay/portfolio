import React from 'react';

const Modal = (props) => {
    const modalstyle = " h-screen mt-2 flex flex-col items-center bg-white fixed"

    return (
        <>
            <div className={props.activeNav ? `${modalstyle} w-screen` : modalstyle}>
                <div className='mt-4 flex flex-col gap-6'>
                    {/* <p className={props.activeNav ? "fade-in-text show" : "fade-in-text"}>asd</p> */}
                    <p className="font-bold">Home</p>
                    <p className="font-bold">About</p>
                    <p className="font-bold">Project</p>
                    <p className="font-bold">Contact</p>
                </div>
            </div >
        </>
    )
}

export default Modal
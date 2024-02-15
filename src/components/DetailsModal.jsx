import React, { useState, useEffect } from 'react';
import Button from './Button';
import * as LR from "lucide-react"
import { ProjectDataList } from '../data/projectData';
const DetailsModal = (props) => {
    const [projects, setProjects] = useState([0])

    useEffect(() => {
        setProjects(ProjectDataList.data);
    }, []);
    return (
        <>
            {
                projects.map((val, index) => (
                    < div className='modal-overlay active flex-col' key={index} >
                        <div className="modal-content relative" >
                            <div className=' flex justify-between items-center w-full'>
                                <h1 className='text-xl font-semibold'>{val.id}</h1>
                                <Button onClick={props.showDetails} variant="ghost" size="icon">
                                    <LR.X color="#7d7d7d" />
                                </Button>
                            </div>
                            <div className='mt-4'>
                                <div className='modal-img'>
                                    <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww" alt="" />
                                </div>
                                <div className='my-3'>
                                    <h2 className='text-xl font-semibold'>Description</h2>
                                </div>
                                <div className='modal-text-content overflow-auto text-justify'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique pariatur excepturi voluptatibus esse. Vel quaerat asperiores reiciendis. Ab modi suscipit iure excepturi repellat nesciunt mollitia repellendus ex eligendi vel!
                                </div>
                                <div className='absolute bottom-2.5 flex gap-2'>
                                    {/* <Button className="w-48 flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white">
                                Project Repository
                                <LR.Github color="#fff" size={18} />
                            </Button> */}
                                    <div className='flex items-center p-2 bg-slate-900 hover:bg-slate-800 text-white rounded' >
                                        <a href="https://unsplash.com/photos/a-couple-of-poles-that-are-by-some-water-N3ndgS6RxVc" target='_blank' rel="noopener noreferrer">
                                            Project Repository
                                        </a>
                                    </div>
                                    <Button className="flex items-center gap-2 border border-red-500 hover:bg-red-500 hover:text-white text-red-600 w-18" onClick={props.showDetails} >
                                        Close
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div >
                ))
            }
        </>
    );
}

export default DetailsModal;

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './Button';
import * as LR from "lucide-react"
import { ProjectDataList } from '../data/projectData';
const Projects = (props) => {
    const [ref1, inView1] = useInView();
    const animationLeft = "animate__animated animate__fadeInLeft"
    const animationDown = "animate__animated animate__fadeInDown"

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(ProjectDataList.data);
    }, []);

    return (
        <>

            <div ref={ref1}>
                <div className={inView1 && `${animationDown}`}>
                    <h1 className='text-3xl font-bold text-sky-400'>Projects</h1>

                    <p className='mt-3 animate_animated animate__fadeInLeft'>I'm excited to share my recent front-end development projects showcasing my expertise in user interface design and web development.  These projects demonstrate my commitment to crafting engaging and user-friendly web experiences through innovative front-end development techniques.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 project-cards'>
                    {projects.map((val, index) => (
                        <div key={index} className={`shadow-md rounded-xl ${inView1 ? `${animationLeft} ` : ''}`}>
                            <div className='p-5 rounded-xl flex flex-col gap-2'>
                                <img className="rounded-md h-56 w-full" src={val.image} alt="" />
                                <h1 className='font-bold text-2xl'>{val.name}</h1>
                                <p className='line-clamp'>{val.description}</p>
                                <div className='flex gap-2'>
                                    <Button variant="dark" size="normal" className="flex gap-1 items-center" onClick={props.showDetails} count={index}>
                                        {/* <label htmlFor="" className='font-semibold'>Details</label> */}
                                        Details
                                        <LR.ArrowRightCircle color="#ffffff" size={18} />
                                    </Button>
                                    <div className='flex items-center rounded gap-2 text-sky-400 border-sky-400 border p-2 hover:border-sky-500 hover:text-sky-500'>
                                        <a href={val.url} target='_blank' rel="noopener noreferrer">
                                            Preview
                                        </a>
                                        <LR.Eye color="#38bdf8" size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div >
        </>
    );
};

export default Projects;

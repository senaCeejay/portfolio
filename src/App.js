import { useState, useRef } from 'react';
import './App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import * as LR from "lucide-react"
import HeroSection from './components/HeroSection';
import About from './components/About';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Button from './components/Button';

function App() {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const [darkmode, setDarkmode] = useState(false)
    const mystyle = {
        // borderLeft: "2px solid #1a73e8 ",
        color: "#7dd3fc",
        fontWeight: "font-weight: 700",
        borderBottom: "2px solid #7dd3fc",
    };
    const linkstyle = 'cursor-pointer p-1 font-semibold'
    const headerstyle = "flex justify-between align-center p-4 sticky top-0 transition-colors"
    return (
        <>
            <div className='container'>
                <div className={darkmode ? "text-textWhite transition-colors  bg-bgDark" : "text-textDark transition-colors  bg-bgWhite"}>
                    <div className={darkmode ? `${headerstyle} bg-bgDark` : `${headerstyle} bg-bgWhite`}>
                        <div className='cursor-pointer'>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <h1 className='font-bold text-2xl text-sky-300 hidden md:inline-flex'>LOGO</h1>
                            </Link>
                        </div>
                        <div className='md:hidden'>
                            <LR.Menu />
                        </div>
                        <div className='flex gap-4 hidden md:inline-flex items-center'>
                            <p className={linkstyle}>
                                <Link
                                    to="home"
                                    activeClass="active"
                                    activeStyle={mystyle}
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </p>
                            <p className={linkstyle}>
                                <Link
                                    to="about"
                                    activeStyle={mystyle}
                                    spy={true}
                                    smooth={true}
                                    offset={-66}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </p>
                            <p className={linkstyle}>
                                <Link
                                    to="myWork"
                                    activeStyle={mystyle}
                                    spy={true}
                                    smooth={true}
                                    offset={-66}
                                    duration={500}
                                >
                                    My Work
                                </Link>
                            </p>
                            <p className={linkstyle}>
                                <Link
                                    to="contact"
                                    activeStyle={mystyle}
                                    spy={true}
                                    smooth={true}
                                    offset={-66}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </p>
                            {/* <label className="switch-container">
                                <input type="checkbox" onClick={() => {
                                    setDarkmode(!darkmode)
                                }} />
                                <span className="slider"></span>
                            </label> */}
                        </div>
                    </div>
                    <div className='snap-mandatory snap-x'>
                        <section className="section" id="home">
                            <HeroSection />
                        </section>
                        <section className="section" id="about">
                            <About />
                        </section>
                        <section className="section" id="myWork">
                            <MyWork />
                        </section>
                        <section className="section" id="contact">
                            <Contact />
                        </section>
                    </div >
                </div>
            </div>
        </>
    );
}

export default App;
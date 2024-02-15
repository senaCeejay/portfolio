import { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-scroll";
import * as LR from "lucide-react"
import HeroSection from './components/HeroSection';
import About from './components/About';
import Contact from './components/Contact';
import Button from './components/Button';
import Modal from './components/Modal';
import DetailsModal from './components/DetailsModal'
import Projects from './components/Projects';
import ScrollToTheTop from './components/ScrollToTheTop';
import { ProjectDataList } from '../src/data/projectData';

function App() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [projects, setProjects] = useState([]);
    // const [darkmode, setDarkmode] = useState(false)\
    const darkmode = ""
    const mystyle = {
        // borderLeft: "2px solid #1a73e8 ",
        color: "#7dd3fc",
        fontWeight: "font-weight: 700",
        borderBottom: "2px solid #7dd3fc",
    };
    const headerstyle = "flex justify-between align-center py-4 sticky top-0 transition-colors px-3 md:px-9 z-10"
    const [activeNav, setActiveNav] = useState(false)

    useEffect(() => {
        setActiveNav(false)
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            window.scrollTo(0, 0);
            setProjects(ProjectDataList.data);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);
    const handleNavToggle = () => {
        setActiveNav(false);
    };
    const [showNewModal, setShowNewModal] = useState(false);

    const toggleDetailsModal = () => {
        setShowNewModal(!showNewModal)
        document.body.classList.toggle('modal-open');
    }

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
                            <Button variant="ghost" size="icon" onClick={() => {
                                setActiveNav(!activeNav)
                            }}>
                                <LR.Menu />
                            </Button>
                        </div>
                        <div className='flex gap-4 hidden md:inline-flex items-center cursor-pointer'>
                            <Link
                                to="home"
                                activeStyle={mystyle}
                                spy={true}
                                smooth={false}
                                offset={-66}
                            // duration={500}
                            >
                                Home
                            </Link>
                            <Link
                                to="about"
                                activeStyle={mystyle}
                                spy={true}
                                smooth={false}
                                offset={-66}
                            // duration={500}
                            >
                                About
                            </Link>
                            <Link
                                to="project"
                                activeStyle={mystyle}
                                spy={true}
                                smooth={false}
                                offset={-66}
                            // duration={500}
                            >
                                Projects
                            </Link>
                            {/* <Link
                                to="contact"
                                activeStyle={mystyle}
                                spy={true}
                                smooth={false}
                                offset={-66}
                            >
                                Contact
                            </Link> */}
                        </div>
                    </div>
                    <div className='snap-mandatory snap-x px-4 md:px-9 '>
                        <section className="section items-center" id="home">
                            <HeroSection />
                        </section>
                        <section className="section mt-4" id="about">
                            <About />
                        </section>
                        <section className="section mt-4" id="project">
                            <Projects showDetails={toggleDetailsModal} />
                        </section>
                        {/* <section className="section mt-4" id="contact">
                            <Contact />
                        </section> */}
                    </div >
                    <div className={activeNav ? 'fixed top-16 navbar' : 'fixed top-16 navbar-inactive'}>
                        <Modal activeNav={activeNav} onClick={handleNavToggle} />
                    </div>
                </div>
                {showNewModal &&
                    < DetailsModal showDetails={toggleDetailsModal} />
                }
            </div>
            <ScrollToTheTop />
        </>
    );
}

export default App;
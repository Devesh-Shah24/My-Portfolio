import React from 'react';
import profileImg from "../../assets/profile.jpg";
import './styles.scss';
import { Animate } from "react-simple-animate"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { SiFreelancer } from "react-icons/si";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Resume from '../resume/Devesh_Kumar_Resume.pdf';


const Home = () => {
    return (
        <div className="hero">
            <Animate play duration={1}
                delay={0.3}
                start={{ transform: "translateX(-800px)", opacity: 0 }}
                end={{ transform: "translatex(0px)", opacity: 1 }}>
                <div className="hero_text">
                    <h3>Hi, my name is</h3>
                    <h1>Devesh Kumar</h1>
                    <p>
                        "Learning. Building. Growing. Always forward".
                        I have built several industry-grade projects from scratch, showcasing strong skills in front-end development, responsive design, and modern web technologies like React, JavaScript, HTML, SCSS, and more. As a B.Tech Computer Science student, I’ve gained hands-on experience through real-world projects and continue to sharpen my skills daily. I'm currently exploring full-stack development and aiming to master MERN stacks with Django to become a versatile developer ready for any challenge.
                    </p>

                    <div className="hero_stats">
                        <div className="hero_stat-box">
                            <h2>05+</h2>
                            <span>VERIFIED SKILLS</span>
                        </div>
                        <div className="hero_stat-box">
                            <h2>10+</h2>
                            <span>PROFESSIONAL PROJECTS</span>
                        </div>
                        <div className="hero_stat-box">
                            <h2>100+</h2>
                            <span>DSA PROBLEMS SOLVED</span>
                        </div>
                    </div>
                    <Animate />
                    <div className="header-actions">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/deveshkumar1" target="_blank" rel="noopener noreferrer">
                                {<FaLinkedin size={35} />}
                            </a>
                            <a href="https://github.com/Devesh-Shah24" target="_blank" rel="noopener noreferrer">
                                {<FaGithub size={35} />}
                            </a>
                            <a href="https://www.instagram.com/mr.devesh__shah" target="_blank" rel="noopener noreferrer">
                                {<FaInstagram size={35} />}
                            </a>
                            <a href="https://www.freelancer.com/u/deveshk03?sb=t" target="_blank" rel="noopener noreferrer">
                                {<SiFreelancer size={35} />}
                            </a>
                        </div>
                        <div className='button'>
                            {/* <a href="/path-to-cv.pdf" className="nav-btn" download>
                                Download CV
                            </a> */}
                            <a href={Resume} className="nav-btn" download="Devesh_Kumar_Resume.pdf">
                                Download CV
                            </a>
                            <Link to="/contact" className="nav-btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

            </Animate>


            <Animate play duration={1}
                delay={0.5}
                start={{ transform: "translateX(500px)", opacity: 0, scale: 0.8 }}
                end={{ transform: "translatex(0px)", opacity: 1, scale: 1 }}>
                <div className="hero_image">
                    <img src={profileImg} alt="Profile" />
                </div>
            </Animate>



        </div>
    );
};

export default Home;

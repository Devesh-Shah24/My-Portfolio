import React from "react";
import './styles.scss'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate"
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';
import { FaDev } from "react-icons/fa6";

const jobSummary = ' I am Devesh Kumar, a passionate Frontend Developer skilled in JavaScript, React.js, HTML, and CSS. I specialize in building dynamic, high-performance web applications with seamless user experiences. Currently, I am learning the MERN stack and Python to transition into Full Stack Development. As a lifelong learner, I thrive on solving complex problems, optimizing performance, and staying updated with the latest technologies. I am seeking an internship to apply my skills in a real-world setting, gain industry experience, and grow as a developer. My goal is to build innovative, scalable solutions that impact businesses and users positively.'

const About = () => {

    const personalDetails = [
        {
            label: "Name",
            value: "Devesh Kumar",
        },
        {
            label: "Age",
            value: "22",
        },
        {
            label: "Address",
            value: "India",
        },
        {
            label: "Email",
            value: "deveshmuz2020@gmail.com",
        },
        {
            label: "Contact No",
            value: "+91 6202538086",
        },
    ];

    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
            <div className="about_content">
                <div className="about_content_personalWrapper">
                    <Animate play duration={1.5}
                        delay={0.5}
                        start={{ transform: "translatex(-900px)", }}
                        end={{ transform: "translatex(0px)", }}>
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate play duration={1.5}
                        delay={1}
                        start={{ transform: "translatex(500px)", }}
                        end={{ transform: "translatex(0px)", }}>
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about_content_servicesWrapper">
                    <Animate play duration={1.5}
                        delay={1.5}
                        start={{ transform: "translatex(600px)", }}
                        end={{ transform: "translatex(0px)", }}>
                        <div className="about_content_servicesWrapper_innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}
export default About;
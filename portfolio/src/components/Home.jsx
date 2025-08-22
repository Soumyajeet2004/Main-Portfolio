import React, { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';
import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';

import ScrollReveal from 'scrollreveal';
import '../styles/Home.css';
import profileimage1 from '../assets/20240706_133317.png';
import profileimage2 from '../assets/WhatsApp Image 2025-08-17 at 11.35.49_269f2353.jpg';
import estate from '../assets/types-of-real-estate-overview-scaled.jpg';
import calculator from '../assets/calculator-L.png';
import django from '../assets/1_YZVjP-cfLKZplmdzHRDJqQ.png';
import amazon from '../assets/Amazonclone.png';
import rock from '../assets/rock_paper_scissors__2x.png';
import tic from '../assets/7.webp';
const Home = () => {
    const typedRef = useRef(null);
    useEffect(() => {
        // ✅ ScrollReveal
        ScrollReveal({
            distance: "70px",
            duration: 2000,
            delay: 200,
        });

        ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
        ScrollReveal().reveal(".home-img, .service-container, .portfolio-box", {
            origin: "bottom",
        });
        ScrollReveal().reveal(".home, .about-content, .services-box, .contact form", {
            origin: "right",
        });
        ScrollReveal().reveal(".about-img", { origin: "left" });

        // ✅ Typed.js
        typedRef.current = new Typed(".all-texts", {
            strings: [
                'Full-Stack Web Developer',
                'Passionate Coder',
                'Engineering Student'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 900,
            loop: true,
        });

        // ✅ Cleanup
        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, []);

    return (<>
        {/* --------------------- HEADER --------------------- */}
        <header className="header">
            <a href="#home" className="logo">My Portfolio</a>
            <i className="fa-solid fa-bars" id="menu-icon"></i>
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#exp">Experiences</a>
                <a href="#services">Education & Certifications</a>
                <a href="#portfolio">Project</a>
            </nav>
        </header>

        {/* --------------------- HOME --------------------- */}
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello !</h3>
                <h1>I'm Soumyajeet Saha</h1>
                <h3><span className="all-texts"></span></h3>
                <p className="p">
                    I am an enthusiastic engineering student deeply passionate about coding and software development.
                    With a keen eye for detail and a love for problem-solving, I enjoy delving into complex algorithms
                    and creating elegant solutions.
                </p>
                <div className="social-media">
                    <a href="https://www.facebook.com/profile.php?id=100074568897600&mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/itz_soumyajeet2004?igsh=YjIzbzhicTA5MnV6"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/Soumyajeet2004"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/soumyajeet-saha-2b281125a"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <a href="https://drive.google.com/file/d/1p63Ep5lU7rW1cRMhJhgE1OS8q3TwEo56/view?usp=sharing" className="btn">Download Resume</a>
            </div>
            <div className="home-img">
                <img src={profileimage1} alt="" />
            </div>
        </section>

        {/* --------------------- ABOUT --------------------- */}
        <section className="about" id="about">
            <div className="about-img">
                <img src={profileimage2} alt="" />
                <div className="skill-mf">
                    <p className="title-s">Programming Skills</p>

                    <span className="pull-right">Web Development</span> <span className="pull-rights">80%</span>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: "80%" }}></div>
                    </div>

                    <span className="pull-right">Data Structure and Algorithm</span> <span className="pull-rights">85%</span>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: "85%" }}></div>
                    </div>

                    <span className="pull-right">Java</span> <span className="pull-rights">90%</span>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: "90%" }}></div>
                    </div>

                    <span className="pull-right">JavaScript</span> <span className="pull-rights">85%</span>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: "85%" }}></div>
                    </div>

                    <span className="pull-right">C</span> <span className="pull-rights">95%</span>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: "95%" }}></div>
                    </div>
                </div>
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <p>
                    I am an aspiring engineering student with a deep passion for coding, particularly in frontend development.
                    My ambition is to become a successful software engineer known for crafting intuitive user interfaces and robust applications.
                    Proficient in Java programming, I thrive on team-based problem-solving, leveraging collaborative efforts to tackle complex challenges.
                    With a focus on continuous improvement, I aim to innovate and deliver impactful solutions in the dynamic realm of software development.
                </p>

                <ul className="ul">
                    <li className="uls"><p>Address :<span> Kolkata , West Bengal , India</span></p></li>
                    <li className="uls"><p>Education :<span> B.Tech In Computer Science Engineering</span></p></li>
                    <li className="uls"><p>Language :<span> Bengali , English</span></p></li>
                    <li className="uls"><p>Interest :<span> Traveling, Travel Photography</span></p></li>
                    <li className="uls"><p>Sports :<span> Cricket , Football</span></p></li>
                </ul>

                <a href="https://www.linkedin.com/in/soumyajeet-saha-2b281125a" className="btn">LinkedIn Profile</a>
            </div>
        </section>

        {/* --------------------- Experiences --------------------- */}<section className="services" id="exp">
            <h2 className="heading">My <span>Professional experiences</span></h2>
            <div className="row">
                <h1 className="big-4">Internships</h1>
                <div className="underline"></div>
            </div>

            <div className="services-container">
                <div className="services-box bte">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <h3>Full Stack Development Intern</h3>
                    <div className="edu">
                        <p><strong>Company:</strong> Ardent Computech Pvt Ltd</p>
                        <p><strong>Duration:</strong> Apr 2025 – Aug 2025</p>
                        <p><strong>Location:</strong> Kolkata, India</p>
                        <ul>
                            <li>Completed a structured, hands-on training program focused on <strong>cloud-based full-stack development (MERN stack)</strong>.</li>
                            <li>Developed and deployed scalable web applications with <strong>AI/ML integration</strong> and <strong>RESTful APIs</strong>.</li>
                        </ul>
                    </div>
                    <a href="https://drive.google.com/file/d/1qmxoYLqhzqIg6JTX31GeCyWecISJPQV7/view?usp=sharing" className="btn">Read More</a>
                </div>
            </div>
        </section>

        {/* --------------------- SERVICES --------------------- */}
        <section className="services" id="services">
            <h2 className="heading">My <span>Academic Background & Certifications</span></h2>

            <div className="row">
                <h1 className="big-4">Education</h1>
                <div className="underline"></div>
            </div>

            <div className="services-container">
                <div className="services-box bte">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <h3>B.Tech In Computer Science Engineering</h3>
                    <div className="edu">
                        <p>University : MAKAUT UNIVERSITY</p>
                        <p>College : Dr. Sudhir Chandra Sur Institute Of Technology And Sports Complex</p>
                        <p>Appearing (2022-2026)</p>
                        <p>CGPA : 7.9</p>
                    </div>
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-school"></i>
                    <h3>Higher Secondary Education</h3>
                    <div className="edu">
                        <p>Board : WBCHSE</p>
                        <p>School : The Scottish Church Collegiate School</p>
                        <p>Passing Year : 2022</p>
                        <p>Percentage : 80.8%</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1dN3KGxuVozfrARGEsS4bOx0dTon3lpBB/view?usp=drivesdk" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-school"></i>
                    <h3>Secondary Education</h3>
                    <div className="edu">
                        <p>Board : WBBSE</p>
                        <p>School : The Scottish Church Collegiate School</p>
                        <p>Passing Year : 2020</p>
                        <p>Percentage : 90.85%</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1dIGE6827mAHgFzK30_s1z9TvcXDrGXMd/view?usp=drivesdk" className="btn">Read More</a>
                </div>
            </div>
        </section>
        <section className="services" id="services">
            <div className="row">
                <h1 className="big-4">Certifications</h1>
                <div className="underline"></div>
            </div>

            <div className="certificate-container">
                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>Full Stack development Internship</h3>
                    <div className="edu">
                        <p>Issuing Organization : ARDENT COMPUTECH PVT LTD</p>
                        <p>Duration : April 2025-August 2025</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1qmxoYLqhzqIg6JTX31GeCyWecISJPQV7/view?usp=sharing" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>MERN Stack Development</h3>
                    <div className="edu">
                        <p>Issuing Organization : ARDENT COMPUTECH PVT LTD</p>
                        <p>Issued : March 2025</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1xRyGM2A4XjfHrZ8XKreH7pXhB7-CD-sN/view?usp=sharing" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>Electronic Arts - Software Engineering Job Simulation</h3>
                    <div className="edu">
                        <p>Issuing Organization : FORAGE</p>
                        <p>Issued : April 2025</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1xNj_r5rN5cQzZa32IJEkMQD0kRD3-qTE/view?usp=sharing" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>IBM Certified web Development Fundamentals</h3>
                    <div className="edu">
                        <p>Issuing Organization : IBM</p>
                        <p>Issued : July 2025</p>
                    </div>
                    <a href="https://media.licdn.com/dms/image/v2/D562DAQHeIYWQYGaaJQ/profile-treasury-image-shrink_800_800/B56Zh.amWaHQAY-/0/1754467560138?e=1755964800&v=beta&t=jr3DCmdChkak06ABl4qoL_vQt-or0NUB9a-LO-wq48A" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>Micro-Certification</h3>
                    <div className="edu">
                        <p>Issuing Organization : SERVICENOW</p>
                        <p>Issued : April 2025</p>
                    </div>
                    <a href="https://media.licdn.com/dms/image/v2/D562DAQHTsC-kKAMTkg/profile-treasury-image-shrink_800_800/B56ZYT.LYUGsAc" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>Python With Django Training</h3>
                    <div className="edu">
                        <p>Issuing Organization : ARDENT COMPUTECH PVT LTD</p>
                        <p>Issued : March 2024</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1ZlckCwNfGfqxqcipuQ-SUT2aJ0enjhH2/view?usp=drivesdk" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>Crash Course On Python</h3>
                    <div className="edu">
                        <p>Issuing Organization : COURSERA</p>
                        <p>Issued : May 2024</p>
                    </div>
                    <a href="https://coursera.org/share/91aeeafaeec6a84999944cd8d5c40618" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>What is Data Science</h3>
                    <div className="edu">
                        <p>Issuing Organization : COURSERA</p>
                        <p>Issued : Nov 2023</p>
                    </div>
                    <a href="https://coursera.org/share/ae32b7d3434bda6617ea52ec99b51eaf" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>Google Cloud Computing Fundamentals</h3>
                    <div className="edu">
                        <p>Issuing Organization : GDSC</p>
                        <p>Issued : Dec 2023</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1ZicY5B49zjvDcVOt3WWPJ2urIpKAZ8ZE/view?usp=drivesdk" className="btn">Read More</a>
                </div>

                <div className="services-box">
                    <i className="fa-solid fa-stamp"></i>
                    <h3>Google Cloud Skill Boost Certificates</h3>
                    <div className="edu">
                        <p>Issuing Organization : GDSC</p>
                        <p>Issued : Sep 2023</p>
                    </div>
                    <a href="https://www.cloudskillsboost.google/public_profiles/767ffd36-9cda-45ad-9809-f14486a1c196" className="btn">Read More</a>
                </div>
            </div>
        </section>

        {/* --------------------- PORTFOLIO --------------------- */}
        <section className="portfolio" id="portfolio">
            <h2 className="heading">My Latest <span>Projects</span></h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={estate} alt="" />
                    <div className="portfolio-layer">
                        <h3>Real Estate Website</h3>
                        <p>Built a full-featured Real Estate Website using the MERN stack (MongoDB, Express.js, React, Node.js).</p>
                        <a href="http://main-real-estate-frontend.vercel.app"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={calculator} alt="" />
                    <div className="portfolio-layer">
                        <h3>Simple Calculator</h3>
                        <p>A Responsive Design Of Simple Calculator Using HTML , CSS & JS.</p>
                        <a href="https://github.com/Soumyajeet2004/Simple-Calculator"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={django} alt="" />
                    <div className="portfolio-layer">
                        <h3>Login System Using Django Framework</h3>
                        <p>A Simple Responsive Design Of Login System Using Django Framework.</p>
                        <a href="https://github.com/Soumyajeet2004/Django_Login-System"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={amazon} alt="" />
                    <div className="portfolio-layer">
                        <h3>Amazon Website Clone</h3>
                        <p>Amazon website clone project using HTML & CSS.</p>
                        <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={rock} alt="" />
                    <div className="portfolio-layer">
                        <h3>Rock-Paper-Scissors Game</h3>
                        <p>A Responsive Rock-Paper-Scissors Game Using HTML , CSS & JS.</p>
                        <a href="https://github.com/Soumyajeet2004/Rock-Paper-Scissors-Game"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={tic} alt="" />
                    <div className="portfolio-layer">
                        <h3>Tic-Tac-Toe Game</h3>
                        <p>A Responsive Tic-Tac-Toe Game Using HTML , CSS & JS.</p>
                        <a href="https://github.com/Soumyajeet2004/Tic-Tac-Toe-Game"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <section className="thankyou-section" id="thankyou">
            <div className="thankyou-container">
                <h2 className="thankyou-title">Thank You for Visiting!</h2>
                <p className="thankyou-text">
                    I appreciate your time and interest in exploring my portfolio.
                    Feel free to connect with me on LinkedIn, GitHub, or just say hello. 🚀
                </p>
                <div className="thankyou-links">
                    <a href="https://github.com/Soumyajeet2004
                    " target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/soumyajeet-saha-2b281125a" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://drive.google.com/file/d/1p63Ep5lU7rW1cRMhJhgE1OS8q3TwEo56/view?usp=sharing" download>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>

        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2024 By Soumyajeet Saha | All Rights Reserved .</p>
            </div>
        </footer>
    </>
    )
};

export default Home;

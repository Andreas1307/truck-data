import React from "react";
import { Link } from "react-router-dom"
import "../App.css";
import BackButton from "../components/backButton";

const About = () => {
    return (
        <div className="aboutPage">
            <BackButton />
            <div className="aboutHero">
                <div className="heroContent">
                    <h1>Welcome to TruckData</h1>
                    <p>
                        Your ultimate destination for all truck-related information. We’re
                        here to empower enthusiasts and professionals alike with the most
                        reliable data and insights in the trucking world.
                    </p>
                    <button className="ctaButton"><Link to="/trucks">Explore Our Database</Link></button>
                </div>
            </div>

            {/* Mission, Vision, Values Section */}
            <div className="aboutSection">
                <div className="aboutCard">
                    <img src="./img/dafXFseries5.png" alt="Mission" />
                    <h3>Our Mission</h3>
                    <p>
                        To provide the most accurate and reliable truck specifications to
                        empower businesses and individuals to make informed decisions.
                    </p>
                </div>
                <div className="aboutCard">
                    <img src="./img/volvoFHseries4.png" alt="Vision" />
                    <h3>Our Vision</h3>
                    <p>
                        To become the go-to global platform for truck enthusiasts and
                        professionals by offering unparalleled insights and resources.
                    </p>
                </div>
                <div className="aboutCard">
                    <img src="./img/dafXFseries6.png" alt="Values" />
                    <h3>Our Values</h3>
                    <p>
                        Integrity, Innovation, and Excellence. These are the core principles
                        that guide our journey every single day.
                    </p>
                </div>
            </div>

            {/* Meet the Team Section */}
            <div className="teamSection">
                <h2>Meet Our Team</h2>
                <p>
                    Behind TruckData is a passionate team of automotive experts, data
                    analysts, and tech enthusiasts committed to delivering excellence.
                </p>
                <div className="teamGrid">
                    <div className="teamCard">
                        <img src="./img/team1.png" alt="Team Member" />
                        <h3>John Doe</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="teamCard">
                        <img src="./img/team2.png" alt="Team Member" />
                        <h3>Jane Smith</h3>
                        <p>Data Analyst</p>
                    </div>
                    <div className="teamCard">
                        <img src="./img/team3.png" alt="Team Member" />
                        <h3>Michael Brown</h3>
                        <p>Lead Engineer</p>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="statsSection">
                <h2>Our Achievements</h2>
                <div className="statsGrid">
                    <div className="statCard">
                        <h3>10,000+</h3>
                        <p>Trucks Cataloged</p>
                    </div>
                    <div className="statCard">
                        <h3>50+</h3>
                        <p>Countries Reached</p>
                    </div>
                    <div className="statCard">
                        <h3>1M+</h3>
                        <p>Monthly Users</p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="aboutFooter">
                <h2>Ready to Explore the World of Trucks?</h2>
                <button className="ctaButton"><Link to="/trucks/compare">Start Now</Link></button>
            </div>
        </div>
    );
};

export default About;

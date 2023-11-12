import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div>
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>
                        Welcome to roommate matching platform, your trusted companion in finding your perfect roommate to share your living space.We are here to ease the process of finding a compatible roommate as seamless and stress free as possible.
                    </p>
                    <p>
                        Our platform  allows you to create a profile and fill out a detailed questionnaire about your self, your habits and your personal preferences. We then employ advanced matching techniques and algorithms to analyze this information to suggest a curated list of potential roommate who shares similar characteristics and behaviours,making it easier than ever to find the perfect roomie.
                    </p>
                    <p>
                        Join us today and experience the future of roommate matching. Say goodbye to random assignments and hello to a more tailoired approach to finding the idle roommate who matches your lifestyle and preferences. Start a journey towards a stress-free, productive and fun life with the right roommate by your side.
                    </p>
                </div>
            </div>
            <div>
                <div className="about-box">
                    <span id="fr">
                        <h3>Our Mission</h3>
                        <p>
                            At roommate matching Patform our mission is to simplify the roommate search process while fostering safe and harmonious living environment. We believe that a great roommate can positively impact your social life.
                        </p>
                    </span>
                    <span>
                        <h3>What sets us apart</h3>
                        <ul>
                            <li>Advanced matching algorithms</li>
                            <li>Safety and Security of user data</li>
                            <li>User-Centric design</li>
                            <li>Enhanced living experience</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default About;

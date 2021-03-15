import React from 'react';
import { Link } from "react-router-dom";
import { HeroContainer } from './HeroElements';

const Hero = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // }
    return (
        <HeroContainer>
            <h1>THIS IS MY HOME PAGE</h1>
            <Link to="/resume">
                <button>Resume</button>
            </Link>
            {/* <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 Seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent> */}
        </HeroContainer>
    )
}

export default Hero
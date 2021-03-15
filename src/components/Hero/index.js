import React from 'react';
import { HeroContainer } from './HeroElements';
import Navbar from "../Navbar";

const Hero = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // }
    return (
        <HeroContainer>
            <Navbar />
            {/* <Sidebar isOpen={isOpen} toggle={toggle} />
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
import React from 'react';
import Button from "./button";

const Hero = () => {
    return (
        <header className='hero'>
            <section className='hero-container'>
                <h1 className="hero-title">You can always be skinnier. Look Better. This quote was made by Patrick Bateman.</h1>
                <h2 className="hero-subtitle">OUASDHFUIOASDJF. DFIJADIOF. ASDAUJSDOI.</h2>
                <h3 className="hero-text">asjfa sdfuhas dfoui hfjIOEJ FIOAdIOEJFIO AdjfioDOJsd fijI ODFJI ODFJI OSFO SIOEJ FIOAdjfi oDOJsd fijIODF JIO DFJIO SFOSjfio DOJsdfijI ODFJIO DFJ IOSF OSDA SDASD</h3>
                <Button content="join">Join</Button>
                <Button content="learn-more">Learn More</Button>
                <Button content="jobs">Jobs</Button>
                
            </section>
        </header>
    )
}

export default Hero;
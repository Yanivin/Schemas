import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Button from "./button";

const Hero = ({ onTheme }) => {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [cookies, setCookie] = useCookies(['user']);

    const handle = () => {
        setCookie('Name', name, { path: '/' });
        setCookie('Password', pwd, { path: '/' });
    };

    return (
        <header className='hero' >
            <section className='hero-container'>
                <h1 className="hero-title">You can always be skinnier. Look Better. This quote was made by Patrick Bateman.</h1>
                <h2 className="hero-subtitle">OUASDHFUIOASDJF. DFIJADIOF. ASDAUJSDOI.</h2>
                <h3 className="hero-text" onClick={onTheme}>asjfa sdfuhas dfoui hfjIOEJ FIOAdIOEJFIO AdjfioDOJsd fijI ODFJI ODFJI OSFO SIOEJ FIOAdjfi oDOJsd fijIODF JIO DFJIO SFOSjfio DOJsdfijI ODFJIO DFJ IOSF OSDA SDASD</h3>
                <Button content="join">Join</Button>
                <Button content="learn-more">Learn More</Button>
                <Button content="jobs">Jobs</Button>
            </section>
            <section className='hero-decor'>
                <div className="atom">
                    <div className="nucleus">
                    </div>
                    <div className="orbit">
                        <div className="electron"></div>
                    </div>
                    <div className="orbit">
                        <div className="electron"></div>
                    </div>
                    <div className="orbit">
                        <div className="electron"></div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Hero;
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../asset/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "A Web Developer", "A Web Designer", "A Frontend Developer"];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [text, setText] = useState('');
    const period = 2000;


    useEffect(() => {
        let  ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)}; 
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Welcome to TOBY'S Space</span>
                        <h1>{`Hello Everyone I'm Toby `}<span className="wrap">{text}</span></h1>
                        <p>I Love building websites  which includes small business sites and rich interactive web apps. I strive to make web and apps a beautiful place. I live in Lagos,Nigeria.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
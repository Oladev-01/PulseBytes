import '../Styles/first-half.css';

const FirstHalf = () => {
    return (
        <div className="first-half">
            <div className="first-half-left">
                <span>PulseBytes</span>
                <p>
                    PulseBytes specializes in digital marketing, website design, and app development. We craft impactful digital experiences that boost user engagement and elevate your brand’s online presence. Our tailored solutions drive measurable results, helping your brand stand out in today’s competitive digital landscape.</p>
            </div>
            <video autoPlay loop muted playsInline>
                <source src="/src/assets/pbytes-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default FirstHalf;

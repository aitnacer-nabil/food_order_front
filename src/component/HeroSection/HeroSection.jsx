import React  from "react";
const backegroundStyle = {
    backgroundImage: "url(assets/img/background.png)"
};
const imageUrl = "assets/img/images/blog/blog-6.jpg";

export default function HeroSection() {
    return (
        <section className="hero-section about gap" style={backegroundStyle}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="300"
                         data-aos-duration="400">
                        <div className="about-text">
                            <h2>Nothing to worry about with Quickeat</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="400"
                         data-aos-duration="500">
                        <div className="about-img">
                            <img alt="man" src={imageUrl} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
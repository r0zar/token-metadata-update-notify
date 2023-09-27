import React from "react";
import Image from "next/image";
import heroImage from "../../assets/img/update-image.png";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div id="aboutmore" className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <Image
                id="aboutimg"
                src={heroImage}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Metadata Update Notification</h3>
              <p className="fst-italic">
                we are passionate about the potential of Web3 technology and the
                limitless possibilities it offers. Our journey began with a
                simple vision: to empower users in the blockchain space by
                providing them with the tools and insights needed to navigate
                this exciting digital frontier confidently.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> As a team of
                  blockchain enthusiasts, we understand the complexities and
                  rapid changes within the ecosystem.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> That is why we have
                  created a platform that puts you in control, offering
                  real-time metadata update notifications for your digital
                  assets.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> With our dedication
                  to innovation and user-centric design, we aim to be your
                  trusted partner on your Web3 adventure.
                </li>
              </ul>
              <p>
                Our mission is to make the Web3 experience
                accessible to everyone. We believe that blockchain technology
                has the power to transform industries, reshape economies, and
                empower individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

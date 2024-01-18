import styled from "styled-components";
import Navbar from "./Navbar";
import React from "react";

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background-color: var(---primarycolor);
  color: white;
  box-shadow: 0px 7px 20px #00000051 !important;
  padding: 0.2%;
  margin-bottom: 20px;
  font-family: system-ui;
`;
const Para = styled.div`
  font-family: system-ui;
  font-weight: 20px;
  font-size: 20px;
  display: flex;
  padding: 10px;
  margin-left: 10px;
`;

const InPara = styled.div`
  font-family: system-ui;
  font-weight: 10px;
  font-size: 15px;
  display: flex;
  padding: 10px;
  margin-left: 20px;
  border-radius: 3px;
  border-left: 3px solid var(---primarycolor);
  margin: 3px;
`;
const Line = styled.div`
  width: 70px;
  height: 6px;
  background-color: var(---primarycolor);
  border-radius: 10px;
  margin-left: 20px;
  margin-bottom: 15px;
`;
const Feature = styled.div`
  font-family: system-ui;
  font-weight: 20px;
  font-size: 18px;
  display: flex;
  padding: 5px;
  margin-left: 10px;
`;

function AboutUs() {
  return (
    <>
      <Navbar />
      <Head>Know About Us & Your Rights</Head>

      <>
        <Para>
          RESERVEDIN helps you know your rights so you can protect yourself from
          any kind of exploitation and abuse in your current or future
          workspace.
        </Para>
        <Line></Line>
        <Feature>We provide you with:-</Feature>
        <InPara>An Exclusive Job Portal</InPara>
        <InPara>Voice Commands for navigating</InPara>
        <InPara>Built In Resume generator</InPara>
        <InPara>Accessibility features to read Blogs</InPara>
        <InPara>
          Information about your Legal rights and Discourses and Legal Remedies
          in case of Abuse & Exploitation{" "}
        </InPara>
        <InPara>
          Explore your legal rights and remedies as an individual with
          disabilities. Learn more about relevant laws and access resources to
          protect yourself from exploitation. For detailed information, visit:
          <br />
        </InPara>
        
  <a
    href="http://www.ccdisabilities.nic.in/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "blue" }} // Set the color to blue
  >
    Office of Chief Commissioner for Persons With Disabilities (PWD)
  </a>{" "}
  <br />
  <a
    href="https://thenationaltrust.gov.in/content/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "blue" }} // Set the color to blue
  >
    National Trust For Social Justice for Persons With Disabilities (PWD)
  </a>
  <section className="text-gray-600 body-font">
    {/* Rest of the component code remains unchanged */}
  </section>
</>


      <div className="container mx-auto mt-8">
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/326n18dT8x4?si=ZA9MhHl06ByrDiES"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMYje72Fyb5LPGwtR9kJw7ykunlQWPAcbA5glo_0vyFm1NpJUTr6KVef_qDqR09q54EQ&usqp=CAU"
                  aria-label="person with image"
                />
                <p className="leading-relaxed">
                Welcome to RESERVEDIN,
 a groundbreaking initiative designed to empower and connect differently-abled individuals with meaningful employment opportunities. We believe in the immense talents, skills, and potential that everyone possesses, regardless of their abilities. Our job portal is a dedicated platform committed to fostering inclusivity, breaking down barriers, and creating a space where employers and job seekers can come together. At RESERVEDIN, we strive to redefine the landscape of employment by promoting diversity and providing a bridge to fulfilling careers. Join us on this journey towards a more inclusive workforce, where every individual's unique abilities are recognized and celebrated. 

                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Vaibhav Gawad
                </h2>
                <p className="text-gray-500">AI/ML and Backend Developer</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCpE-LJIfGebv_V-mTT9EBBaJ5cAVP_T_hKiTvIHcz-tmcnYhMXI7GXSl-hL_4WQttkU&usqp=CAU"
                  aria-label="person with lamp"
                />
                <p className="leading-relaxed">
                Welcome to RESERVEDIN,
 a groundbreaking initiative designed to empower and connect differently-abled individuals with meaningful employment opportunities. We believe in the immense talents, skills, and potential that everyone possesses, regardless of their abilities. Our job portal is a dedicated platform committed to fostering inclusivity, breaking down barriers, and creating a space where employers and job seekers can come together. At RESERVEDIN, we strive to redefine the landscape of employment by promoting diversity and providing a bridge to fulfilling careers. Join us on this journey towards a more inclusive workforce, where every individual's unique abilities are recognized and celebrated. 

                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Sainath Shetty
                </h2>
                <p className="text-gray-500">AI/ML Developer</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjT1-Ab9elldNYnYo9lfY3kIX1BuDoNtT94tfHTQ7UHqZtJU22rJPcLKFIicQTsl36Ss&usqp=CAU"
                  aria-label="person with image"
                />
                <p className="leading-relaxed">
                Welcome to RESERVEDIN,
 a groundbreaking initiative designed to empower and connect differently-abled individuals with meaningful employment opportunities. We believe in the immense talents, skills, and potential that everyone possesses, regardless of their abilities. Our job portal is a dedicated platform committed to fostering inclusivity, breaking down barriers, and creating a space where employers and job seekers can come together. At RESERVEDIN, we strive to redefine the landscape of employment by promoting diversity and providing a bridge to fulfilling careers. Join us on this journey towards a more inclusive workforce, where every individual's unique abilities are recognized and celebrated. 

                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Varun Iyer
                </h2>
                <p className="text-gray-500">Backend Developer</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVaAtc2HMBxAqhjCXGIYtvMlZpYdWQ4LY8DoklwVaJZTf54J_9-04Q0fqW91VsG6Yxnk&usqp=CAU"
                  aria-label="person with lamp"
                />
                <p className="leading-relaxed">
                Welcome to RESERVEDIN,
 a groundbreaking initiative designed to empower and connect differently-abled individuals with meaningful employment opportunities. We believe in the immense talents, skills, and potential that everyone possesses, regardless of their abilities. Our job portal is a dedicated platform committed to fostering inclusivity, breaking down barriers, and creating a space where employers and job seekers can come together. At RESERVEDIN, we strive to redefine the landscape of employment by promoting diversity and providing a bridge to fulfilling careers. Join us on this journey towards a more inclusive workforce, where every individual's unique abilities are recognized and celebrated. 

                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Jason D'souza
                </h2>
                <p className="text-gray-500">UI/UX and Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;

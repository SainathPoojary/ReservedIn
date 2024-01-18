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
          --------- helps you know your rights so you can protect yourself from
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
        >
          Office of Chief Commissioner for Persons With Disabilities (PWD)
        </a>{" "}
        <br />
        <a
          href="https://thenationaltrust.gov.in/content/"
          target="_blank"
          rel="noopener noreferrer"
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
                  src="https://media.istockphoto.com/id/1227303423/photo/3d-illustration-of-smiling-man-with-laptop-and-bulb-over-head-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=K5VmZBgcFK40JJ1QDUJXXkLq7iKOQ6pHltlyqvm8i7w="
                  aria-label="person with image"
                />
                <p className="leading-relaxed">
                  Welcome to --------, a groundbreaking project dedicated to
                  transforming the landscape of employment for individuals with
                  disabilities. At EmpowerJobs, we believe in breaking down
                  barriers and creating equal opportunities for all. Our job
                  portal is more than just a platform; it's a gateway to
                  empowerment, connecting talented individuals with disabilities
                  to a diverse range of professional opportunities.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Vaibhav Gawad
                </h2>
                <p className="text-gray-500">AI/ML and Backend Devloper</p>
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
                  src="https://media.istockphoto.com/id/1227303423/photo/3d-illustration-of-smiling-man-with-laptop-and-bulb-over-head-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=K5VmZBgcFK40JJ1QDUJXXkLq7iKOQ6pHltlyqvm8i7w="
                  aria-label="person with lamp"
                />
                <p className="leading-relaxed">
                  Welcome to --------, a groundbreaking project dedicated to
                  transforming the landscape of employment for individuals with
                  disabilities. At EmpowerJobs, we believe in breaking down
                  barriers and creating equal opportunities for all. Our job
                  portal is more than just a platform; it's a gateway to
                  empowerment, connecting talented individuals with disabilities
                  to a diverse range of professional opportunities.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Sainath Shetty
                </h2>
                <p className="text-gray-500">AI/ML dev</p>
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
                  src="https://media.istockphoto.com/id/1227303423/photo/3d-illustration-of-smiling-man-with-laptop-and-bulb-over-head-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=K5VmZBgcFK40JJ1QDUJXXkLq7iKOQ6pHltlyqvm8i7w="
                  aria-label="person with image"
                />
                <p className="leading-relaxed">
                  Welcome to -------, a groundbreaking project dedicated to
                  transforming the landscape of employment for individuals with
                  disabilities. At EmpowerJobs, we believe in breaking down
                  barriers and creating equal opportunities for all. Our job
                  portal is more than just a platform; it's a gateway to
                  empowerment, connecting talented individuals with disabilities
                  to a diverse range of professional opportunities.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Varun Iyer
                </h2>
                <p className="text-gray-500">Backend dev</p>
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
                  src="https://media.istockphoto.com/id/1227303423/photo/3d-illustration-of-smiling-man-with-laptop-and-bulb-over-head-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=K5VmZBgcFK40JJ1QDUJXXkLq7iKOQ6pHltlyqvm8i7w="
                  aria-label="person with lamp"
                />
                <p className="leading-relaxed">
                  Welcome to --------, a groundbreaking project dedicated to
                  transforming the landscape of employment for individuals with
                  disabilities. At EmpowerJobs, we believe in breaking down
                  barriers and creating equal opportunities for all. Our job
                  portal is more than just a platform; it's a gateway to
                  empowerment, connecting talented individuals with disabilities
                  to a diverse range of professional opportunities.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Jason D'souza
                </h2>
                <p className="text-gray-500">UI/UX dev</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;

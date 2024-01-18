import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import mentor1 from "./images/mentor1.jpg";
import mentor2 from "./images/mentor2.png";
import "./Mentorship.css";

function Mentorship() {
  const mentors = [
    {
      id: 1,
      name: "Jason D",
      expertise: "Web Development",
      description: "Passionate about creating responsive and user-friendly websites.",
      email: "mentor1@example.com",
      photo: mentor1,
      calendlyLink: "https://calendly.com/jasondsouzaofficial/30min",
    },
    {
      id: 2,
      name: "Vaibhav G",
      expertise: "Data Science",
      description: "Enthusiastic about data analysis and machine learning applications.",
      email: "mentor2@example.com",
      photo: mentor2,
      calendlyLink: "https://calendly.com/gawadvaibhavv/30min",
    },
    {
      id: 3,
      name: "Sainath P",
      expertise: "UX Design",
      description: "Dedicated to crafting intuitive and visually appealing user experiences.",
      email: "mentor3@example.com",
      photo: "mentor3.jpg",
      calendlyLink: "https://calendly.com/sainathpoojary/30min",
    },
    // Add more mentors as needed
  ];

  const handleSendEmail = (email) => {
    const emailLink = `mailto:${email}?subject=Meeting%20Request&body=Dear%20mentor,%0D%0A%0D%0AI would like to schedule a meeting with you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]`;
    window.location.href = emailLink;
  };

  const handleScheduleMeet = (mentor) => {
    const calendlyLink = mentor.calendlyLink;
    window.open(calendlyLink, "_blank");
  };

  const handleMeet = () => {
    const meetNewLink = "https://meet.new";
    window.open(meetNewLink, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center h-[76vh]">
        <div className="flex flex-wrap justify-center items-center">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="mentor-card p-4 m-4 border border-gray-300 rounded-md custom-theme" // Add custom-theme class
              role="group"
              aria-labelledby={`mentor-${mentor.id}`}
            >
              <img
                src={mentor.photo}
                alt={`${mentor.name}'s photo`}
                className="w-20 h-20 rounded-full mb-2"
              />
              <div>
                <p id={`mentor-${mentor.id}`} className="text-lg font-semibold">
                  {mentor.name}
                </p>
                <p className="text-sm text-gray-600 mb-2">{mentor.expertise}</p>
                <p className="text-sm">{mentor.description}</p>
              </div>
              <div className="flex mt-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => handleSendEmail(mentor.email)}
                >
                  Email
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={handleMeet}
                >
                  Meet
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleScheduleMeet(mentor)}
                >
                  Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mentorship;

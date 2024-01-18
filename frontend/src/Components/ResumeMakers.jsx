// import logo from './logo.svg';
// import "../App.css";
import "./Resume.css";
import { FaPhone } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
// import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";
// import TextToSpeech from './TextToSpeech';
import Speech from "speak-tts";
import Navbar from "./Navbar";
import { jsPDF } from "jspdf";

// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import b_d from './images/b_d.png';
// import d_d from './images/d_d.jpg';
// import b_i from './images/b_i.png';
// import m_c from './images/m_c.png';
// import p_m from './images/p_m.png';
// import c_s from './images/c_s.png';
// import home1 from './images/home1.jpg';
// import home3 from './images/home3.jpg';
// import home4 from './images/home4.jpg';
const SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;

const recognition = new SpeechRecognition();
// const recognitionList = new SpeechGrammarList()

recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// function Navbar()
// {
//     return(
//         <nav className="navbar">
//             {/* <img className="logo" src="simple.jpg" width="70px" alt="logo"></img> */}
//             <div className="name">Normal.</div>
//             <ul className="nav-menu">
//             <li className="nav-item"><a href="#jobs">Jobs</a></li>
//             <li className="nav-item"><a href="#companies">Companies</a></li>
//             <li className="nav-item"><a href="#aboutus">About Us</a></li>
//             <li className="nav-item"><a href="#contact">Contacts</a></li>

//             </ul>
//             <button className="nav-btn">Sign in</button>

//         </nav>

//     )
// }

function ResumeMaker() {
  const [uname, setName] = useState("");
  const [qual, setQual] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [achieves, setAchieves] = useState("");
  const [interests, setInterests] = useState("");
  const [disability, setDisabilities] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [value, setValue] = useState("");

  let status = 0;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function mic(field) {
    if (status == 1) {
      status = 0;
      recognition.stop();
    }

    //delay(10000);
    recognition.start();
    status = 1;
    recognition.onresult = (event) => {
      status = 0;
      let speak = "What is your " + field;
      //handle result in here
      var word = event.results[0][0].transcript;
      switch (field) {
        case "name":
          //  if (word != speak) {
          setName(word);
          //  }
          break;
        case "qualification":
          setQual(word);
          break;
        case "hobby":
          setHobbies(word);
          break;
        case "achievements":
          setAchieves(word);
          break;
        case "interest":
          setInterests(word);
          break;
        case "disability type":
          setDisabilities(word);
          break;
        case "email id":
          setEmail(word);
          break;
        case "contact number":
          setContact(word);
          break;
        default:
          return null;
      }
      recognition.stop();
    };

    recognition.onspeechend = (event) => {
      status = 0;
      recognition.stop();
    };
  }

  async function start_mic(field) {
    // var fields = [
    //   "name",
    //   "qualification",
    //   "hobby",
    //   "achievements",
    //   "interest",
    //   "disability type",
    //   "email id",
    //   "contact number",
    // ];
    // for (let field of fields) {
    let speak = "What is your " + field + "?";
    var msg = new SpeechSynthesisUtterance();

    msg.text = speak;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
    // window.speechSynthesis.cancel();
    await delay(2000);
    mic(field);
  }
  //}

  // useEffect(() => {
  //   delay(3000).then(() => {
  //     start_mic();
  //   });
  // }, []);

  const resume_preview_ref = useRef();

  const handleGeneratePDF = (event) => {
    event.preventDefault();
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
    const htmlContent = resume_preview_ref.current.innerHTML;
    doc.html(htmlContent, {
      callback: function (doc) {
        doc.save("resume.pdf");
      },
      x: 100,
      y: 100,

      windowWidth: 100,
      windowHeight: 100,
    });
  };
  return (
    <div className="flex justify-center  ">
      <div className="rounded  shadow-lg p-20 text-2xl">
        <p className="text-2xl font-bold text-center space-x-5">
          Create your resume here
        </p>
        <div className="  flex justify-between">
          <div id="input_fields_container" className="space-y-6 space-x-2">
            <form>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <h3 className="input_labels">Name</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="first_name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onFocus={() => start_mic("name")}
                    value={uname}
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="input_labels">Qualifications</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="last_name"
                    onChange={(e) => {
                      setQual(e.target.value);
                    }}
                    onFocus={() => start_mic("qualification")}
                    value={qual}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2">
                  <h3 className="input_labels">Hobbies</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="first_name"
                    onChange={(e) => {
                      setHobbies(e.target.value);
                    }}
                    onFocus={() => start_mic("hobby")}
                    value={hobbies}
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="input_labels">Achievements</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="last_name"
                    onChange={(e) => {
                      setAchieves(e.target.value);
                    }}
                    onFocus={() => start_mic("achievements")}
                    value={achieves}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2">
                  <h3 className="input_labels">Interested in</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="first_name"
                    onChange={(e) => {
                      setInterests(e.target.value);
                    }}
                    onFocus={() => start_mic("interest")}
                    value={interests}
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="input_labels">Disability Type</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="last_name"
                    onChange={(e) => {
                      setDisabilities(e.target.value);
                    }}
                    onFocus={() => start_mic("disability type")}
                    value={disability}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2">
                  <h3 className="input_labels">Email</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="first_name"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onFocus={() => start_mic("email id")}
                    value={email}
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="input_labels">Contact No</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="last_name"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    onFocus={() => start_mic("contact number")}
                    value={contact}
                  />
                </div>
              </div>

              <div className="flex justify-center space-x-5">
                <input
                  type="submit"
                  className="bg-blue-600 p-1.5 text-white rounded-md ml-1 hover:bg-blue-700"
                  id="submit_btn"
                ></input>
                <button
                  className="bg-blue-600 p-1.5 text-white rounded-md ml-1 hover:bg-blue-700"
                  onClick={handleGeneratePDF}
                >
                  Generate PDF
                </button>
              </div>
            </form>
          </div>

          <div
            id="preview_container flex justify-center  max-w-full p-10 space-x-20"
            ref={resume_preview_ref}
          >
            <h1 className="text-center text-2xl bg-blue-600 rounded-sm text-white">
              {uname}
            </h1>
            <div id="details_div">
              <p>Qualifications: {qual}</p>
              <br />
              <p>Hobbies: {hobbies}</p>
              <br />
              <p>Achievements: {achieves}</p>
              <br />
              <p>Interested in: {interests}</p>
              <br />
              <p>Disability Type: {disability}</p>
              <br />
              <p>Email: {email}</p>
              <br />
              <p>Contact No: {contact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeMakers() {
  return (
    <div>
      <Navbar />
      <ResumeMaker />
    </div>
  );
}
export default ResumeMakers;
// import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const App = () => {
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button onClick={SpeechRecognition.startListening}>Start</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
//       <p>{transcript}</p>
//     </div>
//   );
// };
// export default App;

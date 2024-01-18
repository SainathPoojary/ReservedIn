import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Template2(props) {
  const {
    uname,
    project,
    prodetails,
    achieves,
    contact,
    email,
    hobbies,
    disability,
    interests,
    qual,
    resume_preview_ref,
  } = props;

  const cardRef = useRef(null);

  const generatePdf = () => {
    if (!cardRef.current) {
      return;
    }

    html2canvas(cardRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("card.pdf");
    });
  };
  return (
    <div>
      <div className="w-screen-100" id="preview_container" ref={cardRef}>
        <button  className="bg-blue-600 p-1.5 text-white rounded-md ml-1'" onClick={generatePdf}>Generate PDF</button>
        <h1 className="text-center text-2xl rounded-sm   hr1">{uname}</h1>

        <h1 className="text-center text-2xl rounded-sm text-white font-light">
          {uname}
        </h1>
        <div>
          <ul className="lists">
            <li>{email}</li>
            <li>{contact}</li>
            <li>{contact}</li>
          </ul>
        </div>

        <p className="title">Project</p>
        <hr />
        <div className="details">
          <p className="dhead">{project}</p>
          <p>
            <pre>{prodetails}</pre>
          </p>
        </div>

        <p className="title">Qualification</p>
        <hr />
        <div className="details">
          <p className="dhead">{qual}</p>
        </div>
        <p className="title">Interested Fields</p>
        <hr />
        <div className="details">
          <p className="dhead">{interests}</p>
        </div>

        <p className="title">Skills</p>
        <hr />
        <div className="details">
          <p className="dhead">{hobbies}</p>
        </div>

        <p className="title">Achievements</p>
        <hr />
        <div className="details">
          <p className="dhead">{achieves}</p>
        </div>

        <p className="title">About Me</p>
        <hr />
        <div className="details">
          <p className="dhead">Disability Type: {disability}</p>
        </div>

        {/* <div id="details_div">
          <p>Qualifications: {qual}</p>
          <p>Hobbies: {hobbies}</p>
          <br />
          <p>Achievements: {achieves}</p>
          <p>Interested in: {interests}</p>
          <br />
          <p>Disability Type: {disability}</p>
          <p>Email: {email}</p>
          <p>Contact No: {contact}</p>
        </div> */}
      </div>

      <div></div>
    </div>
  );
}
export default Template2;

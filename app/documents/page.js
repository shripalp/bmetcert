import React from "react";

export default function Documents() {
  return (
    <div className="flex flex-col">
      <div className=" flex justify-center p-5">
        <h1 className="p-5 text-4xl font-extrabold">Documents</h1>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full justify-center items-center md:w-1/2">
          <h2 className="p-5 text-2xl font-extrabold">Dialysis</h2>
          <div className="flex flex-col p-5">
            <a
              className="text-blue-800 font-bold hover:text-xl"
              href="/dialysis/BMET_cdt Brochure3.pdf"
              target="_blank"
            >
              Promotion Brochure
            </a>
            <a
              className="text-blue-800 font-bold hover:text-xl"
              href="/dialysis/dialysis_history.pdf"
              target="_blank"
            >
              History of Dialysis Certification
            </a>
            <a
              className="text-blue-800 font-bold hover:text-xl"
              href="/certification_program.pdf"
              target="_blank"
            >
              Certification Program
            </a>
            <a
              className="text-blue-800 font-bold hover:text-xl "
              href="/application.docx"
              target="_blank"
            >
              Information and Applicaton form
            </a>
            <a
              className="text-blue-800 font-bold hover:text-xl "
              href="/dialysis/dialysis_study_guide.pdf"
              target="_blank"
            >
              Study Guide
            </a>
            <a
              className="text-blue-800 font-bold hover:text-xl "
              href="/2023_Members_List.pdf"
              target="_blank"
            >
              FAQ
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center md:w-1/2">
          <h2 className="p-5 text-2xl font-extrabold">Biomed</h2>
          <div className="flex flex-col p-5">
            <a
              className="text-blue-800 font-bold hover:text-xl "
              href="/biomed/BMET_cdt Brochure3.pdf"
              target="_blank"
            >
              Promotion Brochure
            </a>
            <a
              className="text-blue-800 font-bold hover:text-xl "
              href="/biomed/history.pdf"
              target="_blank"
            >
              History of BMET Certification
            </a>
            <a
              className="text-blue-800 font-bold hover:text-xl "
              href="/biomed/biomed_program.pdf"
              target="_blank"
            >
              Certification Program
            </a>
            <a
              className="text-blue-800 font-bold hover:text-xl "
              href="/application.docx"
              target="_blank"
            >
              Information and Applicaton form
            </a>
            <a
              className="text-blue-800 font-bold hover:text-xl "
              href="/biomed/study_guide.pdf"
              target="_blank"
            >
              Study Guide
            </a>

            <a
              className="text-blue-800 font-bold hover:text-xl "
              href="/2023_Members_List.pdf"
              target="_blank"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

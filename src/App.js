import React, { useEffect, useState } from "react";

import { generateUniqueKey } from "./helpFunction";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// input form component
import { CommonDetailsInputs } from "./components/CommonInput";
import { ExperienceInput } from "./components/ExperienceInput";
import { EducationInput } from "./components/EducationInput";

// render component
import { HeadTitle } from "./components/HeadTitle";
import { CommonDetails } from "./components/CommonDetails";
import { Skills } from "./components/skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

const App = () => {
  // common detail part
  const [commonDetails, setCommonDetails] = useState({
    userName: "Your Name",
    userNumber: "Your PhoneNumber",
    userEmail: "Your Email",
    userSite: "Your WebSite",
    userSummary: "Little about you",
    userSkills: "",
  });

  const updateCommonDetails = (e) => {
    // dynamic solution
    const targetElement = e.target.id;

    if (commonDetails.hasOwnProperty(targetElement)) {
      setCommonDetails({
        ...commonDetails,
        [targetElement]: e.target.value,
      });
    } else {
      console.log("error in common");
    }

    // more readable but fixed solution

    // switch (e.target.id) {
    //   case "username":
    //     setCommonDetails({
    //       ...commonDetails,
    //       name: e.target.value,
    //     });
    //     break;

    //   case "userNumber":
    //     setCommonDetails({
    //       ...commonDetails,

    //       phoneNumber: e.target.value,
    //     });
    //     break;

    //   case "userEmail":
    //     setCommonDetails({
    //       ...commonDetails,

    //       email: e.target.value,
    //     });
    //     break;

    //   case "userSite":
    //     setCommonDetails({
    //       ...commonDetails,

    //       website: e.target.value,
    //     });
    //     break;

    //   case "userSummary":
    //     setCommonDetails({
    //       ...commonDetails,

    //       summary: e.target.value,
    //     });
    //     break;

    //   case "userSkills":
    //     const splitSkills = e.target.value.split(",");
    //     setCommonDetails({
    //       ...commonDetails,

    //       skills: splitSkills,
    //     });
    //     break;

    //   default:
    //     console.log("error in common");
    // }
  };

  // experience part

  const [inputExp, setInputExp] = useState({}); // input state

  const [exp, setExp] = useState({});

  const addExp = () => {
    const keyGen = generateUniqueKey();
    const newInputExp = {
      [keyGen]: (
        <ExperienceInput
          key={keyGen}
          ids={keyGen}
          handelDelete={deleteExpInput}
          handleChange={updateExp}
        />
      ),
    };

    const newExp = {
      [keyGen]: {
        jobTitle: "Job Title",
        compName: "Company Name",
        startDate: "2023-01-01",
        endDate: "2023-04-01",
        expSummary: "-> Your Experience",
      },
    };

    setInputExp({
      ...inputExp,
      ...newInputExp,
    });

    setExp({
      ...exp,
      ...newExp,
    });
  };

  const updateExp = (e) => {
    const element = e.target.getAttribute("data-ids");

    setExp((prevExp) => ({
      ...prevExp,
      [element]: {
        ...prevExp[element],
        [e.target.className]: e.target.value,
      },
    }));
  };

  const deleteExpInput = (e) => {
    const element = e.target.getAttribute("data-ids");

    setInputExp((prevInputExp) => {
      const newInputExp = { ...prevInputExp };

      delete newInputExp[element];

      return newInputExp;
    });

    setExp((prevExp) => {
      const newExp = { ...prevExp };

      delete newExp[element];

      return newExp;
    });
  };
  //  education part

  const [inputEdu, setInputEdu] = useState({});

  const [edu, setEdu] = useState({});

  const addEdu = () => {
    const keyGen = generateUniqueKey(5);
    const newInputEdu = {
      [keyGen]: (
        <EducationInput
          key={keyGen}
          ids={keyGen}
          handleDelete={deleteEduInput}
          handleChange={updateEdu}
        />
      ),
    };

    const newEdu = {
      [keyGen]: {
        degName: "Degree Name",
        uniName: "Institution Name",
        compYear: "Year of completion",
      },
    };

    setInputEdu({
      ...inputEdu,
      ...newInputEdu,
    });

    setEdu({
      ...edu,
      ...newEdu,
    });
  };

  const updateEdu = (e) => {
    const element = e.target.getAttribute("data-ids");

    setEdu((prevEdu) => ({
      ...prevEdu,
      [element]: {
        ...prevEdu[element],
        [e.target.className]: e.target.value,
      },
    }));
  };

  const deleteEduInput = (e) => {
    const element = e.target.getAttribute("data-ids");

    setInputEdu((prevInputEdu) => {
      const newInputEdu = { ...prevInputEdu };

      delete newInputEdu[element];

      return newInputEdu;
    });

    setEdu((prevEdu) => {
      const newEdu = { ...prevEdu };

      delete newEdu[element];

      return newEdu;
    });
  };

  // for downloading CV

  const downloadCV = () => {
    const cv = document.getElementById("cv-holder");
    html2canvas(cv).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  useEffect(() => {
    addExp();
    addEdu();
  }, []);

  return (
    <div className="App">
      <div className="inputForm">
        <CommonDetailsInputs handleChange={updateCommonDetails} />

        <HeadTitle title="Education Input" />
        {Object.values(inputEdu)}
        <button onClick={addEdu}>Add Education</button>

        <HeadTitle title="Work Experience Input" />
        {Object.values(inputExp)}
        <button onClick={addExp}>Add Work Exp</button>
      </div>
      <div id="cv-holder">
        <div className="commonDetailHolder">
          <CommonDetails details={commonDetails} />
          <Skills skills={commonDetails.userSkills} />
        </div>

        <div className="eduHolder">
          <HeadTitle title="Education" />
          {Object.values(edu).map((e) => {
            return <Education data={e} key={generateUniqueKey(6)} />;
          })}
        </div>

        <div className="expHolder">
          <HeadTitle title="Experience" />
          {Object.values(exp).map((e) => {
            return <Experience data={e} key={generateUniqueKey(6)} />;
          })}
        </div>
      </div>
      <button id="downloadPdfBtn" onClick={downloadCV}>
        DownLoad CV
      </button>
    </div>
  );
};

export default App;

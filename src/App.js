import { Component } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CommonDetailsInputs } from "./components/CommonInput";
import { CommonDetails } from "./components/CommonDetails";
import { ExperienceInput } from "./components/ExperienceInput";
import { EducationInput } from "./components/EducationInput";
import { generateUniqueKey } from "./helpFunction";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/skills";
import { HeadTitle } from "./components/HeadTitle";

class App extends Component {
  constructor() {
    super();

    this.updateCommonDetails = this.updateCommonDetails.bind(this);
    this.addWorkExpInput = this.addWorkExpInput.bind(this);
    this.updateExp = this.updateExp.bind(this);
    this.deleteExpInput = this.deleteExpInput.bind(this);
    this.addEduInput = this.addEduInput.bind(this);
    this.updateEdu = this.updateEdu.bind(this);
    this.deleteEduInput = this.deleteEduInput.bind(this);

    this.state = {
      name: "Your Name",
      phoneNumber: "Your PhoneNumber",
      email: "Your Email",
      website: "Your WebSite",
      summary: "Little about you",
      skills: [],
      // inputExp: [<ExperienceInput key="4dt6" />],
      inExp: {
        "4dt6": (
          <ExperienceInput
            key="4dt6"
            ids={"4dt6"}
            funcD={this.deleteExpInput}
            funcUpdate={this.updateExp}
          />
        ),
      },
      exp: {
        "4dt6": {
          jobTitle: "Job Title",
          compName: "Company Name",
          startDate: "2023-01-01",
          endDate: "2023-04-01",
          expSummary: "-> Your Experience",
        },
      },
      inEdu: {
        gst42: (
          <EducationInput
            key={"gst42"}
            ids={"gst42"}
            funcD={this.deleteEduInput}
            funcUpdate={this.updateEdu}
          />
        ),
      },
      edu: {
        gst42: {
          degName: "Degree Name",
          uniName: "Institution Name",
          compYear: "Year of completion",
        },
      },
    };
  }

  updateCommonDetails(e) {
    switch (e.target.id) {
      case "username":
        this.setState({
          name: e.target.value,
        });
        break;

      case "userNumber":
        this.setState({
          phoneNumber: e.target.value,
        });
        break;

      case "userEmail":
        this.setState({
          email: e.target.value,
        });
        break;

      case "userSite":
        this.setState({
          website: e.target.value,
        });
        break;

      case "userSummary":
        this.setState({
          summary: e.target.value,
        });
        break;

      case "userSkills":
        const splitSkills = e.target.value.split(",");
        this.setState({
          skills: splitSkills,
        });
        break;

      default:
        console.log("error in common");
    }
  }

  addWorkExpInput() {
    const { inExp, exp } = this.state;

    const keyGen = generateUniqueKey();
    const newExpInput = {
      [keyGen]: (
        <ExperienceInput
          key={keyGen}
          ids={keyGen}
          funcD={this.deleteExpInput}
          funcUpdate={this.updateExp}
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
    this.setState({
      inExp: {
        ...inExp,
        ...newExpInput,
      },
      exp: {
        ...exp,
        ...newExp,
      },
    });
  }

  updateExp(e) {
    const { exp } = this.state;
    const element = e.target.getAttribute("data-ids");
    const currentExp = exp[element];

    console.log(element);

    this.setState({
      exp: {
        ...exp,
        [element]: {
          ...currentExp,
          [e.target.className]: e.target.value,
        },
      },
    });
  }

  deleteExpInput(e) {
    const { inExp, exp } = this.state;
    const element = e.target.getAttribute("data-ids");

    const newExpInput = { ...inExp };
    const newExp = { ...exp };
    delete newExpInput[element];
    delete newExp[element];

    this.setState({
      inExp: {
        ...newExpInput,
      },
      exp: {
        ...newExp,
      },
    });
  }

  addEduInput() {
    const { inEdu, edu } = this.state;

    const keyGen = generateUniqueKey(5);
    const newEduInput = {
      [keyGen]: (
        <EducationInput
          key={keyGen}
          ids={keyGen}
          funcD={this.deleteEduInput}
          funcUpdate={this.updateEdu}
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

    this.setState({
      inEdu: {
        ...inEdu,
        ...newEduInput,
      },
      edu: {
        ...edu,
        ...newEdu,
      },
    });
  }

  updateEdu(e) {
    const { edu } = this.state;
    const element = e.target.getAttribute("data-ids");
    const currentEdu = edu[element];

    this.setState({
      edu: {
        ...edu,
        [element]: {
          ...currentEdu,
          [e.target.className]: e.target.value,
        },
      },
    });
  }

  deleteEduInput(e) {
    const { inEdu, edu } = this.state;

    const element = e.target.getAttribute("data-ids");
    const newEduInput = { ...inEdu };
    const newEdu = { ...edu };
    delete newEduInput[element];
    delete newEdu[element];

    console.log("test-branch");

    this.setState({
      inEdu: {
        ...newEduInput,
      },
      edu: {
        ...newEdu,
      },
    });
  }

  downloadCV() {
    const cv = document.getElementById("cv-holder");
    html2canvas(cv).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  }

  render() {
    const { inExp, inEdu, exp, edu } = this.state;

    return (
      <div className="App">
        <div className="inputForm">
          <CommonDetailsInputs func={this.updateCommonDetails} />

          <HeadTitle title="Education Input" />
          {Object.values(inEdu)}
          <button onClick={this.addEduInput}>Add Education</button>

          <HeadTitle title="Work Experience Input" />
          {Object.values(inExp)}
          <button onClick={this.addWorkExpInput}>Add Work Exp</button>
        </div>
        <div id="cv-holder">
          <div className="commonDetailHolder">
            <CommonDetails details={this.state} />
            <Skills skill={this.state.skills} />
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
        <button id="downloadPdfBtn" onClick={this.downloadCV}>
          DownLoad CV
        </button>
      </div>
    );
  }
}

export default App;

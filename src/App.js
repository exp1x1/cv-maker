import { Component } from "react";
import { CommonDetailsInputs } from "./components/CommonInput";
import { CommonDetails } from "./components/CommonDetails";
import { ExperienceInput } from "./components/ExperienceInput";
import { EducationInput } from "./components/EducationInput";
import { generateUniqueKey } from "./helpFunction";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

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
          title: "web Dev",
          compName: "oneShot",
          startDate: "",
          endDate: "",
          expSummary: "my SUM",
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
          degName: "Your Degree Name",
          uniName: "Your uni Name",
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

      case "summary":
        this.setState({
          summary: e.target.value,
        });
        break;

      case "skills":
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
        title: "",
        compName: "",
        startDate: "",
        endDate: "",
        expSummary: "",
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
    const element = e.target.parentNode.getAttribute("id");
    const currentExp = exp[element];

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
    const element = e.target.parentNode.getAttribute("id");

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
        degName: "",
        uniName: "",
        compYear: "",
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
    const element = e.target.parentNode.getAttribute("id");
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

    const element = e.target.parentNode.getAttribute("id");
    const newEduInput = { ...inEdu };
    const newEdu = { ...edu };
    delete newEduInput[element];
    delete newEdu[element];

    this.setState({
      inEdu: {
        ...newEduInput,
      },
      edu: {
        ...newEdu,
      },
    });
  }

  render() {
    const { inExp, inEdu, exp, edu } = this.state;

    return (
      <div className="App">
        <div
          className="inputForm"
          onLoad={() => {
            this.addEduInput();
          }}
        >
          <CommonDetailsInputs func={this.updateCommonDetails} />
          {Object.values(inEdu)}
          <button onClick={this.addEduInput}>Add Education</button>
          {Object.values(inExp)}
          <button onClick={this.addWorkExpInput}>Add Work Exp</button>
        </div>
        <div className="cv-holder">
          <CommonDetails details={this.state} />
          <div className="expHolder">
            {Object.values(exp).map((e) => {
              return <Experience data={e} key={generateUniqueKey(6)} />;
            })}
          </div>
          <div className="eduHolder">
            {Object.values(edu).map((e) => {
              return <Education data={e} key={generateUniqueKey(6)} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

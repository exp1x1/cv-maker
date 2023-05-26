// import { Component } from "react";

// export class CommonDetailsInputs extends Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render() {
//     return (
//       <div onChange={this.props.func} className="commonDetailsInput">
//         <label htmlFor="username">
//           Name
//           <input type="text" id="username" placeholder="Your Name"></input>
//         </label>
//         <label htmlFor="userNumber">
//           PhoneNumber
//           <input
//             type="number"
//             id="userNumber"
//             placeholder="Your Phone Number"
//           ></input>
//         </label>
//         <label htmlFor="userEmail">
//           Email
//           <input
//             type="email"
//             id="userEmail"
//             placeholder="Your Email"
//           ></input>
//         </label>
//         <label htmlFor="userSite">
//           Website
//           <input
//             type="url"
//             id="userSite"
//             placeholder="Your Website"
//           ></input>
//         </label>
//         <label htmlFor="userSummary" className="userSummary">
//           summary
//           <textarea id="userSummary" placeholder="Your summary"></textarea>
//         </label>
//         <label htmlFor="userSkills" className="userSkills">
//           skills<input typeof="text" id="userSkills"></input>
//         </label>
//       </div>
//     );
//   }
// }

export const CommonDetailsInputs = ({ handleChange }) => {
  return (
    <div onChange={handleChange} className="commonDetailsInput">
      <label htmlFor="userName">
        Name
        <input type="text" id="userName" placeholder="Your Name"></input>
      </label>
      <label htmlFor="userNumber">
        PhoneNumber
        <input
          type="number"
          id="userNumber"
          placeholder="Your Phone Number"
        ></input>
      </label>
      <label htmlFor="userEmail">
        Email
        <input
          type="email"
          id="userEmail"
          placeholder="Your Email"
        ></input>
      </label>
      <label htmlFor="userSite">
        Website
        <input type="url" id="userSite" placeholder="Your Website"></input>
      </label>
      <label htmlFor="userSummary" className="userSummary">
        summary
        <textarea id="userSummary" placeholder="Your summary"></textarea>
      </label>
      <label htmlFor="userSkills" className="userSkills">
        skills<input typeof="text" id="userSkills"></input>
      </label>
    </div>
  );
};

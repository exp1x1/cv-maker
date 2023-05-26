// import { Component } from "react";

// export class CommonDetails extends Component {
//   render() {
//     const { name, userNumber, userEmail, website, summary } =
//       this.props.details;
//     return (
//       <div className="commonDetails">
//         <h1>{name}</h1>
//         <div>
//           <span>{userNumber}</span>
//           <span>{userEmail}</span>
//           <span>{website}</span>
//         </div>
//         <span className="title">Summary</span>
//         <pre>{summary}</pre>
//       </div>
//     );
//   }
// }

export const CommonDetails = (props) => {
  const { userName, userNumber, userEmail, userSite, userSummary } =
    props.details;

  return (
    <div className="commonDetails">
      <h1>{userName}</h1>
      <div>
        <span>{userNumber}</span>
        <span>{userEmail}</span>
        <span>{userSite}</span>
      </div>
      <span className="title">Summary</span>
      <pre>{userSummary}</pre>
    </div>
  );
};

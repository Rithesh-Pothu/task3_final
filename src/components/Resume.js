import React from "react";
import data from "../data.json";
import rithesh from "../Rithesh.jpg";
import purush from "../purush.jpg";

function Resume(props) {
  let profile = data.details[props.location.personcard.id];
  console.log(profile);
  var src;
  if (profile.card.image === "rithesh") {
    src = rithesh;
  } else {
    src = purush;
  }
  return (
    <section className="mainsection">
      <section className="section1">
        <img src={src} alt="Rithesh" className="profile" />
        <div className="imginfo">
          <h1>{profile.card.name}</h1>
          <h4>{profile.card.email}</h4>
          <h3>{profile.card.mobile}</h3>
          <hr></hr>
          <h5>Kadapa,AndhraPradesh</h5>
        </div>
      </section>
      <section className="section2">
        <h1 className="heading">Carrer Objective:</h1>
        <h4>{profile.careerobjective.info1}</h4>
        <br></br>
        <h2 className="heading">Educational Qualification</h2>
        <div className="tbl">
          <table border="1">
            <tr>
              <th>Institute</th>
              <th>Degree</th>
              <th>Passoutyear</th>
              <th>Percentage</th>
            </tr>
            <tr>
              <td>{profile.ed1.institute}</td>
              <td>{profile.ed1.degree}</td>
              <td>{profile.ed1.passoutyear}</td>
              <td>{profile.ed1.percentage}</td>
            </tr>
            <tr>
              <td>{profile.ed2.institute}</td>
              <td>{profile.ed2.degree}</td>
              <td>{profile.ed2.passoutyear}</td>
              <td>{profile.ed2.percentage}</td>
            </tr>
            <tr>
              <td>{profile.ed3.institute}</td>
              <td>{profile.ed3.degree}</td>
              <td>{profile.ed3.passoutyear}</td>
              <td>{profile.ed3.percentage}</td>
            </tr>
          </table>
        </div>
        <br></br>
        <h1 className="heading">Technical Skills:</h1>
        <h2>{profile.tech1.title}</h2>
        <ul>
          <li>{profile.tech1.info}</li>
        </ul>
        <h2>{profile.tech2.title}</h2>
        <ul>
          <li>{profile.tech2.info}</li>
        </ul>
        <h2>{profile.tech3.title}</h2>
        <ul>
          <li>{profile.tech3.info}</li>
        </ul>
      </section>
    </section>
  );
}
export default Resume;

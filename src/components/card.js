import React from "react";
import data from "../data.json";
import logo from "../logo.svg";
import logo1 from "../logo.svg";
import { Link } from "react-router-dom";
let Cards = () => {
  let cardsData = data.details;
  console.log(cardsData);
  let images = [logo, logo1];
  return (
    <div className="container">
      <h1 className="text-primary">Select one</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
        className="row"
      >
        {cardsData.map((values, index) => (
          <div id="cards" className="" key={index}>
            <div className="card">
              <img className="card-img-top" src={images[index]} />
              <h1>{values.card.name}</h1>
              <a href={"mailto:" + values.card.email}>
                <h3>{values.card.email}</h3>
              </a>
              <h4>{values.card.mobile}</h4>
              <h4>{values.card.description}</h4>
              <Link
                to={{ pathname: "/resume", personcard: { id: index } }}
                className="btn btn-primary"
              >
                click me
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;

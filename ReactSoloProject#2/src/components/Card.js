import React from "react";

export default function Card(props) {
  return (
    <div>
      <div>
        <img
          // src={require(`../images/${props.item.imageUrl}`)}
          src={process.env.PUBLIC_URL + props.item.imageUrl}
          className="card--image"
        />
      </div>
      <div>
        <img
          // src={require(`../images/location-mark.png`)}
          src={process.env.PUBLIC_URL + "/images/location-mark.png"}
          className="card--locationmark"
        />
        <span className="card--location">{props.item.location}</span>
        <span className="grey">
          <a href={props.item.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </span>
        <h1 className="card--title">{props.item.title}</h1>
        <h3 className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </h3>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

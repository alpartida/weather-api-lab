import React from "react";

function Forecast(props) {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"main-container"}>
          <header className="header-content">{props.temp} F</header>
          <img alt="weather icon" src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;

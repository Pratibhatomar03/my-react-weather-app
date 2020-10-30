import React from "react";
export default function GeneralInformation() {
  return (
    <div className="row">
      <div className="col-6">
        <p>Berlin</p>
        <span> Sunday 12:04</span>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Maximum Temperature: <span> 13°C </span>
          </li>
          <li>
            Minimum Temperature: <span>4°C</span>
          </li>
          <li>
            Feels Like: <span> 7°C </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

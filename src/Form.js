import React from "react";
import "./Form.css";
export default function form() {
  return (
    <div className="form">
      <form>
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter City" className="enterCity" />
          </div>
          <div className="col-6">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

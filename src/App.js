import "./App.css";
import Form from "./Form.js";
import CurrentTemperature from "./CurrentTemperature";
import GeneralInformation from "./GeneralInformation";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <h1>Weather forecast</h1>
          <hr />
          <Form />
          <br />
          <GeneralInformation />
          <CurrentTemperature />
        </div>

        <p>
          Open-source on{" "}
          <a
            href="https://github.com/Pratibhatomar03/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://cocky-archimedes-5c9b92.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify{" "}
          </a>{" "}
          by{" "}
          <a
            href="https://ecstatic-bassi-280461.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pratibha Tomar
          </a>
        </p>
      </div>
    </div>
  );
}

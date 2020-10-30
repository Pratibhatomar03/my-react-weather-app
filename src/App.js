import "./App.css";
import Form from "./Form.js";
import CurrentTemperature from "./CurrentTemperature";
import GeneralInformation from "./GeneralInformation";
function App() {
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
          <a href="https://github.com/Pratibhatomar03/vanilla-weather-application">
            GitHub{" "}
          </a>
          and hosted on{" "}
          <a href="https://sad-babbage-b8d06f.netlify.app"> Netlify </a> by{" "}
          <a href="https://ecstatic-bassi-280461.netlify.app/">
            Pratibha Tomar
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

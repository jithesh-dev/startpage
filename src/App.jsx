import reactLogo from "./assets/react.svg";
import Banner from "./components/Banner";
import "./App.scss";
import InfoTiles from "./components/InfoTiles";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Banner />
        <InfoTiles />
      </div>
    </div>
  );
}

export default App;

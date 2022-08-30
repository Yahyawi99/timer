import { useEffect } from "react";
// CSS
import "./App.css";
// Icons
import { AiTwotoneSetting } from "react-icons/ai";
// Components
import Types from "./components/Types";
import Timer from "./components/Timer";
import Options from "./components/Options";
// Custom hook
import { useGlobalContext } from "./useContext";

function App() {
  const { setIsSettingsOn, isSettingsOn, color, font } = useGlobalContext();
  return (
    <div
      style={{
        "--main-clr": color,
        "--main-font": font,
      }}
      className="App"
    >
      <h1 className="title">promodoro</h1>
      <Types />
      <Timer />

      <div
        className={`option-icon ${isSettingsOn && "hide"}`}
        onClick={() => setIsSettingsOn(true)}
      >
        <AiTwotoneSetting />
      </div>

      <Options />
    </div>
  );
}

export default App;

import React, { useState } from "react";
// Icons
import { MdClose, MdCheck } from "react-icons/md";
// CSS
import "./Options.css";
// Custom hook
import { useGlobalContext } from "../useContext";

const Options = () => {
  const { setIsSettingsOn, isSettingsOn, values, font, color, getUserOptions } =
    useGlobalContext();

  const [time, setTime] = useState(values);
  const [myFont, setMyFont] = useState(font);
  const [myColor, setMyColor] = useState(color);

  return (
    <section className={`settings ${isSettingsOn && "show"}`}>
      <div className="header">
        <h2>Settings</h2>
        <div className="close-icon" onClick={() => setIsSettingsOn(false)}>
          <MdClose />
        </div>
      </div>

      <div className="time-options">
        <div className="input-controle">
          <label htmlFor="default">pomodoro</label>
          <input
            type="number"
            name="default"
            max={90}
            min={20}
            value={time.default}
            onChange={(e) => {
              let num = e.currentTarget.value.replace(/[^0-9]/, "");
              if (parseInt(num) > e.target.max) {
                num = e.target.max;
              }
              setTime({ ...time, default: num });
            }}
          />
        </div>

        <div className="input-controle">
          <label htmlFor="short">short break</label>
          <input
            type="number"
            name="short"
            max={15}
            min={3}
            value={time.short}
            onChange={(e) => {
              let num = e.currentTarget.value.replace(/[^0-9]/, "");
              if (parseInt(num) > e.target.max) {
                num = e.target.max;
              }
              setTime({ ...time, short: num });
            }}
          />
        </div>

        <div className="input-controle">
          <label htmlFor="long">long break</label>
          <input
            type="number"
            name="long"
            max={30}
            min={15}
            value={time.long}
            onChange={(e) => {
              let num = e.currentTarget.value.replace(/[^0-9]/, "");
              if (parseInt(num) > e.target.max) {
                num = e.target.max;
              }
              setTime({ ...time, long: num });
            }}
          />
        </div>
      </div>

      <div className="font-option">
        <h3>FONT</h3>
        <div className="fonts">
          <p
            data-font="monospace"
            className={`${myFont === "monospace" && "clicked"}`}
            onClick={(e) => setMyFont(e.target.dataset.font)}
          >
            Aa
          </p>
          <p
            data-font="cursive"
            className={`${myFont === "cursive" && "clicked"}`}
            onClick={(e) => setMyFont(e.target.dataset.font)}
          >
            Aa
          </p>
          <p
            data-font="serif"
            className={`${myFont === "serif" && "clicked"}`}
            onClick={(e) => setMyFont(e.target.dataset.font)}
          >
            Aa
          </p>
        </div>
      </div>

      <div className="color-option">
        <h3>COLOR</h3>
        <div className="colors">
          <span
            data-color="hsl(0, 82%, 62%)"
            onClick={(e) => setMyColor(e.target.dataset.color)}
          >
            {myColor === "hsl(0, 82%, 62%)" && <MdCheck />}
          </span>
          <span
            data-color="rgb(13, 224, 232)"
            onClick={(e) => setMyColor(e.target.dataset.color)}
          >
            {myColor === "rgb(13, 224, 232)" && <MdCheck />}
          </span>
          <span
            data-color="rgb(163, 33, 255)"
            onClick={(e) => setMyColor(e.target.dataset.color)}
          >
            {myColor === "rgb(163, 33, 255)" && <MdCheck />}
          </span>
        </div>
      </div>

      <button
        className="apply-btn"
        onClick={() => {
          getUserOptions(time, myFont, myColor);
        }}
      >
        Apply
      </button>
    </section>
  );
};

export default Options;

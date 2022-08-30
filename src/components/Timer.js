import React, { useState, useEffect, useRef } from "react";
// Icons
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
// Css
import "./Timer.css";
// Custom hook
import { useGlobalContext } from "../useContext";
// sound
const sound = new Audio("sound/Pomodoro React App.mp3");

// format function
const format = (value) => {
  if (Number(value) < 10) {
    return `0${Number(value)}`;
  } else {
    return value;
  }
};
let myStyles = {};

const Timer = () => {
  const { values, typeChoice, isTimerOn, setIsTimerOn, getDuration } =
    useGlobalContext();
  const [seconds, setSeconds] = useState(format(0));
  const [minutes, setMinutes] = useState(values[typeChoice]);
  const [isSoundOn, setisSoundOn] = useState(true);
  const refProgress = useRef(null);

  useEffect(() => {
    setIsTimerOn(false);
    setSeconds(format(0));
    setMinutes(format(values[typeChoice]));
    refProgress.current.style.strokeDashoffset = 0;
  }, [values[typeChoice]]);
  useEffect(() => {
    setIsTimerOn(false);
    setSeconds(format(0));
    setMinutes(format(values[typeChoice]));
    refProgress.current.style.strokeDashoffset = 0;
  }, [values]);

  useEffect(() => {
    if (isTimerOn) {
      let mySeconds = seconds;
      let myMinutes = minutes;

      let countDown = setInterval(() => {
        if (myMinutes >= 0) {
          if (mySeconds == 0) {
            mySeconds = 60;
            setSeconds(format(mySeconds));
            myMinutes--;
            setMinutes(format(myMinutes));
          }

          if (mySeconds > 0) {
            mySeconds--;
            setSeconds(format(mySeconds));
          }

          if (mySeconds == 0 && myMinutes == 0) {
            if (isSoundOn) {
              sound.play();
            }

            setSeconds(format(0));
            setMinutes(format(values[typeChoice]));

            refProgress.current.style.strokeDashoffset = 0;

            return setIsTimerOn(false);
          }
        }
      }, 1000);

      return () => clearInterval(countDown);
    }
  }, [isTimerOn]);

  // Progress style
  const progress = (min, sec) => {
    let radius = refProgress.current.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    let offset =
      circumference -
      ((getDuration(min, sec) * (100 / getDuration(values[typeChoice], 0))) /
        100) *
        circumference;

    myStyles = {
      strokeDasharray: circumference,
      strokeDashoffset: offset,
    };
  };

  useEffect(() => {
    progress(minutes, seconds);
  }, [seconds, minutes]);

  return (
    <section className="timer-container">
      <div
        className="timer"
        data-name="timer"
        onClick={(e) => {
          if (e.target.dataset.name === "timer") {
            setIsTimerOn(!isTimerOn);
          } else {
            setisSoundOn(!isSoundOn);
          }
        }}
      >
        <div className="timer-icon">
          {isSoundOn ? <FaVolumeUp /> : <FaVolumeMute />}
        </div>
        <p data-name="timer" className="countdown">
          {minutes}:{seconds}
        </p>
        <p data-name="timer" className="timer-state">
          {isTimerOn ? "STOP" : "START"}
        </p>

        <div className="progress-container">
          <svg data-name="timer">
            <circle
              ref={refProgress}
              style={myStyles}
              r="130"
              cx={135}
              cy={135}
              className="progress"
            ></circle>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Timer;

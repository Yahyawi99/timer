import React, { useContext, useState, useRef } from "react";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  const [isSettingsOn, setIsSettingsOn] = useState(false);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [values, setValues] = useState({ default: 20, short: 3, long: 15 });
  const [typeChoice, setTypeChoice] = useState("default");
  const [font, setFont] = useState("monospace");
  const [color, setColor] = useState("hsl(0, 82%, 62%)");

  //   Apply btn
  const getUserOptions = (time, font, color) => {
    for (let key in time) {
      if (!time[key]) {
        time[key] = values[key];
      }
      if (time[key] < values[key]) {
        time[key] = values[key];
      }
    }

    setColor(color);
    setFont(font);
    setValues(time);
    setIsSettingsOn(false);
  };
  // get duration in seconds
  const getDuration = (minutes, seconds) => {
    return parseInt(minutes * 60) + parseInt(seconds);
  };

  return (
    <AppContext.Provider
      value={{
        //   Options
        isSettingsOn,
        setIsSettingsOn,
        values,
        setValues,
        font,
        setFont,
        color,
        setColor,
        typeChoice,
        setTypeChoice,
        getUserOptions,
        isTimerOn,
        setIsTimerOn,
        getDuration,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Provider;

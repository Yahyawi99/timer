import React, { useState } from "react";
// CSS
import "./Types.css";
// Custom hook
import { useGlobalContext } from "../useContext";

const Types = () => {
  const { setTypeChoice, setIsSettingsOn } = useGlobalContext();
  const [classFor, setClassFor] = useState("default");

  return (
    <section
      onClick={() => setIsSettingsOn(false)}
      className="break-types-container"
    >
      <button
        data-id="default"
        className={`type-btn ${classFor === "default" && "clicked"}`}
        onClick={(e) => {
          const id = e.currentTarget.dataset.id;
          setClassFor(id);
          setTypeChoice(id);
        }}
      >
        promodoro
      </button>
      <button
        data-id="short"
        className={`type-btn ${classFor === "short" && "clicked"}`}
        onClick={(e) => {
          const id = e.currentTarget.dataset.id;
          setClassFor(id);
          setTypeChoice(id);
        }}
      >
        short break
      </button>
      <button
        data-id="long"
        className={`type-btn ${classFor === "long" && "clicked"}`}
        onClick={(e) => {
          const id = e.currentTarget.dataset.id;
          setClassFor(id);
          setTypeChoice(id);
        }}
      >
        long break
      </button>
    </section>
  );
};

export default Types;

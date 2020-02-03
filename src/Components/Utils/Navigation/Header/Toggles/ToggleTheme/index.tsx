import { toggleContent } from "..";
import { useDarkMode } from "../../../../../../lib/hooks/useDarkMode";
import { useEffect, useState } from "react";
import { transition } from "../../../../../../lib/misc";

export interface ToggleThemeProps {}

const ToggleTheme: React.FC<ToggleThemeProps> = () => {
  const [checked, setChecked] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    if (darkMode !== null || darkMode !== undefined) {
      if (darkMode === "theme-dark") {
        setDarkMode("theme-light");
      } else {
        setDarkMode("theme-dark");
      }
    }
  };

  useEffect(() => {
    if (darkMode !== null || darkMode !== undefined) {
      if (darkMode === "theme-dark") {
        setChecked(true);
      } else {
        setChecked(false);
      }
    } else {
      setChecked(false);
    }
  });
  return (
    <span
      id={toggleContent}
      className={toggleContent}
      style={{ width: "100%" }}
    >
      <input
        id="dm-check"
        className="dm-check"
        type="checkbox"
        checked={checked}
        onChange={toggleDarkMode}
      />
      <label htmlFor="dm-check" />

      <style jsx>{`
        input[type="checkbox"].dm-check {
          width: 100%;
          height: 100%;
          margin: 0;
          position: relative;
          cursor: pointer;
          vertical-align: 2px;
          outline: none;
          border: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }
        input[type="checkbox"].dm-check + label {
          position: absolute;
          left: 1px;
          display: inline-block;
          width: calc(50% - 2px);
          height: calc(100% - 2px);
          background-color: currentColor;
          border: none;
          cursor: pointer;
          /*border-radius: 100%;*/
          transition: left ${transition.main}, border-radius ${transition.main};
        }
        input[type="checkbox"].dm-check:checked + label {
          left: calc(50% + 1px);
          /*border-radius: 0%;*/
        }
      `}</style>
    </span>
  );
};

export default ToggleTheme;

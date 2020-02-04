import { toggleContent } from "..";
import { useDarkMode } from "../../../../../../lib/hooks/useDarkMode";
import { useEffect, useState } from "react";
import { transition } from "../../../../../../lib/misc";
import NavigationContext from "../../../NavigationContext";

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
    <NavigationContext.Consumer>
      {({ setDisable }) => (
        <span
          id={toggleContent}
          className={toggleContent}
          onMouseOver={() => setDisable(true)}
          onMouseLeave={() => setDisable(false)}
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
            span {
              width: 100%;
            }
            input[type="checkbox"].dm-check {
              width: 100%;
              height: 100%;
              margin: 0;
              position: relative;
              cursor: pointer;
              vertical-align: 2px;
              outline: none;
              border: none;
              background: none;
              background-color: inherit;
              color: inherit;
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
              transition: left ${transition.main},
                border-radius ${transition.main};
            }
            input[type="checkbox"].dm-check:checked + label {
              left: calc(50% + 1px);
            }
          `}</style>
        </span>
      )}
    </NavigationContext.Consumer>
  );
};

export default ToggleTheme;

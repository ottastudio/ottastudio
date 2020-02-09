import { toggleContent } from "..";
import { transition } from "../../../../../../lib/misc";
import { useNavContext } from "../../../NavContext";
import { useUIContext } from "../../../../../../lib/store/UIContext";

const ToggleDarkMode: React.FC<{}> = () => {
  const { darkMode, setDarkMode } = useUIContext();
  const { setDisable } = useNavContext();
  const toggleDarkMode = () =>
    darkMode === "theme--dark"
      ? setDarkMode("theme--light")
      : setDarkMode("theme--dark");

  return (
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
        checked={darkMode === "theme--dark" ? true : false}
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
          transition: left ${transition.main}, border-radius ${transition.main};
        }
        input[type="checkbox"].dm-check:checked + label {
          left: calc(50% + 1px);
        }
      `}</style>
    </span>
  );
};

export default ToggleDarkMode;

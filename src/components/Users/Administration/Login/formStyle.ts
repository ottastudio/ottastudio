import { style } from "typestyle";
import { transition } from "../../../../lib/misc";

export const formStyle = style({
  $debugName: "form-block",
  width: 360,
  position: "relative",
  top: "calc(50% + 1px)",
  left: "50%",
  transform: "translate(-50%, -50%)"
});

export const spanStyle = style({
  $debugName: "input-wrapper",
  position: "relative",
  height: 40,
  border: "1px solid",
  marginTop: -1
});

export const inputStyle = style({
  fontFamily: `"Regio Mono" !important`,
  width: "100%",
  appearance: "none",
  "-webkit-appearance": "none",
  padding: "0px 10px",
  margin: 0,
  height: "100%",
  fontSize: "1rem",
  background: "none",
  color: "currentColor",
  border: "none",
  $nest: {
    "&:focus": {
      $nest: {
        "&::placeholder": {
          opacity: 0
        }
      }
    },
    "&::placeholder": {
      color: "currentColor",
      textTransform: "capitalize",
      transition: `opacity ${transition.main}`
    }
  }
});

export const labelStyle = style({
  position: "absolute",
  top: "50%",
  right: 10,
  transform: "translateY(-50%)",
  fontSize: 12
});

export const buttonStyle = style({
  width: "100%",
  textAlign: "left",
  fontFamily: `"Regio Mono" !important`,
  height: 40,
  cursor: "pointer",
  fontSize: "1rem",
  background: "none",
  border: "1px solid",
  borderRadius: 0,
  padding: "0px 10px",
  color: "currentColor",
  marginTop: -1,
  $nest: {
    "&:hover": {
      backgroundColor: "lawngreen"
    }
  }
});

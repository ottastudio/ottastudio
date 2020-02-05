import { style } from "typestyle";
import { transition } from "../../../../lib/misc";

export const formStyle = style({
  $debugName: "form-block",
  width: 360,
  position: "absolute",
  bottom: -20,
  left: "50%",
  transform: "translate(-50%, 50%)"
});

export const spanStyle = style({
  position: "relative",
  height: 40,
  marginTop: -1
});

export const inputStyle = style({
  fontFamily: `"Regio Mono" !important`,
  width: "100%",
  appearance: "none",
  border: "1px solid",
  padding: "0px 10px",
  height: "100%",
  fontSize: "1rem",
  background: "none",
  color: "currentColor",
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
  position: "absolute",
  bottom: -10,
  left: 0,
  width: "100%",
  textAlign: "left",
  transform: "translateY(100%)",
  fontFamily: `"Regio Mono" !important`,
  height: 40,
  cursor: "pointer",
  fontSize: "1rem",
  background: "none",
  border: "1px solid",
  marginTop: 5,
  float: "right",
  borderRadius: 0,
  padding: "0px 10px",
  color: "currentColor",
  $nest: {
    "&:hover": {
      backgroundColor: "lawngreen"
    }
  }
});

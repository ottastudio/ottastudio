import { style } from "typestyle";
import { transition } from "../../../../lib/misc";

export const formStyle = style({
  $debugName: "form-block",
  width: 360,
  padding: 10,
  position: "absolute",
  top: "calc(50% + 40px)",
  left: "50%",
  transform: "translate(-50%, -50%)"
});

export const spanStyle = style({
  position: "relative",
  height: 40
});

export const inputStyle = style({
  fontFamily: `"Regio Mono" !important`,
  width: "100%",
  appearance: "none",
  border: "none",
  borderBottom: "1px solid",
  height: "100%",
  fontSize: "inherit",
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
  right: 0,
  transform: "translateY(-50%)",
  fontSize: 12
});

export const buttonStyle = style({
  fontFamily: `"Regio Mono" !important`,
  height: 40,
  cursor: "pointer",
  fontSize: "inherit",
  background: "none",
  border: "1px solid",
  marginTop: 5,
  float: "right",
  borderRadius: 50,
  padding: "0px 15px",
  color: "currentColor",
  $nest: {
    "&:hover": {
      backgroundColor: "lawngreen"
    }
  }
});

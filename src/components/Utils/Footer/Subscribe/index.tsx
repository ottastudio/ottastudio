import { useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import Typing from "../../Loader/Typing";
import { style } from "typestyle";
import { subscribeFormSubmit } from "./subscribeActions";

import {
  spanStyle,
  labelStyle,
  inputStyle,
  buttonStyle
} from "../../../Users/Administration/Login/formStyle";
import { useNotificationContext } from "../../../../lib/store/NotificationContext";

const newFormStyle = style({
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  width: 360
});

const Subscribe: React.FC<{}> = () => {
  const { addNotification } = useNotificationContext();
  const [indicator, setIndicator] = useState(false);
  const subscribeSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be valid email")
      .required("Required")
  });

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={subscribeSchema}
      onSubmit={(values, actions) =>
        subscribeFormSubmit(values, actions, setIndicator, addNotification)
      }
    >
      {({ errors, touched, values }) => {
        return (
          <Form className={newFormStyle}>
            <div className={spanStyle}>
              <label className={labelStyle} htmlFor="email-input-subscribe">
                {errors.email && touched.email ? errors.email : null}
              </label>
              <Field
                id="email-input-subscribe"
                name="email"
                type="email"
                placeholder="Email"
                spellCheck={false}
                value={values.email}
                className={inputStyle}
              />
            </div>
            <button className={buttonStyle} type="submit">
              Subscribe{indicator ? <Typing /> : null}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Subscribe;

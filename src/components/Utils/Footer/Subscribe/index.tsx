import { useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import Axios, { AxiosResponse } from "axios";
import Typing from "../../Loader/Typing";
import {
  spanStyle,
  labelStyle,
  inputStyle,
  buttonStyle
} from "../../../Users/Administration/Login/formStyle";
import { style } from "typestyle";

export interface SubscribeProps {}

const newFormStyle = style({
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  width: 360
});

const Subscribe: React.FC<SubscribeProps> = () => {
  const [indicator, setIndicator] = useState(false);
  const subscribeSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be valid email")
      .required("Required")
  });

  const submitForm = async (values: any, actions: any) => {
    setIndicator(true);
    Axios.post("/api/v1/users/subscribe", values).then((res: AxiosResponse) => {
      if (res.data.success) {
        setTimeout(() => {
          actions.setSubmitting(false);
          actions.resetForm();
          setIndicator(false);
        }, 1000);
      }
    });
  };
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={subscribeSchema}
      onSubmit={(values, actions) => submitForm(values, actions)}
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

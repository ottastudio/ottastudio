import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios, { AxiosResponse } from "axios";
import {
  formStyle,
  spanStyle,
  labelStyle,
  inputStyle,
  buttonStyle
} from "./formStyle";
import { login } from "../../../_HOC/auth";
import Typing from "../../../Utils/Loader/Typing";

export interface RegisterProps {}

const Login: React.FC<RegisterProps> = () => {
  const [indicator, setIndicator] = useState(false);
  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be valid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Min. 6 characters")
      .required("Required")
  });

  const submitForm = async (values: any, actions: any) => {
    setIndicator(true);
    Axios.post("/api/v1/users/login", values).then((res: AxiosResponse) => {
      const { success, message } = res.data;
      if (!success) {
        actions.setErrors({
          email: message,
          password: message
        });
        setIndicator(false);
      } else {
        const {
          user: { token }
        } = res.data;
        setTimeout(() => {
          actions.setSubmitting(false);
          actions.resetForm();
          setIndicator(false);
          login({ token });
        }, 1000);
      }
    });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => submitForm(values, actions)}
    >
      {({ errors, touched, values }) => {
        return (
          <Form className={formStyle}>
            <div className={spanStyle}>
              <label className={labelStyle} htmlFor="email-input-login">
                {errors.email && touched.email ? errors.email : null}
              </label>
              <Field
                id="email-input-login"
                name="email"
                type="email"
                placeholder="Email"
                spellCheck={false}
                value={values.email}
                className={inputStyle}
              />
            </div>

            <div className={spanStyle}>
              <label className={labelStyle} htmlFor="password-input-login">
                {errors.password && touched.password ? errors.password : null}
              </label>
              <Field
                id="password-input-login"
                name="password"
                type="password"
                placeholder="••••••"
                spellCheck={false}
                value={values.password}
                className={inputStyle}
              />
            </div>
            <button className={buttonStyle} type="submit">
              Login{indicator ? <Typing /> : null}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;

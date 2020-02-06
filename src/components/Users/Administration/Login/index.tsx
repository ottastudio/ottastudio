import { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import {
  formStyle,
  spanStyle,
  labelStyle,
  inputStyle,
  buttonStyle
} from "./formStyle";
import { login } from "../../../_HOC/auth";
import Typing from "../../../Utils/Loader/Typing";
import { UIContext } from "../../../../lib/store/UIContext";

const Login: React.FC<{}> = () => {
  const { setNotification } = useContext(UIContext);
  const [indicator, setIndicator] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be valid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Min. 6 characters")
      .required("Required")
  });

  const submitForm = async (values: any, actions: any) => {
    setIndicator(true);
    setNotification({
      status: true,
      type: "good",
      message: `Login as ${values.email}`
    });
    const submitAction = () => {
      actions.setSubmitting(false);
      actions.resetForm();
      setIndicator(false);
      setTimeout(() => {
        setNotification({ status: false });
      }, 1000);
    };

    try {
      const response = await Axios.post("/api/v1/users/login", values);
      const result = await response.data;
      const {
        user: { token },
        success,
        message
      } = await result;

      if (success) {
        login({ token });
        setNotification({ status: true, type: "cool", message });
        submitAction();
      } else {
        setNotification({ status: true, type: "error", message });
        submitAction();
      }
    } catch (error) {
      setNotification({ status: true, type: "error", message: error.message });
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
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

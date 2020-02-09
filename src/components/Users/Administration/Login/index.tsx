import { useState } from "react";
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
import {
  useNotificationContext,
  NotificationType
} from "../../../../lib/store/NotificationContext";

const Login: React.FC<{}> = () => {
  const { addNotification } = useNotificationContext();
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
    addNotification({
      status: "response",
      type: "waiting",
      message: `Login as ${values.email}`
    });
    const submitAction = ({ status, type, message }: NotificationType) => {
      addNotification({ status, type, message });
      actions.setSubmitting(false);
      setIndicator(false);
    };

    try {
      const response = await Axios.post("/api/v1/users/login", values);
      const result = await response.data;
      const { success, message } = await result;

      if (success) {
        const {
          user: { token }
        } = await result;
        login({ token });
        submitAction({ status: "dismissable", type: "great", message });
        actions.resetForm();
      } else {
        submitAction({ status: "important", type: "warning", message });
      }
    } catch (error) {
      submitAction({
        status: "important",
        type: "error",
        message: error.message
      });
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        submitForm(values, actions);
      }}
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

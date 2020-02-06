import { SetNotificationType } from "../../../../lib/store/UIContext/interfaces";
import Axios from "axios";

export const subscribeFormSubmit = async (
  values: any,
  actions: any,
  setIndicator: Function,
  setNotification: SetNotificationType
) => {
  const formActions = () => {
    actions.setSubmitting(false);
    actions.resetForm();
    setIndicator(false);
  };
  const removeNotification = () =>
    setTimeout(() => {
      setNotification({ status: false });
    }, 1000);

  setIndicator(true);
  setNotification({
    message: `Submiting ${values.email}`,
    status: true,
    type: "good"
  });

  try {
    const response = await Axios.post("/api/v1/users/subscribe", values);
    const result = await response.data;
    if (result.success) {
      formActions();
      setNotification({
        status: true,
        message: result.message,
        type: "good"
      });
      removeNotification();
    } else {
      formActions();
      setNotification({
        message: result.message,
        type: "error",
        status: true
      });
      removeNotification();
    }
  } catch (error) {
    formActions();
    removeNotification();
    console.log("On catch block");
  }
};

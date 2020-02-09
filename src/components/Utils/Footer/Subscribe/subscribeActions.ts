import Axios from "axios";
import { AddNotificationType } from "../../../../lib/store/NotificationContext";

export const subscribeFormSubmit = async (
  values: any,
  actions: any,
  setIndicator: Function,
  addNotification: AddNotificationType
) => {
  const formActions = () => {
    actions.setSubmitting(false);
    actions.resetForm();
    setIndicator(false);
  };

  setIndicator(true);
  addNotification({
    status: "dismissable",
    message: `Submitting ${values.email}`,
    type: "success"
  });

  try {
    const response = await Axios.post("/api/v1/users/subscribe", values);
    const result = await response.data;
    if (result.success) {
      formActions();
      addNotification({
        status: "dismissable",
        message: result.message,
        type: "great"
      });
    } else {
      formActions();
      addNotification({
        status: "dismissable",
        message: result.message,
        type: "warning"
      });
    }
  } catch (error) {
    formActions();
    addNotification({
      status: "important",
      type: "error",
      message: error.message
    });
    console.log("On catch block");
  }
};

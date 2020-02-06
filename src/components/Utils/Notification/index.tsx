import { useContext } from "react";
import { UIContext } from "../../../lib/store/UIContext";
import { transition } from "../../../lib/misc";
import Typing from "../Loader/Typing";

export interface NotificationProps {}

const Notification: React.FC<NotificationProps> = () => {
  const {
    setNotification,
    notification: { message, type, status }
  } = useContext(UIContext);
  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        border: "1px solid",
        fontSize: 14,
        zIndex: 1001,
        backgroundColor:
          type === "good" ? "lawngreen" : type === "cool" ? "deeppink" : "red",
        display: !status ? "none" : "block"
      }}
    >
      <div
        onClick={() => setNotification({ status: false })}
        style={{
          width: "100%",
          maxWidth: 320,
          padding: 10,
          transition: `width ${transition.main}, max-width ${transition.main}`
        }}
      >
        {message}
        {type === "good" ? <Typing /> : null}
      </div>
    </div>
  );
};

export default Notification;

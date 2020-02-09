import { style, media } from "typestyle";
import { useNotificaionContext } from "../../../lib/store/NotificationContext";
import Toast from "./Toast";

const Notification: React.FC<{}> = () => {
  const { notifications } = useNotificaionContext();
  const divStyle = style(
    {
      $debugName: "notification-wrapper",
      position: "fixed",
      display: "flex",
      zIndex: 1999
    },
    media(
      { minWidth: 768 },
      {
        padding: 20,
        bottom: 0,
        right: 0,
        width: 320,
        flexDirection: "column-reverse"
      }
    ),
    media(
      { maxWidth: 767 },
      {
        top: 0,
        left: 0,
        width: "100%",
        padding: 10,
        flexDirection: "column"
      }
    )
  );
  return notifications.length > 0 ? (
    <div className={divStyle}>
      {notifications.map(({ id, message, type, status }) => (
        <Toast key={id} id={id} type={type} status={status}>
          {message}
        </Toast>
      ))}
    </div>
  ) : null;
};

export default Notification;

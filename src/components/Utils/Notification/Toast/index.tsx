import { useState, useEffect } from "react";
import { style } from "typestyle";
import {
  useNotificationContext,
  NotifType,
  NotifStatus,
  NotifId
} from "../../../../lib/store/NotificationContext";
import {
  IconSuccess,
  IconWarning,
  IconGreat,
  IconError,
  IconWaiting
} from "../../Icons";

export interface ToastProps {
  id: NotifId;
  type: NotifType;
  status: NotifStatus;
}

const Icons = (type: NotifType) => {
  switch (type) {
    case "success":
      return <IconSuccess />;
    case "great":
      return <IconGreat />;
    case "waiting":
      return <IconWaiting />;
    case "warning":
      return <IconWarning />;
    case "error":
      return <IconError />;
    default:
      return <IconGreat />;
  }
};

const Toast: React.FC<ToastProps> = ({ children, id, type, status }) => {
  const { removeNotification } = useNotificationContext();
  const [counter, setCounter] = useState<number>(
    status === "important" ? 10 : type === "warning" ? 4 : 3
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(id);
    }, counter * 1000);
    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [counter]);

  const divStyle = style({
    $debugName: "notification-toast",
    cursor: "pointer",
    marginBottom: 5,
    fontSize: "1rem",
    display: "flex",
    alignItems: "flext-start",
    justifyContent: "flex-end"
  });
  const spantyle = {
    fontSize: 14,
    border: "1px solid",
    lineHeight: 1,
    boxShadow: "3px 3px 7px 0px rgba(0,0,0,0.3)",
    backgroundColor:
      type === "success"
        ? "palegreen"
        : type === "great"
        ? "aquamarine"
        : type === "error"
        ? "tomato"
        : type === "warning"
        ? "gold"
        : "ivory"
  };
  const childId = style(spantyle, {
    $debugName: "toast-icon",
    marginRight: 5,
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 3
  });
  const childMessage = style(spantyle, {
    $debugName: "toast-message",
    width: "87.5%",
    padding: 5,
    display: "grid",
    gridTemplateColumns: "auto 16px",
    alignItems: "center"
  });
  const counterStyle = style({
    $debugName: "toast-countdown",
    width: 16,
    height: 16,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  });

  return (
    <div className={divStyle} onClick={() => removeNotification(id)}>
      <div className={childId}>{Icons(type)}</div>
      <div className={childMessage}>
        <span>{children}</span>
        <span className={counterStyle}>{counter}</span>
      </div>
    </div>
  );
};

export default Toast;

import {
  useNotificaionContext,
  NotifType,
  NotifStatus,
  NotifId
} from "../../../../lib/store/NotificationContext";
import { style } from "typestyle";
import { useState, useEffect } from "react";

export interface ToastProps {
  id: NotifId;
  type: NotifType;
  status: NotifStatus;
}

const Toast: React.FC<ToastProps> = ({ children, id, type, status }) => {
  const { removeNotification } = useNotificaionContext();
  const [counter, setCounter] = useState<number>(
    status === "important" ? 10 : type === "warning" ? 5 : 3
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
    fontSize: 13,
    border: "1px solid",
    display: "flex",
    alignItems: "flex-start",
    paddingTop: 5,
    paddingBottom: 5,
    // minHeight: 40,
    lineHeight: 1,
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
    marginLeft: 5,
    width: "12.5%",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "wrap"
  });
  const childMessage = style(spantyle, {
    width: "87.5%",
    padding: "0px 5px"
  });

  const newId = id !== undefined && id;

  return (
    <div className={divStyle} onClick={() => removeNotification(id)}>
      <div className={childMessage}>
        <div>{children}</div>
        {/* <div>10:59</div> */}
      </div>
      <div className={childId}>
        <span>
          {newId <= 9 && newId <= 99
            ? `00${newId}`
            : newId >= 9 && newId <= 99
            ? `0${newId}`
            : newId}
        </span>
        {/* <span>3</span> */}
        <span>{counter}</span>
      </div>
    </div>
  );
};

export default Toast;

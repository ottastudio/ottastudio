import { createContext, useContext, useState, useCallback } from "react";

export type NotifStatus = "important" | "dismissable" | "response";
export type NotifMessage = string;
export type NotifType = "success" | "warning" | "error" | "great" | "waiting";
export type NotifId = number | undefined;
export interface NotificationType {
  id?: NotifId;
  status: NotifStatus;
  message: NotifMessage;
  type: NotifType;
}
export type AddNotificationType = ({}: NotificationType) => void;

export interface SetToasts extends Array<NotificationType> {}
export interface NotificationContextProps {
  notifications: Array<NotificationType>;
  addNotification: AddNotificationType;
  removeNotification: (id: NotifId) => void;
}

export const NotificationContext = createContext<NotificationContextProps>({
  notifications: [],
  addNotification: () => [],
  removeNotification: () => []
});
export const NotificationProvider: React.FC<{}> = ({ children }) => {
  let notifCounter = 0;

  const [notifications, setNotifications] = useState<Array<NotificationType>>([]);
  const addNotification = useCallback(
    ({ id = notifCounter++, status, message, type }: NotificationType) => {
      setNotifications(notifications => [
        ...notifications,
        { id, status, message, type }
      ]);
    },
    [setNotifications]
  );
  const removeNotification = useCallback(
    (id: NotifId) => {
      setNotifications(notifications =>
        notifications.filter((item: NotificationType) => item.id !== id)
      );
    },
    [setNotifications]
  );

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
export const NotificationConsumer = NotificationContext.Consumer;
export const useNotificaionContext = () => useContext(NotificationContext);

// const sampleNotification: Array<NotificationType> = [
//   {
//     id: 1,
//     status: "dismissable",
//     message: "Sample dismissable | success",
//     type: "success"
//   },
//   {
//     id: 2,
//     status: "important",
//     message: "Sample important | error",
//     type: "error"
//   },
//   {
//     id: 10,
//     status: "dismissable",
//     message: "Sample dismissable | warning",
//     type: "warning"
//   },
//   {
//     id: 999,
//     status: "dismissable",
//     message: "Sample dismissable | great",
//     type: "great"
//   }
// ];
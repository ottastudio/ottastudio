import { Fragment, useEffect } from "react";
import { style } from "typestyle";
import Axios from "axios";

import Typing from "../../../Utils/Loader/Typing";
import { useNotificationContext } from "../../../../lib/store/NotificationContext";

export interface UserListProps {
  users: any[];
  subscribers: any[];
  revalidateSubscriber: Function;
  revalidateUsers: Function;
}

const UserList: React.FC<UserListProps> = ({
  users,
  subscribers,
  revalidateSubscriber,
  revalidateUsers
}) => {
  const { addNotification } = useNotificationContext();
  const divStyle = style({
    padding: "0px 20px",
    position: "relative"
  });
  const spanStyle = style({
    height: 40,
    margin: "0px 5px 5px 0px",
    border: "1px solid",
    padding: "0px 10px",
    fontSize: "1rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    $nest: {
      "&:hover": {
        backgroundColor: "coral"
      }
    }
  });
  const deleteSubscriber = async (id: string, email?: string) => {
    addNotification({
      status: "response",
      message: `Deleting ${email}`,
      type: "waiting"
    });

    try {
      const response = await Axios.delete(`/api/v1/users/subscribe?id=${id}`);
      const result = await response.data;
      if (result.success) {
        await revalidateSubscriber();
        addNotification({
          status: "dismissable",
          message: `${email} ${result.message}`,
          type: "success"
        });
      }
    } catch (error) {
      addNotification({
        status: "important",
        message: error.message,
        type: "error"
      });
    }
  };

  useEffect(() => {
    revalidateSubscriber();
    revalidateUsers();
  }, []);
  return (
    <div className={divStyle}>
      <div>
        <h3>Subscriber List</h3>
        {subscribers.length > 0 ? (
          subscribers.map(({ _id, email }) => (
            <span
              className={spanStyle}
              key={_id}
              onClick={() => deleteSubscriber(_id, email)}
            >
              {email}
            </span>
          ))
        ) : (
          <Fragment>
            <span className={spanStyle}>There is no subscriber yet.</span>
            <span className={spanStyle}>Please make a good content.</span>
            <span className={spanStyle}>
              <Typing />
            </span>
          </Fragment>
        )}
      </div>
      <div>
        <h3>Users List</h3>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Register Date</th>
              <th>Last Login</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (
                { _id, name, email, token, role, createdAt, updatedAt },
                i: number
              ) => (
                <tr
                  key={_id}
                  onClick={
                    role === 2
                      ? () => {
                          addNotification({
                            status: "dismissable",
                            message: `${name} Cannot be delete 😁.`,
                            type: "warning"
                          });
                        }
                      : () => {
                          Axios.delete(`/api/v1/users?id=${_id}`).then(res => {
                            if (res.data.success) {
                              addNotification({
                                status: "dismissable",
                                message: res.data.message,
                                type: "success"
                              });
                              revalidateUsers();
                            } else {
                              addNotification({
                                status: "important",
                                message: res.data.message,
                                type: "error"
                              });
                              revalidateUsers();
                            }
                          });
                        }
                  }
                >
                  <td>{i + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{role === 2 ? "Administrator" : "User"}</td>
                  <td>
                    {new Date(createdAt).toDateString()}{" "}
                    {new Date(createdAt).toLocaleTimeString()}
                  </td>
                  <td>
                    {new Date(updatedAt).toDateString()}{" "}
                    {new Date(updatedAt).toLocaleTimeString()}
                  </td>
                  {token ? (
                    <td>
                      Online
                      <Typing />
                    </td>
                  ) : (
                    <td>Away</td>
                  )}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

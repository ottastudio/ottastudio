import dynamic from "next/dynamic";
import { NextPage } from "next";
import Head from "next/head";

import useRequest from "../../../lib/hooks/useRequest";

import { withAuthSync } from "../../../components/_HOC/auth";
import DashboardLayout from "../../../components/Users/Administration/Dashboard/dashboardLayout";
import Typing from "../../../components/Utils/Loader/Typing";
import UserList from "../../../components/Users/Administration/UserList";

const Loader = () => (
  <div style={{ position: "fixed", top: 0, left: 0 }}>
    <Typing />
  </div>
);

const Cube = dynamic(() => import("../../../components/Sandbox/Cube"), {
  ssr: false,
  loading: Loader
});

type User = {
  _id?: string;
  name?: string;
  role?: number;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
};
export interface DashboardProps {
  token: string;
  user: User;
  users: any;
  subscribers: any;
}

const Dashboard: NextPage<DashboardProps> = props => {
  const { user, users, subscribers } = props;
  const { data: usersRegistered, revalidate: revalidateUsers } = useRequest(
    { url: "/api/v1/users" },
    { initialData: users }
  );
  const { data: subscriber, revalidate: revalidateSubscriber } = useRequest(
    { url: "/api/v1/users/subscribe" },
    { initialData: subscribers }
  );
  return (
    <DashboardLayout globalData={props}>
      <Head>
        <title>{user.name}</title>
      </Head>
      <Cube />
      <div style={{ padding: 20 }}>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
      <UserList
        users={usersRegistered.users}
        revalidateUsers={revalidateUsers}
        subscribers={subscriber.response}
        revalidateSubscriber={revalidateSubscriber}
      />
    </DashboardLayout>
  );
};

export default withAuthSync(Dashboard);

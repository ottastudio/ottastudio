import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

import useRequest from "../../../lib/hooks/useRequest";

import { withAuthSync } from "../../../components/_HOC/auth";
import { DashboardLayout } from "../../../components/Users/Administration/Dashboard/dashboardLayout";

const UserList = dynamic(
  () => import("../../../components/Users/Administration/UserList"),
  { ssr: false }
);

type User = {
  _id: string;
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
    { initialData: users, revalidateOnFocus: true }
  );
  const { data: subscriber, revalidate: revalidateSubscriber } = useRequest(
    { url: "/api/v1/users/subscribe" },
    { initialData: subscribers, revalidateOnFocus: true }
  );

  return (
    <DashboardLayout globalData={props}>
      <Head>
        <title>{user.name}</title>
      </Head>
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

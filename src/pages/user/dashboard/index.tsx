import dynamic from "next/dynamic";
import { NextPage } from "next";
import { withAuthSync } from "../../../components/_HOC/auth";
import Head from "next/head";
import DashboardLayout from "../../../components/Users/Administration/Dashboard/dashboardLayout";
import Typing from "../../../components/Utils/Loader/Typing";

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
}

const Dashboard: NextPage<DashboardProps> = props => {
  const { user } = props;
  return (
    <DashboardLayout globalData={props}>
      <Head>
        <title>Administrator Dashboard</title>
      </Head>
      <Cube />
      <div style={{ minHeight: "150vh", padding: 20 }}>
        <h1>Dashboard</h1>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    </DashboardLayout>
  );
};

export default withAuthSync(Dashboard);

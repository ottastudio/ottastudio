import { NextPage } from "next";
import { withAuthSync } from "../../../components/_HOC/auth";
import Head from "next/head";
import DashboardLayout from "../../../components/Users/Administration/Dashboard/dashboardLayout";

export interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Administrator Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
    </DashboardLayout>
  );
};

export default withAuthSync(Dashboard);

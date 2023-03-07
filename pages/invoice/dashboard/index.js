import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getToken } from "@/utils/helpers/auth";
import DashboardContainer from "@/containers/dashboard/DashboardContainer";
function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    console.log(token);
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return <DashboardContainer />;
}

export default Dashboard;

import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken,removeToken } from '@/utils/helpers/auth';
import DashboardContainer from '@/containers/dashboard/DashboardContainer';
function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    console.log(token)
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  function handleLogout() {
    removeToken()
    router.push('/login');
  }
  return (
    <DashboardContainer/>
  )
}

export default Dashboard
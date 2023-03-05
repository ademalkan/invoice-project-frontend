import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken,removeToken } from '@/utils/helpers/auth';

function Secret() {
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
    <div>
      <h1>Secret Page</h1>
      <p>You are authorized to see this content!</p>


<button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Secret;

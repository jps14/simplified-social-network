import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export default async function Private() {
  const session = await getServerSession(nextAuthOptions);
  console.log(session?.user);
  return <h1>Private Route</h1>;
}

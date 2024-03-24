import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export default async function Private() {
  const session = await getServerSession(nextAuthOptions);
  return (
    <div>
      <h1>Hello, {session?.user.name}! This is a private route.</h1>
    </div>
  );
}

import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      user: unknown;
      userId: string;
      name: string;
      email: string;
      access_token: string;
    };
  }
}

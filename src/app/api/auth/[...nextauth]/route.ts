import { axiosClient } from '@/services/axiosClient';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        const response = await axiosClient.post('/auth/login', {
          email: credentials?.email,
          password: credentials?.password,
        });
        const user = await response.data;

        if (user) return user;

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };

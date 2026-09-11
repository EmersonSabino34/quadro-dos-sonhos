import NextAuth from 'next-auth';
import Apple from 'next-auth/providers/apple';
import Facebook from 'next-auth/providers/facebook';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '../../../../lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

function generateAppleClientSecretSync() {
  const teamId = process.env.APPLE_TEAM_ID as string;
  const keyId = process.env.APPLE_KEY_ID as string;
  const clientId = process.env.APPLE_ID as string;
  const rawKey = process.env.APPLE_PRIVATE_KEY
    ? process.env.APPLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined;

  if (!teamId || !keyId || !clientId || !rawKey) return '';

  // jsonwebtoken supports synchronous signing when no callback is passed
  try {
    const token = jwt.sign({}, rawKey, {
      algorithm: 'ES256',
      keyid: keyId,
      issuer: teamId,
      subject: clientId,
      audience: 'https://appleid.apple.com',
      expiresIn: '180d',
    });

    return token;
  } catch (err) {
    // Don't throw during build/collect; return empty string so NextAuth can continue.
    // At runtime, with correct APPLE_PRIVATE_KEY, this will produce a valid clientSecret.
    console.error('Apple clientSecret generation failed:', err);
    return '';
  }
}

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'database' },
  providers: [
    Apple({
      clientId: process.env.APPLE_ID as string,
      clientSecret: generateAppleClientSecretSync(),
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        if (!user || !user.hashedPassword) return null;

        const isValid = await bcrypt.compare(credentials.password, user.hashedPassword);
        if (!isValid) return null;

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };

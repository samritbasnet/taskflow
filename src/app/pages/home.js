import Head from 'next/head';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Import Link correctly

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Management Tool</title>
        <meta name="description" content="A simple project management tool" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">
          Welcome to Project Management Tool
        </h1>
        <Link href="/" passHref>
          <Button>Get Started</Button>
        </Link>
      </main>
    </div>
  );
}

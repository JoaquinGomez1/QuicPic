import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-2xl">Test</h1>
      <Link href="user">Go to user</Link>
    </div>
  );
};

export default Home;

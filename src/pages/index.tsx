import Navbar from "@components/Navbar";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div>
          <h1 className="text-6xl text-cyan-400">Test</h1>

          <Link href="user">
            <a className="px-4 py-2 bg-slate-400 text-white cursor-pointer rounded-md">
              Go to user
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;

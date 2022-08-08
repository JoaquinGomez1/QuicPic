import type { NextPage } from "next";
import Link from "next/link";
import { Button, Container, Navbar } from "@components/index";

const Home: NextPage = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Container>
        <div>
          <h1 className="text-6xl text-cyan-400">Test</h1>
        </div>
      </Container>
    </main>
  );
};

export default Home;

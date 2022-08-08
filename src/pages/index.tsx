import type { NextPage } from "next";
import { Container, Navbar } from "@components/index";
import { FileForm } from "@components/FileForm";

const Home: NextPage = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Container>
        <div className="grid justify-center mt-20">
          <h1 className="text-6xl text-primary">QuicPic</h1>
          <h3 className="text-2xl text-secondary">
            A fast, easy to use, online picture editor
          </h3>
        </div>

        <section>
          <FileForm />
        </section>
      </Container>
    </main>
  );
};

export default Home;

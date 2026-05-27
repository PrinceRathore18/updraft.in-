import Navbar from "./Navbar.tsx";
import Hero from "./Hero.tsx";
import Skills from "./Skills.tsx";
import Program from "./Program.tsx";
import Team from "./Team.tsx";
import Contact from "./Contact.tsx";
import GetInvolved from "./GetInvolved.tsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Program />
        <Team />
        <GetInvolved />
        <Contact />
      </main>
    </>
  );
}
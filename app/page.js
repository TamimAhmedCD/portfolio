import AnimatedBeamDemo from "@/components/About/About";
import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AnimatedBeamDemo></AnimatedBeamDemo>
      <Services></Services>
    </>
  );
}

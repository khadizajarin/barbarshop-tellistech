import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css"
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
}

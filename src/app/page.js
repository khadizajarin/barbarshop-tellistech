import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css"
import Banner from "./components/Banner";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
    </div>
  );
}

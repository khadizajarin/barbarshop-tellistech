import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css"
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

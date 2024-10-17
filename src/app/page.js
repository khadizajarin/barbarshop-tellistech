import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css"
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Products from "./components/Products";
import WorkingHours from "./components/WorkingHours";
import Review from "./components/Review";
import Blogs from "./components/Blogs"
import FollowInsta from "./components/FollowInsta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar className=""></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Products></Products>
      <WorkingHours></WorkingHours>
      <Review></Review>
      <Blogs></Blogs>
      <FollowInsta></FollowInsta>
      <Footer></Footer>
    </div>
  );
}

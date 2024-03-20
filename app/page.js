import Banner from "./components/Banner/Banner";
import BestSeller from "./components/BestSeller/BestSeller";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import 'flowbite';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-[90%] mx-auto flex flex-col  relative">
        <Brands />
        <BestSeller />
        <Banner imageSrc={"https://plus.unsplash.com/premium_photo-1681488408867-66ffd3c8339d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} link={"#"} />
      </div>
      <Footer />
    </>
  );
}

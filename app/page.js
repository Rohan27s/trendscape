import Banner from "./components/Banner/Banner";
import BestSeller from "./components/BestSeller/BestSeller";
import Brands from "./components/Brands/Brands";
import ProductSlider from "./components/ProductSlider/ProductSlider";

export default function Home() {
  return (
    <>
    <div className="w-[90%] mx-auto">

      <Brands />
      <BestSeller />
      <ProductSlider/>
      <Banner imageSrc={"https://plus.unsplash.com/premium_photo-1681488408867-66ffd3c8339d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} link={"/Products"} />
    </div>
    </>
  );
}

import ClientPage from "@/page/clients/Client";
import DelightsPage from "@/page/delights/Delights";
import ProductComponent from "@/page/products/Products";
import AboutUsComponent from "@/page/about/AboutUs";
import Header from "@/page/header/Header";
import Footer from "@/page/footer/Footer";

export default function Home() {
  return (
    <main>
     <Header/> 
     <DelightsPage />
     <ProductComponent />
     <AboutUsComponent />
     {/* <ClientPage /> */}
     <Footer/>
    </main>
  );
}

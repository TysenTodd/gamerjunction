import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Account from "./Pages/Account";
import Support from "./Pages/Support";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import pc_banner from "./Components/Assets/pc_banner.png";
import sale_pc_banner from "./Components/Assets/sale_pc_banner.png";
import console_banner from "./Components/Assets/console_banner.png";
import sale_console_banner from "./Components/Assets/sale_console_banner.png";
import mobile_banner from "./Components/Assets/mobile_banner.png";
import sale_mobile_banner from "./Components/Assets/sale_mobile_banner.png";
import gear_banner from "./Components/Assets/gear_banner.png";
import sale_gear_banner from "./Components/Assets/sale_gear_banner.png";
import support_banner from "./Components/Assets/support_banner.png";
import About from "./Components/About/About";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService/TermsOfService";

// Banner Transitions for Specific Pages

const shopImages = [
  sale_pc_banner,
  sale_console_banner,
  sale_mobile_banner,
  sale_gear_banner,
];
const pcImages = [sale_pc_banner, pc_banner];
const consoleImages = [sale_console_banner, console_banner];
const mobileImages = [sale_mobile_banner, mobile_banner];
const gearImages = [sale_gear_banner, gear_banner];
const supportImages = [support_banner];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header images={shopImages} />
                <Shop />
              </>
            }
          />
          <Route
            path="/pc"
            element={
              <>
                <Header images={pcImages} />
                <ShopCategory category="pc" />
              </>
            }
          />
          <Route
            path="/console"
            element={
              <>
                <Header images={consoleImages} />
                <ShopCategory category="console" />
              </>
            }
          />
          <Route
            path="/mobile"
            element={
              <>
                <Header images={mobileImages} />
                <ShopCategory category="mobile" />
              </>
            }
          />
          <Route
            path="/gear"
            element={
              <>
                <Header images={gearImages} />
                <ShopCategory category="gear" />
              </>
            }
          />
          <Route
            path="/support"
            element={
              <>
                <Header images={supportImages} />
                <Support />
                <ShopCategory category="support" />
              </>
            }
          />

          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              <>
                <Header images={shopImages} />
                <Shop />
              </>
            }
          />
          <Route
            path="/privacypolicy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/termsofservice"
            element={
              <>
                <TermsOfService />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

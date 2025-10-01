import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className={`min-h-screen flex flex-col ${isArabic ? "rtl" : "ltr"}`}>
      {/* Shared Navbar (fixed at top) */}
      <Navbar />

      {/* Page content with padding to prevent overlap */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Shared Footer + Floating WhatsApp */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;

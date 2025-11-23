// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLeaf } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const social = [
    { icon: <FaInstagram size={28} />, link: "https://instagram.com/hebanaturals", color: "text-rose-600" },
    { icon: <FaFacebook size={28} />, link: "https://facebook.com/hebanaturals", color: "text-blue-600" },
    { icon: <FaWhatsapp size={28} />, link: "https://wa.me/201234567890", color: "text-green-600" },
  ];

  return (
    <footer className="bg-gradient-to-t from-emerald-900 to-emerald-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-3 mb-8">
          <FaLeaf className="text-4xl text-emerald-400" />
          <h2 className="text-3xl font-bold">هبة ناتشورالز</h2>
        </div>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          منتجات طبيعية علاجية بتركيبات أيورفيدية أصلية 
        </p>

        <div className="flex justify-center gap-10 mb-10">
          {social.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className={`${s.color} hover:scale-125 transition`}>
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-emerald-200">© {year} Heba Naturals - كل الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

export default Footer;
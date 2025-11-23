// src/pages/Reviews.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaStar, FaLeaf, FaHeart } from "react-icons/fa";

const Reviews = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", product: "", review: "", rating: 5 });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("hebaReviews")) || [
      {
        name: "فاطمة - الخرطوم",
        product: "زيت الثعلبة الأيورفيدي",
        review: "بعد شهرين فقط من استخدام الزيت، اختفت الثعلبة تمامًا ونما شعر جديد قوي!",
        rating: 5,
        date: "2025-11-10"
      },
      {
        name: "Amina - Cairo",
        product: "خلطة تطويل الشعر المجعد",
        review: "My 4C hair has never been this long and healthy! Finally a product made for us!",
        rating: 5,
        date: "2025-11-05"
      },
    ];
    setReviews(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.product || !formData.review) {
      setError(t("review_error_required") || "جميع الحقول مطلوبة");
      return;
    }

    const newReview = {
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };

    const updated = [...reviews, newReview].slice(-10);
    setReviews(updated);
    localStorage.setItem("hebaReviews", JSON.stringify(updated));
    setFormData({ name: "", product: "", review: "", rating: 5 });
    setSuccess(t("review_success") || "شكرًا لتقييمك! تم إضافته بنجاح");
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>{isArabic ? "آراء عملائنا - هبة ناتشورالز" : "Customer Reviews - Heba Naturals"}</title>
        <meta name="description" content="اقرئي تجارب حقيقية من عملاء هبة ناتشورالز الذين استعادوا شعرهم من الثعلبة، القشرة، والفراغات بمنتجات طبيعية 100%" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-green-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold text-center text-emerald-800 mb-6"
          >
            {t("client_stories", { defaultValue: "قصص نجاح عملائنا" })}
          </motion.h1>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            أكثر من 5000 عميلة استعادت ثقتها بشعرها مع هبة ناتشورالز
          </p>

          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 mb-20 border border-emerald-100"
          >
            <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center flex items-center justify-center gap-3">
              <FaHeart className="text-rose-500" /> {t("share_your_story", { defaultValue: "شاركينا تجربتك" })}
            </h2>
            {success && <p className="text-green-600 text-center font-bold mb-4">{success}</p>}
            {error && <p className="text-red-600 text-center font-bold mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={t("your_name") || "اسمك"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                  required
                />
                <input
                  type="text"
                  placeholder={t("product_used") || "المنتج الذي استخدمتيه"}
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
                  required
                />
              </div>

              <textarea
                rows="5"
                placeholder={t("your_review") || "كيف غيرت هبة ناتشورالز شعرك؟"}
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all resize-none"
                required
              />

              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={32}
                    className={`cursor-pointer transition-all ${formData.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                    onClick={() => setFormData({ ...formData, rating: star })}
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-5 rounded-xl text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {t("submit_review", { defaultValue: "إرسال التقييم" })}
              </button>
            </form>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100 hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(review.rating)].map((_, s) => (
                    <FaStar key={s} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.review}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-emerald-700">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.product}</p>
                  </div>
                  <FaLeaf className="text-emerald-600 text-3xl opacity-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Reviews;
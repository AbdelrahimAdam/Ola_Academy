import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const ReviewPage = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const prefersDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // State for form and testimonials
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    review: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load initial reviews (simulated persistence)
  useEffect(() => {
    const savedReviews =
      JSON.parse(localStorage.getItem("academyReviews")) || [
        {
          name: t("testimonial_fatima_name"),
          course: "General English",
          review: t("testimonial_fatima_quote"),
          color: "bg-purple-100 dark:bg-purple-900",
        },
        {
          name: t("testimonial_mohammed_name"),
          course: "Business English",
          review: t("testimonial_mohammed_quote"),
          color: "bg-green-100 dark:bg-green-900",
        },
      ];
    setReviews(savedReviews);
  }, [t]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.course || !formData.review) {
      setError(t("review_error_required"));
      setSuccess("");
      return;
    }
    const newReview = {
      name: formData.name,
      course: formData.course,
      review: formData.review,
      color: getRandomColor(),
    };
    const updatedReviews = [...reviews, newReview].slice(-5);
    setReviews(updatedReviews);
    localStorage.setItem("academyReviews", JSON.stringify(updatedReviews));
    setFormData({ name: "", course: "", review: "" });
    setError("");
    setSuccess(t("review_success"));
  };

  // Random color assignment
  const getRandomColor = () => {
    const colors = [
      "bg-purple-100 dark:bg-purple-900",
      "bg-green-100 dark:bg-green-900",
      "bg-orange-100 dark:bg-orange-900",
      "bg-blue-100 dark:bg-blue-900",
      "bg-yellow-100 dark:bg-yellow-900",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className={`min-h-screen ${
        prefersDarkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      } transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-4xl font-extrabold text-center mb-10 ${
            isArabic ? 'font-["Noto_Sans_Arabic"]' : 'font-["Inter"]'
          } tracking-wide`}
        >
          {t("review_title")}
        </h1>

        {/* Review Form */}
        <div
          className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">
            {t("review_form_title")}
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t("review_form_name")}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
                placeholder={t("review_form_name_placeholder")}
                aria-required="true"
              />
            </div>

            {/* Course */}
            <div>
              <label htmlFor="course" className="block text-sm font-medium mb-2">
                {t("review_form_course")}
              </label>
              <select
                id="course"
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
                aria-required="true"
              >
                <option value="">
                  {t("review_form_course_placeholder")}
                </option>
                <option value="General English">General English</option>
                <option value="Business English">Business English</option>
                <option value="IELTS Preparation">IELTS Preparation</option>
                <option value="Kids English">Kids English</option>
              </select>
            </div>

            {/* Review */}
            <div>
              <label htmlFor="review" className="block text-sm font-medium mb-2">
                {t("review_form_review")}
              </label>
              <textarea
                id="review"
                value={formData.review}
                onChange={(e) =>
                  setFormData({ ...formData, review: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
                rows="4"
                placeholder={t("review_form_review_placeholder")}
                aria-required="true"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition-colors duration-300"
            >
              {t("review_form_submit")}
            </button>
          </form>
        </div>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel testimonials={reviews} />
      </div>
    </div>
  );
};

export default ReviewPage;

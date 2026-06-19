import { useRef } from "react";
import Slider from "react-slick";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    title: "MVP Dev, App Redesign & Backend Dev for AI Mobile App",
    rating: 5,
    review: "They went above and beyond to deliver my vision into reality.",
    date: "Jun 12, 2023",
    feedback:
      "Delivered MVP, deployed on App Store + Google Play. On-time, precise, recommended improvements.",
    project: {
      services: "Custom Software Development, UI/UX, Mobile",
      budget: `$10,000 – $49,999`,
      dateRange: `Mar – Jun 2023`,
      summary: "MVP for AI mobile app in 3 weeks. Redesigned app + improved backend.",
    },
    reviewer: {
      title: "Founder & CEO, Shift",
      company: "Software",
      location: "San Francisco, CA",
      size: `1–10 employees`,
      verified: true,
    },
  },
  {
    title: "E-commerce Platform Build",
    rating: 5,
    review: "Outstanding work! They delivered before deadline and with perfect quality.",
    date: "May 5, 2023",
    feedback:
      "The team built a complete e-commerce store with integrations, admin dashboard, and smooth checkout.",
    project: {
      services: "E-commerce Development, API Integration",
      budget: "$50,000+",
      dateRange: `Jan – Apr 2023`,
      summary: "Full e-commerce solution with admin, inventory, and payment integrations.",
    },
    reviewer: {
      title: "CTO, FashionCo",
      company: "Retail",
      location: "New York, USA",
      size: `50–100 employees`,
      verified: true,
    },
  },
];

const sectionHeadingStyle = {
  borderLeft: "4px solid #418ED6",
  paddingLeft: "10px",
} as const;

export function TestimonialSection() {
  const sliderRef = useRef<Slider>(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <div
        className="container-page"
        style={{
          backgroundColor: "#ffffffff",
          marginTop: "70px",
          borderRadius: "20px",
          // boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <div className="mb-5 text-center">
          <p
            style={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#666",
              paddingTop: "40px",
            }}
          >
            Reviews
          </p>
          <h2 style={{ fontWeight: 700, fontSize: "2.5rem" }}>What Clients Say about us</h2>
        </div>

        <div
          className="relative"
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoIosArrowBack
            size={40}
            onClick={previous}
            style={{
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#333",
              zIndex: 3,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            }}
          />
          <IoIosArrowForward
            size={40}
            onClick={next}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#333",
              zIndex: 3,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            }}
          />

          <div style={{ maxWidth: "90%", width: "1100px" }}>
            <Slider ref={sliderRef} {...settings}>
              {reviews.map((item, index) => (
                <div key={index} style={{ margin: "0 10px" }}>
                  <div className="overflow-hidden rounded-xl border-0">
                    <div className="flex items-center justify-between bg-[#212529] px-4 py-3 text-white">
                      <h5 className="mb-0 text-base font-medium">eazisols Reviews</h5>
                    </div>

                    <div className="p-4">
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="md:border-r md:border-[#e0e0e0] md:pr-4">
                          <h6 className="mb-3 text-sm font-bold uppercase" style={sectionHeadingStyle}>
                            Project
                          </h6>
                          <p>
                            <strong>Type:</strong> {item.project.services}
                          </p>
                          <p>
                            <strong>Budget:</strong> {item.project.budget}
                          </p>
                          <p>
                            <strong>Timeline:</strong> {item.project.dateRange}
                          </p>
                          <p>
                            <strong>Summary:</strong> {item.project.summary}
                          </p>
                        </div>

                        <div className="md:border-r md:border-[#e0e0e0] md:pr-4">
                          <h6 className="mb-3 text-sm font-bold uppercase" style={sectionHeadingStyle}>
                            Feedback
                          </h6>
                          <div className="flex" style={{ color: "#FFB400" }}>
                            {[...Array(item.rating)].map((_, i) => (
                              <FaStar key={i} />
                            ))}
                          </div>
                          <p>
                            <strong>Ratings:</strong> Quality: {item.rating} | Schedule: {item.rating} | Cost:{" "}
                            {item.rating} | Refer: {item.rating}
                          </p>
                          <blockquote
                            style={{
                              color: "#418ED6",
                              fontStyle: "italic",
                              margin: "10px 0",
                            }}
                          >
                            &ldquo;{item.review}&rdquo;
                          </blockquote>
                          <p>
                            <strong>Feedback Summary:</strong> {item.feedback}
                          </p>
                          <button
                            type="button"
                            className="rounded px-4 py-2 text-sm font-medium text-white"
                            style={{
                              backgroundColor: "#418ED6",
                              border: "none",
                            }}
                          >
                            Read Full Review
                          </button>
                        </div>

                        <div>
                          <h6 className="mb-3 text-sm font-bold uppercase" style={sectionHeadingStyle}>
                            Reviewer
                          </h6>
                          <p>
                            <strong>Reviewer:</strong> {item.reviewer.title}
                          </p>
                          <p>
                            <strong>Industry:</strong> {item.reviewer.company}
                          </p>
                          <p>
                            <strong>Location:</strong> {item.reviewer.location}
                          </p>
                          <p>
                            <strong>Company Size:</strong> {item.reviewer.size}
                          </p>
                          <p>
                            <strong>Status:</strong>{" "}
                            <span style={{ color: "green", fontWeight: "bold" }}>
                              <FaCheckCircle className="me-1 inline" />{" "}
                              {item.reviewer.verified ? "Verified" : "Unverified"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

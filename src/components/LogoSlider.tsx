import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type ClientLogo = {
  id: number;
  src: string;
  alt: string;
};

/** Client logos — replace or extend from API when backend is ready. */
export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 3, src: "/images/logoPurple3.png", alt: "Logo 3" },
  { id: 5, src: "/images/logoPurple5.png", alt: "Logo 5" },
  { id: 8, src: "/images/automat.png", alt: "Automat" },
  { id: 9, src: "/images/crowd.png", alt: "Crowd" },
  { id: 10, src: "/images/dis.png", alt: "Dis" },
  { id: 12, src: "/images/loubiz.png", alt: "Loubiz" },
  { id: 14, src: "/images/mfg.png", alt: "MFG" },
  { id: 15, src: "/images/mymint.png", alt: "Mymint" },
  { id: 16, src: "/images/noir.png", alt: "Noir" },
  { id: 17, src: "/images/newlogo.png", alt: "pawTrack" },
  { id: 18, src: "/images/order.png", alt: "Order" },
  { id: 19, src: "/images/rocket.png", alt: "Rocket" },
  { id: 20, src: "/images/westilo.png", alt: "Westilo" },
  { id: 23, src: "/images/landbridge.png", alt: "LandBridge" },
  { id: 7, src: "/images/alkaios.png", alt: "Alkaios" },
  { id: 11, src: "/images/kinoki.png", alt: "Kinoki" },
  { id: 13, src: "/images/maxlife.png", alt: "Maxlife" },
  { id: 21, src: "/images/westland.png", alt: "Westland" },
  { id: 22, src: "/images/jerry.png", alt: "Jerry" },
  { id: 24, src: "/images/offthe.png", alt: "OffTheHook" },
  { id: 25, src: "/images/rolling.png", alt: "RollingLagon" },
  { id: 26, src: "/images/tip.png", alt: "TIB" },
  { id: 27, src: "/images/todays.png", alt: "DigitalAzari" },
];

const sliderSettings = {
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3800,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  dots: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 3800,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 3800,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
  ],
};

export function LogoSlider({ logos = CLIENT_LOGOS }: { logos?: ClientLogo[] }) {
  return (
    <section className="bg-[#f8fafc] py-6">
      <div className="[&_.slick-list]:overflow-hidden [&_.slick-slide>div]:flex [&_.slick-slide>div]:h-full [&_.slick-slide>div]:items-center [&_.slick-slide>div]:justify-center [&_.slick-slide>div]:px-4">
        <Slider {...sliderSettings}>
          {logos.map((logo) => (
            <div key={logo.id}>
              <div className="flex h-[100px] items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[140px] max-w-[120px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

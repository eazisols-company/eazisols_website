const processSteps = [
  {
    number: "01",
    title: "Strategy & Discovery",
    description:
      "Every successful product begins with clarity. We sit down with you to map out your vision, define the must-have features, and set priorities for your first release. By the end of this phase, we're aligned on goals, roadmap, and success metrics.",
    image: "/images/Discover.png",
  },
  {
    number: "02",
    title: "Experience Design",
    description:
      "Great products are built around people. We start with user journeys and wireframes, then craft intuitive, polished designs for each screen or page. This is where your idea starts to take shape visually.",
    image: "/images/UIUX.png",
  },
  {
    number: "03",
    title: "Front-End Development",
    description:
      "Designs turn into reality as our developers code the interface. You'll see interactive previews early, giving you a chance to experience your product firsthand and share feedback before we move further.",
    image: "/images/frontend.png",
  },
  {
    number: "04",
    title: "Back-End Development",
    description:
      "Here's where the real engine comes alive. From databases to APIs, we code the features that power your product. Regular updates keep you in the loop so you can track progress as we build.",
    image: "/images/backend.png",
  },
  {
    number: "05",
    title: "Testing & Refinement",
    description:
      "Before launch, we put your product through rigorous testing, functional, performance, and cross-device. Bugs are expected, but we eliminate them early so your users enjoy a smooth experience from day one.",
    image: "/images/testing.png",
  },
  {
    number: "06",
    title: "Launch Day",
    description:
      "With everything tested and approved, it's time to go live. Mobile apps are submitted to Apple and Google for review, while websites are deployed directly to servers. We handle the technical side, you get to celebrate your first release.",
    image: "/images/Launch.png",
  },
  {
    number: "07",
    title: "Growth & Support",
    description:
      "A launch is just the beginning. We provide ongoing maintenance, updates, and enhancements so your product keeps evolving with your business and your users.",
    image: "/images/Growth.png",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-[36px] font-bold text-ink md:text-[40px]">
            90 Days Launch
          </h2>
        </div>

        <div className="relative mx-auto max-w-[1110px]">
          <div className="absolute left-1/2 top-2 hidden h-full w-[2px] -translate-x-1/2 bg-[#418ED6] md:block" />

          <div className="space-y-10 md:space-y-4">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.number} className="relative">
                  <div className="absolute left-1/2 top-0 z-10 hidden h-[50px] w-[50px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#418ED6] bg-white text-2xl font-bold text-[#418ED6] md:flex">
                    {step.number}
                  </div>

                  <div className="grid items-center gap-8 md:grid-cols-2">
                    {isEven ? (
                      <>
                        <div className="order-2 hidden justify-center md:flex">
                          <div className="p-5 transition-transform duration-300 hover:-translate-y-1">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="h-auto max-w-full drop-shadow-[0_4px_8px_rgba(14,165,233,0.15)]"
                              width={300}
                              height={200}
                            />
                          </div>
                        </div>

                        <div className="order-1 md:pr-20">
                          <TimelineText step={step} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="hidden justify-start md:flex">
                          <div className=" transition-transform duration-300 hover:-translate-y-1">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="h-auto max-w-full drop-shadow-[0_4px_8px_rgba(14,165,233,0.15)]"
                              width={300}
                              height={200}
                            />
                          </div>
                        </div>

                        <div className="md:pl-20">
                          <TimelineText step={step} />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mb-3 flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-[#418ED6] bg-white text-xl font-bold text-[#418ED6] md:hidden">
                    {step.number}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineText({
  step,
}: {
  step: {
    number: string;
    title: string;
    description: string;
    image: string;
  };
}) {
  return (
    <div className="max-w-[400px] px-2 py-5 text-left">
      <h3 className="text-[28px] font-bold text-[#333] md:text-[32px]">
        {step.title}
      </h3>
      <p className="mt-3 leading-relaxed text-[#666]">{step.description}</p>
    </div>
  );
}
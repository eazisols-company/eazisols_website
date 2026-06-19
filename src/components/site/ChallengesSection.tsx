const challenges = [
  {
    icon: "/technical.svg",
    title: "No technical skills?",
    description:
      "You have no experience developing software and no code tools are too confusing or limited in their functionality",
  },
  {
    icon: "/price.svg",
    title: "High agency prices?",
    description:
      "Sick of big agencies treating you like numbers and trying to get as much money from you as possible",
  },
  {
    icon: "/house.svg",
    title: "Slow in-house team?",
    description:
      "Hiring developers, designers, product managers, QA engineer takes months and costs way more than you can afford",
  },
  {
    icon: "/talk.svg",
    title: 'You don\'t talk "tech"?',
    description:
      "You don't understand technical jargon and you are not sure what are best practices, or bad coding practices",
  },
];

export function ChallengesSection() {
  return (
    <section className=" py-10 md:py-10">
      <div className="container-page">
        <div className="mb-10 text-center">
          <p className="mb-2 pt-5 text-sm uppercase tracking-[0.05em] text-ink-soft">
            YOU WANT TO START A SAAS STARTUP, BUT...
          </p>

          <h2 className="mb-3 text-3xl font-bold text-ink md:text-5xl">
            Struggling to get started?
          </h2>

          <p className="mx-auto max-w-[800px] text-lg leading-relaxed text-ink-soft">
            Non-technical SaaS founders face numerous challenges, and we are
            here to help you overcome them. Do any of these sound familiar to
            you?
          </p>
        </div>

        <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[3fr_2fr]">
          <div className="grid gap-[13px] pb-4 sm:grid-cols-2">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="rounded-2xl border border-[#9c9fa3] bg-white p-[22px] transition duration-200 hover:-translate-y-1"
              >
                <span className="mb-2.5 block">
                  <img
                    src={challenge.icon}
                    alt={challenge.title}
                    width={30}
                    height={30}
                  />
                </span>

                <h3 className="mb-4 text-xl font-semibold text-[#0f172a]">
                  {challenge.title}
                </h3>

                <p className="m-0 text-[0.95rem] leading-relaxed text-[#64748b]">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden justify-center lg:flex">
            <img
              src="/images/challange.png"
              alt="Challenges Illustration"
              width={400}
              height={400}
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
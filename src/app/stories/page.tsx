import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/backgrounds/SectionCarBackground";

const StoriesPage: React.FC = () => {
  const stories = [
    {
      title: "Track Performance",
      driver: "Mike Rodriguez",
      car: "Porsche 911 GT3",
      track: "Circuit of the Americas",
      improvement: "Optimized Chicane Trajectory",
      quote:
        "The AI showed my heading was too wide. An earlier, smoother turn-in allowed me to apply throttle sooner, finding 0.5s of speed.",
      image: "/images/story1.jpg",
    },
    {
      title: "City Driving Efficiency",
      driver: "Emma Chen",
      car: "Tesla Model 3",
      track: "Downtown Commute",
      improvement: "Custom Multi-Block Segment",
      quote:
        "Overlap compared different routes to my office. Turns out, avoiding the 4th street merge at 8:00 AM saves me 12 minutes on average.",
      image: "/images/story2.jpg",
    },
    {
      title: "Highway Optimization",
      driver: "Alex Thompson",
      car: "BMW M3",
      track: "I-95 Long-Haul",
      improvement: "Consistent Average Speed",
      quote:
        "Evaluating my merging speed and lane-choice over long highway stretches has heavily optimized my fuel efficiency and arrival time.",
      image: "/images/story3.jpg",
    },
  ];

  return (
    <Container className="py-20">
      <Section
        id="racing-stories"
        title="Optimization Success Stories"
        description="Real drivers achieving elite efficiency with Overlap"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 space-y-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {story.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <span className="font-semibold text-foreground">
                        {story.driver}
                      </span>
                      <span className="text-foreground-accent">•</span>
                      <span className="text-foreground-accent">
                        {story.car}
                      </span>
                      <span className="text-foreground-accent">•</span>
                      <span className="text-foreground-accent">
                        {story.track}
                      </span>
                    </div>
                    <div className="bg-gradient-to-r from-[#2D6EB8] to-[#2563D6] text-white px-4 py-2 rounded-full inline-block mb-4">
                      {story.improvement}
                    </div>
                    <blockquote className="text-lg text-foreground-accent italic border-l-4 border-[#2D6EB8] pl-4">
                      &quot;{story.quote}&quot;
                    </blockquote>
                  </div>
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-[#2D6EB8]/20 to-[#1E4A80]/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#2D6EB8] to-[#1E4A80] rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            {story.driver
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <p className="text-foreground-accent">{story.car}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="submit-story"
        title="Share Your Telemetry Story"
        description="Have you found the perfect trajectory? We'd love to hear about it!"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Your Data Speaks Volumes
              </h3>
              <p className="text-foreground-accent mb-6">
                Whether you identified a systemic inefficiency or found the
                perfect racing line, your data-driven optimizations inspire our
                community.
              </p>
              <button className="bg-gradient-to-r from-[#2D6EB8] to-[#2563D6] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow">
                Submit Your Analysis
              </button>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default StoriesPage;

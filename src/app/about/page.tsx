import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/SectionCarBackground";

const AboutPage: React.FC = () => {
  return (
    <Container className="py-20">
      <Section
        id="about-overlap"
        title="Formula 1-Level Telemetry for Everyone"
        description="Master Every Segment. Drive Like a Pro."
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <p className="text-foreground-accent text-lg leading-relaxed">
                Overlap turns your smartphone or dedicated telemetry device into
                a professional-grade race engineer. Born from a passion for
                motorsports, we bring precise, AI-driven performance analysis to
                your everyday commute, track days, and highway drives.
              </p>
              <p className="text-foreground-accent text-lg leading-relaxed mt-4">
                By tracking your vehicle&apos;s movement from Point A to Point B
                with surgical precision, we analyze your driving line,
                acceleration, and speed to help you find the fastest, most
                efficient way to navigate any segment. Just hit start, drive
                safely, and let our AI break down your performance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="mission"
        title="Our Mission"
        description="Democratizing racing performance data for every driver"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Precision
              </h3>
              <p className="text-foreground-accent">
                We capture latitude, longitude, and elevation to map a dynamic
                driving line with millisecond clarity.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Accessibility
              </h3>
              <p className="text-foreground-accent">
                Professional-level analytics from your smartphone, eliminating
                the need for expensive F1 setups.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Community
              </h3>
              <p className="text-foreground-accent">
                A connected ecosystem of drivers building their efficiency and
                safely shaving seconds off routines.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="story"
        title="Our Story"
        description="Born from passion, built for precision"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                The Vision
              </h3>
              <p className="text-foreground-accent mb-6">
                Overlap began when our founders realized that professional-level
                timing and analysis tools were inaccessible to most racing
                enthusiasts. We believed that every driver should have access to
                the same level of data analysis that factory teams enjoy,
                directly from a device they already own.
              </p>
              <p className="text-foreground-accent">
                By integrating ISO timestamps with geospatial and kinetic
                mechanics, we built a synchronization engine that accurately
                compares Ghost runs—turning any highway or track loop into a
                masterclass in efficiency.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="team"
        title="Meet Our Team"
        description="Racing enthusiasts building for racers"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "John Driver",
                  role: "CEO & Founder",
                  background:
                    "Former professional driver with 10+ years in motorsports engineering",
                  expertise: "Racing strategy, telemetry systems",
                },
                {
                  name: "Sarah Tech",
                  role: "CTO & Lead Developer",
                  background:
                    "Software architect with experience in real-time data processing",
                  expertise: "Mobile development, AI analytics",
                },
                {
                  name: "Mike Rodriguez",
                  role: "Head of Product",
                  background:
                    "Product manager with a background in automotive technology",
                  expertise: "Machine learning, user experience",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2D6EB8] to-[#1E4A80] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-primary">
                        {member.name}
                      </h3>
                      <p className="text-foreground-accent">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground-accent text-sm mb-3">
                    {member.background}
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">
                      Expertise:
                    </h4>
                    <p className="text-foreground-accent text-sm">
                      {member.expertise}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default AboutPage;

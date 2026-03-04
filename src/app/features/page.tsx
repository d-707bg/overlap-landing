import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/SectionCarBackground";

const FeaturesPage: React.FC = () => {
  return (
    <Container className="py-20">
      <Section
        id="core-features"
        title="AI-Powered Analytics"
        description="Our proprietary AI interprets raw telemetry to optimize your drive"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Segment-by-Segment Breakdown
              </h3>
              <p className="text-foreground-accent">
                Instantly see your time, average speed, and real-time pace for
                any custom-defined route. Whether it&apos;s a highway merge or a
                complex chicane, you know where every second went.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Trajectory Analysis
              </h3>
              <p className="text-foreground-accent">
                Visualize your driving line on a map. By plotting heading,
                latitude, and longitude sequentially, our AI shows where
                you&apos;re losing time through inefficient positioning.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Smart Telemetry Integration
              </h3>
              <p className="text-foreground-accent">
                Use your smartphone&apos;s built-in GPS and IMU, or connect an
                external racing telemetry device for hyper-accurate 10Hz+ data.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Ghost Comparisons
              </h3>
              <p className="text-foreground-accent">
                Overlay your current session against historical bests. See
                exactly where you gained or lost time using precise timestamp
                synchronization.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="technical-architecture"
        title="Technical Data Architecture"
        description="Deep insights powered by highly synchronized data"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Pattern Recognition & Optimization
              </h3>
              <p className="text-foreground-accent mb-4">
                Our AI doesn&apos;t just show raw data—it interprets it. By
                comparing multiple runs, it detects systemic inefficiencies and
                correlates them with speed drops.
              </p>
              <ul className="list-disc list-inside text-foreground-accent space-y-2">
                <li>Detects early braking or late acceleration</li>
                <li>
                  Identifies suboptimal racing lines and provides actionable
                  suggestions
                </li>
                <li>
                  Derives acceleration dynamically from GPS speed (Δv/Δt) or
                  direct IMU reading
                </li>
                <li>
                  Aligns distance-over-time algorithms precisely using ISO/Unix
                  timestamps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default FeaturesPage;

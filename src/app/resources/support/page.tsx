import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/SectionCarBackground";

const SupportPage: React.FC = () => {
  return (
    <Container className="py-20">
      <Section
        id="support"
        title="Telemetry Support Center"
        description="Helping you deploy Formula 1-level analytics"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Technical FAQ
              </h3>
              <div className="space-y-4">
                <div className="border-b border-[#2D6EB8]/20 pb-4">
                  <h4 className="font-semibold text-primary mb-2">
                    How is acceleration measured?
                  </h4>
                  <p className="text-foreground-accent">
                    Acceleration can be obtained directly from your hardware IMU
                    (accelerometer) for high-fidelity g-force readings, or
                    computationally derived by calculating the change in GPS
                    speed over time. This redundancy ensures strict accuracy.
                  </p>
                </div>
                <div className="border-b border-[#2D6EB8]/20 pb-4">
                  <h4 className="font-semibold text-primary mb-2">
                    Why are timestamps so critical?
                  </h4>
                  <p className="text-foreground-accent">
                    Unix/ISO timestamps act as the foundational anchor of our
                    telemetry engine. By synchronizing exact times,
                    distance-over-time algorithms align perfectly, allowing the
                    AI to overlay session data and provide Ghost runs smoothly.
                  </p>
                </div>
                <div className="border-b border-[#2D6EB8]/20 pb-4">
                  <h4 className="font-semibold text-primary mb-2">
                    What data points do you capture?
                  </h4>
                  <p className="text-foreground-accent">
                    We process Latitude (-90 to +90°), Longitude (-180 to
                    +180°), Altitude (meters), Heading (0-360°), Speed (km/h),
                    and Acceleration (m/s²). Cross-referencing these allows us
                    to calculate road incline and movement direction.
                  </p>
                </div>
                <div className="border-b border-[#2D6EB8]/20 pb-4">
                  <h4 className="font-semibold text-primary mb-2">
                    Does it work for city routing?
                  </h4>
                  <p className="text-foreground-accent">
                    Absolutely! You can compare different routes to work to
                    identify which multi-block segment is consistently the
                    fastest at specific times, optimizing fuel consumption and
                    travel time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Contact Engineering Support
              </h3>
              <p className="text-foreground-accent mb-6">
                Have difficulties syncing your external 10Hz+ telemetry data?
                Our team is here to help.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    📧 Technical Support
                  </h4>
                  <p className="text-foreground-accent mb-2">
                    support@overlap.app
                  </p>
                  <p className="text-foreground-accent text-sm">
                    Response within 24 hours on business days
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    💬 Live Chat
                  </h4>
                  <p className="text-foreground-accent mb-2">
                    Available Monday-Friday, 9AM-5PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default SupportPage;

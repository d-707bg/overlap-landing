import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/backgrounds/SectionCarBackground";

const TelemetryPage: React.FC = () => {
  return (
    <Container className="py-20">
      <Section
        id="telemetry"
        title="Real-Time Telemetry"
        description="Monitor your car's performance in real-time"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Live Data Streaming
              </h3>
              <p className="text-foreground-accent mb-6">
                Experience real-time telemetry data streaming directly to your
                device, giving you instant insights into your car&apos;s
                performance.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    10Hz Update Rate
                  </h4>
                  <p className="text-foreground-accent">
                    High-frequency data updates ensure you never miss critical
                    performance changes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Low Latency
                  </h4>
                  <p className="text-foreground-accent">
                    Sub-100ms latency from sensor to display for real-time
                    responsiveness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Comprehensive Data Points
              </h3>
              <p className="text-foreground-accent mb-6">
                Monitor dozens of performance parameters simultaneously for
                complete vehicle analysis.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#2D6EB8]/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">
                    Speed & Position
                  </h4>
                  <ul className="text-sm text-foreground-accent space-y-1">
                    <li>• GPS Speed</li>
                    <li>• Wheel Speed</li>
                    <li>• Latitude/Longitude</li>
                    <li>• Altitude</li>
                  </ul>
                </div>
                <div className="bg-[#2D6EB8]/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">G-Forces</h4>
                  <ul className="text-sm text-foreground-accent space-y-1">
                    <li>• Lateral G-Force</li>
                    <li>• Longitudinal G-Force</li>
                    <li>• Combined G-Force</li>
                    <li>• G-Force Distribution</li>
                  </ul>
                </div>
                <div className="bg-[#2D6EB8]/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">
                    Engine Data
                  </h4>
                  <ul className="text-sm text-foreground-accent space-y-1">
                    <li>• RPM</li>
                    <li>• Throttle Position</li>
                    <li>• Engine Temperature</li>
                    <li>• Oil Pressure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Customizable Dashboards
              </h3>
              <p className="text-foreground-accent mb-6">
                Create personalized telemetry displays that show exactly what
                you need to see.
              </p>
              <ul className="list-disc list-inside text-foreground-accent space-y-2">
                <li>Drag-and-drop widget system</li>
                <li>Multiple dashboard layouts</li>
                <li>Custom gauge designs</li>
                <li>Color-coded alerts and warnings</li>
                <li>Historical data overlay</li>
                <li>Split-screen comparison mode</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Data Recording & Playback
              </h3>
              <p className="text-foreground-accent mb-6">
                Record every session and replay your telemetry data for detailed
                analysis.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Session Recording
                  </h4>
                  <p className="text-foreground-accent">
                    Automatic recording of all telemetry data with timestamps
                    for later analysis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Data Export
                  </h4>
                  <p className="text-foreground-accent">
                    Export telemetry data in multiple formats for external
                    analysis tools.
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

export default TelemetryPage;

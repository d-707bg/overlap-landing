import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/SectionCarBackground";

const TechnologyPage: React.FC = () => {
  return (
    <Container className="py-20">
      <Section
        id="technology"
        title="Our Technology"
        description="Cutting-edge technology powering your performance"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Advanced GPS Technology</h3>
              <p className="text-foreground-accent mb-6">
                Our proprietary GPS processing algorithms deliver unprecedented accuracy for racing applications.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Multi-Constellation Support</h4>
                  <p className="text-foreground-accent">
                    Utilizes GPS, GLONASS, Galileo, and BeiDou satellites for maximum accuracy and reliability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">RTK Capable</h4>
                  <p className="text-foreground-accent">
                    Real-time Kinematic processing for centimeter-level positioning accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Machine Learning Analytics</h3>
              <p className="text-foreground-accent mb-6">
                AI-powered analysis that learns from your driving style and provides personalized insights.
              </p>
              <ul className="list-disc list-inside text-foreground-accent space-y-2">
                <li>Predictive lap time calculations</li>
                <li>Optimal racing line identification</li>
                <li>Performance bottleneck detection</li>
                <li>Personalized improvement recommendations</li>
                <li>Anomaly detection in driving patterns</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Cloud Infrastructure</h3>
              <p className="text-foreground-accent mb-6">
                Scalable, secure cloud infrastructure ensuring your data is always available and protected.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#2D6EB8]/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">🔒 Security</h4>
                  <p className="text-foreground-accent text-sm">
                    End-to-end encryption and secure data storage
                  </p>
                </div>
                <div className="bg-[#2D6EB8]/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">⚡ Performance</h4>
                  <p className="text-foreground-accent text-sm">
                    Global CDN for fast access anywhere
                  </p>
                </div>
                <div className="bg-[#2D6EB8]/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">📊 Analytics</h4>
                  <p className="text-foreground-accent text-sm">
                    Real-time data processing and visualization
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Sensor Fusion</h3>
              <p className="text-foreground-accent mb-6">
                Combines multiple sensor inputs for comprehensive vehicle dynamics analysis.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">IMU Integration</h4>
                  <p className="text-foreground-accent">
                    Inertial Measurement Units provide precise acceleration and orientation data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">OBD-II Support</h4>
                  <p className="text-foreground-accent">
                    Direct access to vehicle telemetry through standard OBD-II interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Mobile Optimization</h3>
              <p className="text-foreground-accent mb-6">
                Native mobile applications optimized for performance and battery efficiency.
              </p>
              <ul className="list-disc list-inside text-foreground-accent space-y-2">
                <li>Native iOS and Android apps</li>
                <li>Background processing for continuous tracking</li>
                <li>Optimized battery usage</li>
                <li>Offline mode with automatic sync</li>
                <li>Hardware acceleration for smooth graphics</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default TechnologyPage;

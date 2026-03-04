import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/backgrounds/SectionCarBackground";

const MultiDevicePage: React.FC = () => {
  return (
    <Container className="py-20">
      <Section
        id="multi-device"
        title="Multi-Device Support"
        description="Track your performance across all your devices seamlessly"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Universal Compatibility</h3>
              <p className="text-foreground-accent mb-6">
                Overlap works with a wide range of devices, from dedicated racing hardware to everyday smartphones.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Dedicated GPS Devices</h4>
                  <p className="text-foreground-accent">
                    Support for professional-grade GPS timing systems with enhanced accuracy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Smartphones & Tablets</h4>
                  <p className="text-foreground-accent">
                    Full compatibility with iOS and Android devices using built-in GPS sensors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Supported Devices</h3>
              <p className="text-foreground-accent mb-6">
                Comprehensive device support ensures you can use Overlap with your existing equipment.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-[#2D6EB8]/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">📱 Mobile Devices</h4>
                  <ul className="text-sm text-foreground-accent space-y-1">
                    <li>• iPhone (iOS 12+)</li>
                    <li>• Android (8.0+)</li>
                    <li>• iPad & Android Tablets</li>
                  </ul>
                </div>
                <div className="bg-[#2D6EB8]/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">🛰️ GPS Systems</h4>
                  <ul className="text-sm text-foreground-accent space-y-1">
                    <li>• VBOX Sport</li>
                    <li>• Aim Solo 2</li>
                    <li>• RaceCapture/Pro</li>
                  </ul>
                </div>
                <div className="bg-[#2D6EB8]/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">💻 Desktop</h4>
                  <ul className="text-sm text-foreground-accent space-y-1">
                    <li>• Windows (10+)</li>
                    <li>• macOS (10.14+)</li>
                    <li>• Web Browser Access</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Cloud Synchronization</h3>
              <p className="text-foreground-accent mb-6">
                Your data follows you across all devices with seamless cloud synchronization.
              </p>
              <ul className="list-disc list-inside text-foreground-accent space-y-2">
                <li>Automatic backup of all sessions</li>
                <li>Real-time sync across devices</li>
                <li>Offline mode with automatic sync when connected</li>
                <li>Version history and data recovery</li>
                <li>Shared access for team members</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Device-Specific Features</h3>
              <p className="text-foreground-accent mb-6">
                Optimized experience for each device type with tailored interfaces and capabilities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Mobile Optimized</h4>
                  <p className="text-foreground-accent">
                    Touch-friendly interface with simplified controls for on-track use.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Desktop Power</h4>
                  <p className="text-foreground-accent">
                    Advanced analytics and detailed data visualization on larger screens.
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

export default MultiDevicePage;

import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/SectionCarBackground";

const TimeTrackingPage: React.FC = () => {
  return (
    <Container className="py-20">
      <Section
        id="time-tracking"
        title="Millisecond Precision Time Tracking"
        description="Capture every moment of your performance with unparalleled accuracy"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Unmatched Precision</h3>
              <p className="text-foreground-accent mb-6">
                Our time tracking system captures your performance with millisecond accuracy, 
                ensuring you never miss a beat in your pursuit of perfection.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">GPS-Based Timing</h4>
                  <p className="text-foreground-accent">
                    Utilizes advanced GPS technology to track your position with centimeter-level accuracy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Start/Finish Detection</h4>
                  <p className="text-foreground-accent">
                    Automatic detection of start and finish lines with customizable timing points.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Custom Timing Points</h3>
              <p className="text-foreground-accent mb-6">
                Set up unlimited timing points around any track to analyze specific sections and corners.
              </p>
              <ul className="list-disc list-inside text-foreground-accent space-y-2">
                <li>Virtual start/finish lines anywhere on track</li>
                <li>Sector splitting for detailed analysis</li>
                <li>Corner entry and exit timing</li>
                <li>Straight speed measurement zones</li>
                <li>Braking point analysis</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Real-Time Feedback</h3>
              <p className="text-foreground-accent mb-6">
                Get instant feedback on your performance as you drive, allowing for immediate adjustments.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0.001s</div>
                  <p className="text-foreground-accent">Timing Resolution</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10Hz</div>
                  <p className="text-foreground-accent">Update Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">±2cm</div>
                  <p className="text-foreground-accent">Position Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default TimeTrackingPage;

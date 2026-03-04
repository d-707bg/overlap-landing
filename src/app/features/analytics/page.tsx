import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/SectionCarBackground";

const AnalyticsPage: React.FC = () => {
  return (
    <Container className="py-20">
      <Section
        id="analytics"
        title="Advanced Performance Analytics"
        description="Transform raw data into actionable insights"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Session Analysis</h3>
              <p className="text-foreground-accent mb-6">
                Deep dive into your performance with comprehensive session analytics that reveal 
                patterns and opportunities for improvement.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Lap Comparison</h4>
                  <p className="text-foreground-accent">
                    Compare laps side-by-side to identify consistency and areas for improvement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Trend Analysis</h4>
                  <p className="text-foreground-accent">
                    Track your progress over time with detailed performance trends and statistics.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Performance Metrics</h3>
              <p className="text-foreground-accent mb-6">
                Comprehensive metrics covering every aspect of your driving performance.
              </p>
              <ul className="list-disc list-inside text-foreground-accent space-y-2">
                <li>Lap time consistency and variance</li>
                <li>Sector time analysis and optimization</li>
                <li>Speed trace and velocity profiles</li>
                <li>Corner entry and exit speeds</li>
                <li>Braking performance metrics</li>
                <li>Throttle application analysis</li>
                <li>Racing line deviation tracking</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Predictive Analytics</h3>
              <p className="text-foreground-accent mb-6">
                AI-powered predictions help you understand your potential and set realistic goals.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2D6EB8] to-[#1E4A80] rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AI</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Optimal Lap Prediction</h4>
                  <p className="text-foreground-accent text-sm">
                    Calculate your theoretical best lap based on your best sectors
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2D6EB8] to-[#1E4A80] rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">📈</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Performance Forecasting</h4>
                  <p className="text-foreground-accent text-sm">
                    Predict future performance based on current trends
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2D6EB8] to-[#1E4A80] rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">🎯</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Improvement Recommendations</h4>
                  <p className="text-foreground-accent text-sm">
                    Get AI-suggested areas to focus on for maximum improvement
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

export default AnalyticsPage;

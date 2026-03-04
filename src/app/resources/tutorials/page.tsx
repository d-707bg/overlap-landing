import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/SectionCarBackground";

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: "Getting Started with Overlap",
      difficulty: "Beginner",
      duration: "15 min",
      description: "Learn the basics of setting up your device and recording your first session."
    },
    {
      title: "Understanding Telemetry Data",
      difficulty: "Beginner",
      duration: "25 min",
      description: "Master the fundamentals of reading and interpreting telemetry graphs."
    },
    {
      title: "Setting Up Custom Timing Points",
      difficulty: "Intermediate",
      duration: "30 min",
      description: "Create custom sectors and timing points to analyze specific track sections."
    },
    {
      title: "Advanced Data Analysis Techniques",
      difficulty: "Advanced",
      duration: "45 min",
      description: "Deep dive into correlation analysis and performance optimization strategies."
    },
    {
      title: "Multi-Device Synchronization",
      difficulty: "Intermediate",
      duration: "20 min",
      description: "Sync your data across phone, tablet, and desktop for seamless analysis."
    },
    {
      title: "Exporting and Sharing Data",
      difficulty: "Beginner",
      duration: "15 min",
      description: "Learn how to export your sessions and share data with your team."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Container className="py-20">
      <Section
        id="tutorials"
        title="Video Tutorials"
        description="Learn at your own pace with our comprehensive tutorial library"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-xs text-foreground-accent">{tutorial.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{tutorial.title}</h3>
                  <p className="text-foreground-accent text-sm mb-4">{tutorial.description}</p>
                  <button className="w-full bg-gradient-to-r from-[#2D6EB8] to-[#2563D6] text-white py-2 rounded-lg font-medium hover:shadow-lg transition-shadow">
                    Watch Tutorial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="quick-guides"
        title="Quick Guides"
        description="Short guides for common tasks"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10">
              <h3 className="text-xl font-semibold text-primary mb-4">📱 Mobile Setup</h3>
              <ul className="space-y-2 text-foreground-accent">
                <li>• Installing the app</li>
                <li>• Granting permissions</li>
                <li>• First session setup</li>
                <li>• Basic navigation</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10">
              <h3 className="text-xl font-semibold text-primary mb-4">💻 Desktop Analysis</h3>
              <ul className="space-y-2 text-foreground-accent">
                <li>• Accessing web dashboard</li>
                <li>• Viewing session data</li>
                <li>• Exporting reports</li>
                <li>• Sharing with team</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default TutorialsPage;

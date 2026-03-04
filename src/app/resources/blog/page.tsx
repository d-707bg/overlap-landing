import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionCarBackground from "@/components/backgrounds/SectionCarBackground";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "How to Analyze Your First Telemetry Data",
      excerpt: "Learn the basics of reading telemetry data and identifying key performance indicators.",
      date: "March 15, 2024",
      author: "Sarah Tech",
      category: "Tutorial"
    },
    {
      title: "Top 5 Mistakes Time Attack Drivers Make",
      excerpt: "Common errors that cost precious seconds and how to avoid them using data analysis.",
      date: "March 10, 2024",
      author: "John Driver",
      category: "Technique"
    },
    {
      title: "Understanding Tire Wear Through Data",
      excerpt: "How to track tire performance and optimize your strategy for longer sessions.",
      date: "March 5, 2024",
      author: "Alex Thompson",
      category: "Technical"
    },
    {
      title: "The Future of Racing Telemetry",
      excerpt: "Emerging technologies and trends shaping the future of motorsports data analysis.",
      date: "February 28, 2024",
      author: "Mike Rodriguez",
      category: "Industry"
    }
  ];

  return (
    <Container className="py-20">
      <Section
        id="blog"
        title="Racing Insights Blog"
        description="Tips, techniques, and insights from the world of time attack racing"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-[#2D6EB8]/10 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#2D6EB8] bg-[#2D6EB8]/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground-accent">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
                  <p className="text-foreground-accent mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground-accent">By {post.author}</span>
                    <button className="text-[#2D6EB8] hover:text-[#1E4A80] font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="categories"
        title="Browse by Category"
        description="Find content that matters to you"
      >
        <div className="relative">
          <SectionCarBackground />
          <div className="relative z-10">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-[#2D6EB8]/10 text-center">
                <h4 className="font-semibold text-primary mb-2">📊 Tutorials</h4>
                <p className="text-foreground-accent text-sm">Step-by-step guides</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-[#2D6EB8]/10 text-center">
                <h4 className="font-semibold text-primary mb-2">🏁 Technique</h4>
                <p className="text-foreground-accent text-sm">Driving tips & strategies</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-[#2D6EB8]/10 text-center">
                <h4 className="font-semibold text-primary mb-2">🔧 Technical</h4>
                <p className="text-foreground-accent text-sm">Technical deep dives</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-[#2D6EB8]/10 text-center">
                <h4 className="font-semibold text-primary mb-2">📈 Industry</h4>
                <p className="text-foreground-accent text-sm">News & trends</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default BlogPage;

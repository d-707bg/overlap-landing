"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Ivaylo Nedev",
      role: "CEO & Founder",
      background: "Experienced mobile app developer with over 8 years of experience in building scalable applications for iOS and Android platforms. Specialized in creating user-centric mobile solutions with focus on performance and intuitive design.",
      expertise: ["Mobile Development", "UI/UX Design", "Product Strategy"],
      avatar: "IN"
    },
    {
      name: "Daniel Todorov", 
      role: "CTO & Developer",
      background: "AI Developer with deep expertise in machine learning algorithms and data analytics. Passionate about leveraging artificial intelligence to solve complex problems and create intelligent systems that learn and adapt.",
      expertise: ["Machine Learning", "AI Analytics", "UI/UX Design"],
      avatar: "DT"
    },
    {
      name: "Kaloyan Stefanov",
      role: "CTO & Developer",
      background: "Embedded Systems Developer with extensive experience in low-level programming and hardware integration. Specialized in developing efficient firmware and optimizing system performance for resource-constrained environments.",
      expertise: ["Embedded Systems", "Firmware Development", "Hardware Integration"],
      avatar: "KS"
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description: "Founded with a mission to democratize professional racing analytics"
    },
    {
      year: "2023", 
      title: "First Prototype",
      description: "Developed AI-powered telemetry system using smartphone sensors"
    },
    {
      year: "2024",
      title: "Public Launch",
      description: "Released Overlap app with real-time performance analysis"
    }
  ];

  const values = [
    {
      title: "Precision",
      description: "Millisecond-accurate timing and centimeter-level positioning",
      icon: "🎯"
    },
    {
      title: "Accessibility", 
      description: "Professional tools from the device you already own",
      icon: "📱"
    },
    {
      title: "Community",
      description: "Connected ecosystem of drivers improving together",
      icon: "🏁"
    },
    {
      title: "Innovation",
      description: "Cutting-edge AI meets motorsports expertise",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">About Overlap</Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Formula 1-Level Telemetry for Everyone
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Master Every Segment. Drive Like a Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Born from passion, built for precision
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Vision</h3>
                  <p className="text-muted-foreground mb-6">
                    Overlap began when our founders realized that professional-level
                    timing and analysis tools were inaccessible to most racing
                    enthusiasts. We believed that every driver should have access to
                    the same level of data analysis that factory teams enjoy,
                    directly from a device they already own.
                  </p>
                  <p className="text-muted-foreground">
                    By integrating ISO timestamps with geospatial and kinetic
                    mechanics, we built a synchronization engine that accurately
                    compares Ghost runs—turning any highway or track loop into a
                    masterclass in efficiency.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-blue-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10Hz</div>
                    <p className="text-sm text-muted-foreground">Data Processing Rate</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">0.001s</div>
                      <p className="text-xs text-muted-foreground">Timing Precision</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">±2cm</div>
                      <p className="text-xs text-muted-foreground">GPS Accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              From idea to innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <Badge className="w-fit bg-primary text-white">
                    {item.year}
                  </Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              What drives us forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{value.icon}</div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Racing enthusiasts building for racers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.background}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have questions about Overlap? We're here to help you master every segment.
          </p>
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Support Email</h3>
                <a 
                  href="mailto:overlap.contact@yahoo.com"
                  className="text-primary hover:text-blue-600 text-lg font-medium"
                >
                  overlap.contact@yahoo.com
                </a>
                <p className="text-muted-foreground text-sm mt-2">
                  We typically respond within 24 hours on business days
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

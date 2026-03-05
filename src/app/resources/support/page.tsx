import Container from "@/components/Container";
import Section from "@/components/Section";

const SupportPage: React.FC = () => {
  return (
    <Container className="py-20">
      <Section
        id="support"
        title="Contact Support"
        description="Get in touch with our team"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-[#2D6EB8]/10">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              We&apos;re here to help
            </h3>
            <p className="text-foreground-accent mb-8">
              Have questions or need assistance? Reach out to us via email and we&apos;ll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">
                  📧 Email Support
                </h4>
                <a 
                  href="mailto:overlap.contact@yahoo.com" 
                  className="text-primary hover:text-blue-600 text-lg font-medium"
                >
                  overlap.contact@yahoo.com
                </a>
                <p className="text-foreground-accent text-sm mt-2">
                  We typically respond within 24 hours on business days
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-full transition-colors duration-200"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default SupportPage;

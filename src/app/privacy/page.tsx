import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Overlap",
  description: "Learn how Overlap collects, uses, and protects your personal data. Our comprehensive privacy policy explains our data practices.",
  keywords: ["privacy", "policy", "data protection", "GDPR", "cookies", "personal data"],
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, and other contact information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technical Information</h3>
                <p className="text-muted-foreground">
                  We automatically collect certain technical information when you visit our app, 
                  including your IP address, browser type, device information, and usage data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Telemetry Data</h3>
                <p className="text-muted-foreground">
                  When you use our tracking features, we collect GPS coordinates, speed data, 
                  timing information, and vehicle performance metrics to provide our analytics services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>• To provide and maintain our telemetry and analytics services</li>
                <li>• To personalize your experience and improve our services</li>
                <li>• To communicate with you about your account and our services</li>
                <li>• To analyze usage patterns and optimize performance</li>
                <li>• To ensure the security and integrity of our platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  Required for basic site functionality and security. These cannot be disabled.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  Help us understand how visitors interact with our site by collecting and reporting information anonymously.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                <p className="text-muted-foreground">
                  Used to track visitors across websites to display relevant advertisements.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• With service providers who assist in operating our platform</li>
                <li>• When required by law or to protect our rights</li>
                <li>• In connection with a business transaction (merger, acquisition, etc.)</li>
                <li>• With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Under GDPR and other privacy regulations, you have the following rights:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Access:</strong> Request access to your personal data</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate data</li>
                <li>• <strong>Deletion:</strong> Request deletion of your personal data</li>
                <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
                <li>• <strong>Objection:</strong> Object to processing of your data</li>
                <li>• <strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the internet is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or want to exercise your rights, 
                please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>• Email: privacy@overlap.app</p>
                <p>• Website: overlap.app/contact</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

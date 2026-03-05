"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CookieConsentProps {
  onAccept?: () => void;
  onReject?: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-cookies', 'true');
    setIsVisible(false);
    onAccept?.();
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('analytics-cookies', 'false');
    setIsVisible(false);
    onReject?.();
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto p-4">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Cookie Consent</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                  By continuing to use our site, you agree to our use of cookies.
                </p>
                
                {showDetails && (
                  <div className="space-y-3 p-4 bg-gray-50 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Essential Cookies</h4>
                        <p className="text-xs text-muted-foreground">
                          Required for the site to function properly
                        </p>
                      </div>
                      <span className="text-sm text-green-600 font-medium">Always Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Analytics Cookies</h4>
                        <p className="text-xs text-muted-foreground">
                          Help us understand how visitors interact with our site
                        </p>
                      </div>
                      <span className="text-sm text-blue-600 font-medium">Optional</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Marketing Cookies</h4>
                        <p className="text-xs text-muted-foreground">
                          Used to deliver advertisements relevant to you
                        </p>
                      </div>
                      <span className="text-sm text-blue-600 font-medium">Optional</span>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleCustomize}
                  >
                    {showDetails ? 'Hide Details' : 'Customize'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleReject}
                  >
                    Reject All
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={handleAccept}
                    className="bg-primary text-white"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookieConsent;

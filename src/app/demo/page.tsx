"use client";

import React from 'react';

export default function DemoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-2">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          We are working hard to bring you an amazing demo experience. Stay tuned!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-full transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Want to be notified when we launch? 
            <a href="/contact" className="text-primary hover:text-blue-600 ml-1">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

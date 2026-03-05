"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. The page might have been removed or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-full transition-colors duration-200"
          >
            Back to Home
          </Link>
          <Link 
            href="/resources/support" 
            className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-full transition-colors duration-200"
          >
            Contact Support
          </Link>
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Or try searching for what you need
          </p>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SMSIndia Blog team. We welcome your feedback, suggestions, and inquiries.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-8">
          We value your feedback and would love to hear from you. Whether you have questions,
          suggestions, or just want to say hello, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xl font-bold">Email</h2>
            </div>
            <p className="text-gray-700">
              For general inquiries and feedback:
            </p>
            <a
              href="mailto:contact@smsindiablog.com"
              className="text-blue-600 hover:underline font-medium"
            >
              contact@smsindiablog.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h2 className="text-xl font-bold">Editorial</h2>
            </div>
            <p className="text-gray-700">
              For content submissions and partnerships:
            </p>
            <a
              href="mailto:editorial@smsindiablog.com"
              className="text-blue-600 hover:underline font-medium"
            >
              editorial@smsindiablog.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xl font-bold">Business</h2>
            </div>
            <p className="text-gray-700">
              For advertising and business inquiries:
            </p>
            <a
              href="mailto:business@smsindiablog.com"
              className="text-blue-600 hover:underline font-medium"
            >
              business@smsindiablog.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h2 className="text-xl font-bold">Support</h2>
            </div>
            <p className="text-gray-700">
              For technical issues and support:
            </p>
            <a
              href="mailto:support@smsindiablog.com"
              className="text-blue-600 hover:underline font-medium"
            >
              support@smsindiablog.com
            </a>
          </div>
        </div>

        <section className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Content Submission Guidelines</h2>
          <p className="text-gray-700 mb-4">
            Interested in contributing to SMSIndia Blog? We welcome quality submissions that align with our content guidelines:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Original, well-researched content focused on India</li>
            <li>Minimum 1000 words with proper structure and formatting</li>
            <li>Include relevant sources and citations</li>
            <li>Follow SEO best practices</li>
            <li>Comply with our editorial standards and policies</li>
            <li>Respect copyright and intellectual property rights</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Please send your submissions to{' '}
            <a href="mailto:editorial@smsindiablog.com" className="text-blue-600 hover:underline font-medium">
              editorial@smsindiablog.com
            </a>
            {' '}with the subject line "Content Submission".
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">How long does it take to get a response?</h3>
              <p className="text-gray-700">
                We aim to respond to all inquiries within 2-3 business days.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Can I suggest topics for articles?</h3>
              <p className="text-gray-700">
                Absolutely! We welcome topic suggestions. Please send them to our editorial team.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Do you accept guest posts?</h3>
              <p className="text-gray-700">
                Yes, we accept guest posts that meet our quality standards and editorial guidelines.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">How can I report an error in an article?</h3>
              <p className="text-gray-700">
                Please email us with the article URL and details of the error. We appreciate your help in maintaining accuracy.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
          <p className="text-gray-700">
            Monday - Friday: 9:00 AM - 6:00 PM IST<br />
            Saturday - Sunday: Closed
          </p>
          <p className="text-gray-700 mt-4 text-sm">
            * Email support is available 24/7. We will respond during business hours.
          </p>
        </section>
      </div>
    </div>
  );
}

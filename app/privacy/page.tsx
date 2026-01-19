import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for SMSIndia Blog - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      
      <p className="text-gray-600 mb-8">
        <strong>Last Updated:</strong> January 19, 2026
      </p>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to SMSIndia Blog ("we," "our," or "us"). We respect your privacy and are committed
            to protecting your personal data. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
          <p className="text-gray-700 mb-4">
            When you visit our website, we automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Referring/exit pages</li>
            <li>Date and time stamps</li>
            <li>Pages visited and time spent on pages</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h3>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to enhance your browsing experience.
            Cookies are small data files stored on your device. We use:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements (Google AdSense)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To provide and maintain our website</li>
            <li>To improve user experience and website functionality</li>
            <li>To analyze website usage and trends</li>
            <li>To deliver personalized content and advertisements</li>
            <li>To detect and prevent fraud or abuse</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Google AdSense</h2>
          <p className="text-gray-700 mb-4">
            We use Google AdSense to display advertisements on our website. Google AdSense uses cookies
            to serve ads based on your prior visits to our website or other websites. You may opt out of
            personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Ads Settings
            </a>.
          </p>
          <p className="text-gray-700">
            For more information about how Google uses data, please visit{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google's Privacy & Terms
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>
          <p className="text-gray-700">
            Third-party services we use include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Google Analytics - For website analytics</li>
            <li>Google AdSense - For advertisements</li>
            <li>Vercel - For hosting and content delivery</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational security measures to protect your
            information. However, no method of transmission over the internet is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Access:</strong> Request access to your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
            <li><strong>Cookie Management:</strong> Control cookie preferences through your browser settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
          <p className="text-gray-700">
            Our website is not intended for children under 13 years of age. We do not knowingly collect
            personal information from children. If you believe we have collected information from a child,
            please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
          <p className="text-gray-700">
            Your information may be transferred to and processed in countries other than your country
            of residence. We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. The updated version will be indicated
            by the "Last Updated" date at the top of this page. We encourage you to review this policy
            periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href="mailto:privacy@smsindiablog.com" className="text-blue-600 hover:underline">
                privacy@smsindiablog.com
              </a>
            </p>
          </div>
        </section>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="text-sm text-gray-600">
            By using SMSIndia Blog, you acknowledge that you have read and understood this Privacy Policy
            and agree to its terms.
          </p>
        </div>
      </div>
    </div>
  );
}

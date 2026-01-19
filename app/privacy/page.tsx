export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for SMS India Blog - Learn how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  const lastUpdated = '2026-01-19'

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            SMS India Blog ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
          <p className="text-gray-700 mb-4">
            When you visit our website, we automatically collect certain information about 
            your device, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h3>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our website 
            and store certain information. You can instruct your browser to refuse all cookies 
            or to indicate when a cookie is being sent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Provide, maintain, and improve our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new features and functionality</li>
            <li>Display relevant advertisements (Google AdSense)</li>
            <li>Communicate with you about our services</li>
            <li>Detect and prevent fraud and security issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          
          <h3 className="text-xl font-semibold mb-3">Google AdSense</h3>
          <p className="text-gray-700 mb-4">
            We use Google AdSense to display advertisements. Google may use cookies to serve 
            ads based on your prior visits to our website or other websites. You can opt out 
            of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">
              Google Ads Settings
            </a>.
          </p>

          <h3 className="text-xl font-semibold mb-3">Analytics</h3>
          <p className="text-gray-700 mb-4">
            We may use third-party analytics services to monitor and analyze the use of our 
            website. These services may use cookies and similar technologies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to protect your 
            personal information. However, no method of transmission over the Internet or 
            electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have certain rights regarding your personal 
            information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to object to processing of your information</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our website is not intended for children under 13 years of age. We do not 
            knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the "Last 
            updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </section>
      </div>
    </div>
  )
}

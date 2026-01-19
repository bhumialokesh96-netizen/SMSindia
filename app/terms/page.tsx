import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for SMSIndia Blog - Review our terms and conditions for using our website.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      
      <p className="text-gray-600 mb-8">
        <strong>Last Updated:</strong> January 19, 2026
      </p>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using SMSIndia Blog ("Website"), you agree to be bound by these Terms of Service
            ("Terms"). If you disagree with any part of these terms, you may not access the Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
          
          <h3 className="text-xl font-semibold mb-3">Permitted Use</h3>
          <p className="text-gray-700 mb-4">
            You may use our Website for lawful purposes only. You agree to use the Website in accordance
            with all applicable laws and regulations.
          </p>

          <h3 className="text-xl font-semibold mb-3">Prohibited Activities</h3>
          <p className="text-gray-700 mb-4">You agree NOT to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use the Website for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the Website's operation</li>
            <li>Transmit viruses, malware, or harmful code</li>
            <li>Scrape, copy, or reproduce content without permission</li>
            <li>Impersonate any person or entity</li>
            <li>Engage in any form of harassment or abuse</li>
            <li>Violate intellectual property rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-semibold mb-3">Our Content</h3>
          <p className="text-gray-700 mb-4">
            Unless otherwise stated, SMSIndia Blog owns the intellectual property rights for all content
            on this Website. All intellectual property rights are reserved.
          </p>

          <h3 className="text-xl font-semibold mb-3">Limited License</h3>
          <p className="text-gray-700 mb-4">
            You may view, download, and print pages from the Website for your personal, non-commercial use,
            subject to the following restrictions:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You must not republish material from this Website without permission</li>
            <li>You must not sell, rent, or sub-license material from the Website</li>
            <li>You must not reproduce, duplicate, or copy material for commercial purposes</li>
            <li>You must not redistribute content from this Website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User Content</h2>
          <p className="text-gray-700 mb-4">
            If you submit content to our Website (such as comments or contributions), you grant us a
            non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such
            content in connection with operating the Website.
          </p>
          <p className="text-gray-700">
            You represent and warrant that:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You own or have the necessary rights to the content you submit</li>
            <li>Your content does not violate any third-party rights</li>
            <li>Your content does not contain unlawful or objectionable material</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
          <p className="text-gray-700">
            Our Website may contain links to third-party websites or services that are not owned or
            controlled by SMSIndia Blog. We have no control over and assume no responsibility for the
            content, privacy policies, or practices of any third-party websites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Advertising</h2>
          <p className="text-gray-700 mb-4">
            We use Google AdSense to display advertisements on our Website. These advertisements are
            served by Google and may be based on your browsing history and preferences.
          </p>
          <p className="text-gray-700">
            We are not responsible for the content of advertisements or the products/services advertised.
            Any transactions between you and advertisers are solely between you and the advertiser.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
          <p className="text-gray-700 mb-4">
            The Website is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties,
            expressed or implied, regarding:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The accuracy, reliability, or completeness of content</li>
            <li>The availability or uninterrupted access to the Website</li>
            <li>The correction of errors or defects</li>
            <li>The absence of viruses or harmful components</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-gray-700">
            To the maximum extent permitted by law, SMSIndia Blog shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
            whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
            intangible losses resulting from:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Your access to or use of (or inability to access or use) the Website</li>
            <li>Any conduct or content of any third party on the Website</li>
            <li>Any content obtained from the Website</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
          <p className="text-gray-700">
            You agree to indemnify and hold harmless SMSIndia Blog and its officers, directors, employees,
            and agents from any claims, damages, losses, liabilities, and expenses (including legal fees)
            arising out of your use of the Website or violation of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Modifications to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms at any time. We will notify you of any changes by
            posting the new Terms on this page and updating the "Last Updated" date. Your continued use
            of the Website after such modifications constitutes your acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <p className="text-gray-700">
            We may terminate or suspend your access to the Website immediately, without prior notice or
            liability, for any reason, including breach of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
          <p className="text-gray-700">
            These Terms shall be governed by and construed in accordance with the laws of India, without
            regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Severability</h2>
          <p className="text-gray-700">
            If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions
            will remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href="mailto:legal@smsindiablog.com" className="text-blue-600 hover:underline">
                legal@smsindiablog.com
              </a>
            </p>
          </div>
        </section>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="text-sm text-gray-600">
            By using SMSIndia Blog, you acknowledge that you have read, understood, and agree to be bound
            by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}

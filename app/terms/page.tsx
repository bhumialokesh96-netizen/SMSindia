export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for SMS India Blog - Please read these terms carefully.',
}

export default function TermsPage() {
  const lastUpdated = '2026-01-19'

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using SMS India Blog, you agree to be bound by these Terms of 
            Service. If you disagree with any part of these terms, you may not access the 
            website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="text-gray-700 mb-4">
            Permission is granted to temporarily download one copy of the materials on SMS 
            India Blog for personal, non-commercial transitory viewing only. This is the 
            grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software on the website</li>
            <li>Remove any copyright or proprietary notations from the materials</li>
            <li>Transfer the materials to another person or mirror the materials on any server</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The content, organization, graphics, design, and other matters related to SMS 
            India Blog are protected under applicable copyrights and other proprietary laws. 
            Copying, redistribution, use or publication of any such matters or any part of 
            the website is prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Content</h2>
          <p className="text-gray-700 mb-4">
            If we allow user-generated content or comments in the future, you are responsible 
            for any content you post. You grant us a non-exclusive, royalty-free, worldwide 
            license to use, reproduce, and display such content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            The materials on SMS India Blog are provided on an 'as is' basis. We make no 
            warranties, expressed or implied, and hereby disclaim and negate all other 
            warranties including, without limitation, implied warranties or conditions of 
            merchantability, fitness for a particular purpose, or non-infringement of 
            intellectual property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitations of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall SMS India Blog or its suppliers be liable for any damages 
            (including, without limitation, damages for loss of data or profit, or due to 
            business interruption) arising out of the use or inability to use the materials 
            on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Accuracy of Materials</h2>
          <p className="text-gray-700 mb-4">
            The materials appearing on SMS India Blog could include technical, typographical, 
            or photographic errors. We do not warrant that any of the materials on the website 
            are accurate, complete, or current. We may make changes to the materials at any 
            time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Links to Third-Party Websites</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites or services that are not 
            owned or controlled by SMS India Blog. We have no control over, and assume no 
            responsibility for, the content, privacy policies, or practices of any third-party 
            websites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
          <p className="text-gray-700 mb-4">
            We may revise these Terms of Service at any time without notice. By using this 
            website, you agree to be bound by the current version of these Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These terms and conditions are governed by and construed in accordance with the 
            laws of India, and you irrevocably submit to the exclusive jurisdiction of the 
            courts in that location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us.
          </p>
        </section>
      </div>
    </div>
  )
}

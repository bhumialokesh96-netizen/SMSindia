export const metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for SMS India Blog - Learn about how we use cookies.',
}

export default function CookiesPage() {
  const lastUpdated = '2026-01-19'

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
          <p className="text-gray-700 mb-4">
            Cookies are small text files that are stored on your device (computer, tablet, or 
            mobile) when you visit a website. They help the website remember information about 
            your visit, making it easier to visit the site again and making the site more 
            useful to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p className="text-gray-700 mb-4">
            SMS India Blog uses cookies to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Understand and save your preferences for future visits</li>
            <li>Compile aggregate data about site traffic and interactions</li>
            <li>Provide better site experiences and tools in the future</li>
            <li>Serve relevant advertisements through Google AdSense</li>
            <li>Analyze website performance and user behavior</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies are necessary for the website to function properly. They enable 
            basic functions like page navigation and access to secure areas of the website.
          </p>

          <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies help us understand how visitors interact with our website by 
            collecting and reporting information anonymously. This helps us improve our 
            website's performance.
          </p>

          <h3 className="text-xl font-semibold mb-3">Advertising Cookies</h3>
          <p className="text-gray-700 mb-4">
            These cookies are used to deliver advertisements that are relevant to you and 
            your interests. They are also used to limit the number of times you see an 
            advertisement and to measure the effectiveness of advertising campaigns.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          
          <h3 className="text-xl font-semibold mb-3">Google AdSense</h3>
          <p className="text-gray-700 mb-4">
            We use Google AdSense to display advertisements. Google uses cookies to serve 
            ads based on your prior visits to our website or other websites on the Internet. 
            Google's use of advertising cookies enables it and its partners to serve ads based 
            on your visit to our site and/or other sites.
          </p>
          <p className="text-gray-700 mb-4">
            You may opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">
              Ads Settings
            </a>.
          </p>

          <h3 className="text-xl font-semibold mb-3">Analytics Services</h3>
          <p className="text-gray-700 mb-4">
            We may use third-party analytics services that use cookies to collect information 
            about how visitors use our website. This information is used to compile reports 
            and help us improve the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p className="text-gray-700 mb-4">
            You can control and manage cookies in various ways:
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
          <p className="text-gray-700 mb-4">
            Most browsers allow you to refuse or accept cookies. The method for doing so 
            varies from browser to browser. Please check your browser's help menu for 
            information on how to change your cookie preferences.
          </p>

          <h3 className="text-xl font-semibold mb-3">Google Ads Settings</h3>
          <p className="text-gray-700 mb-4">
            You can manage your Google Ads settings at{' '}
            <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">
              https://www.google.com/settings/ads
            </a>.
          </p>

          <h3 className="text-xl font-semibold mb-3">Opt-Out Tools</h3>
          <p className="text-gray-700 mb-4">
            You can opt out of personalized advertising from Google and other participating 
            companies through the Network Advertising Initiative's opt-out page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Impact of Disabling Cookies</h2>
          <p className="text-gray-700 mb-4">
            Please note that if you disable cookies, some features of our website may not 
            function properly. Some services and features may not work as intended.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our 
            practices or for other operational, legal, or regulatory reasons. Please revisit 
            this page periodically to stay informed about our use of cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about our use of cookies, please contact us.
          </p>
        </section>
      </div>
    </div>
  )
}

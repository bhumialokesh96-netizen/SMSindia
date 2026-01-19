import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SMSIndia Blog, our mission, and our commitment to delivering quality content about India.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About SMSIndia Blog</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SMSIndia Blog is dedicated to bringing you the most relevant and trending content
            about India. We cover a wide range of topics including technology, culture, travel,
            business, and more, all with a focus on what matters to Indians.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to create a platform where readers can discover insightful articles,
            stay updated with trends, and learn about various aspects of life in India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Trending topics and analysis focused on India</li>
            <li>In-depth guides and how-to articles</li>
            <li>Technology updates and digital transformation insights</li>
            <li>Travel guides to explore India</li>
            <li>Business and startup ecosystem coverage</li>
            <li>Cultural insights and lifestyle content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Quality Content</h3>
              <p className="text-gray-700">
                We prioritize accuracy, relevance, and depth in every article we publish.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">User-Centric</h3>
              <p className="text-gray-700">
                Our content is designed with our readers in mind, addressing their interests and needs.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Transparency</h3>
              <p className="text-gray-700">
                We maintain editorial independence and clearly disclose any partnerships or affiliations.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Inclusivity</h3>
              <p className="text-gray-700">
                We celebrate India's diversity and strive to represent multiple perspectives.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Content Guidelines</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All content on SMSIndia Blog adheres to strict quality guidelines:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Factually accurate and well-researched information</li>
            <li>Original content or properly attributed sources</li>
            <li>SEO-optimized for better discoverability</li>
            <li>Mobile-friendly and accessible design</li>
            <li>Regular updates to keep information current</li>
            <li>Compliance with Google AdSense content policies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Have questions, suggestions, or feedback? We'd love to hear from you!
            Visit our <a href="/contact" className="text-blue-600 hover:underline">Contact Page</a> to get in touch.
          </p>
        </section>
      </div>
    </div>
  );
}

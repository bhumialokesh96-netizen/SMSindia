export const metadata = {
  title: 'About Us',
  description: 'Learn more about SMS India Blog and our mission to provide quality technology content.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About SMS India Blog</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            SMS India Blog is dedicated to providing high-quality, insightful content about 
            technology trends, mobile innovations, and digital services in India and beyond. 
            Our mission is to keep our readers informed about the latest developments in the 
            tech world while maintaining the highest standards of journalism and accuracy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Cover</h2>
          <p className="text-gray-700 mb-4">
            We focus on a wide range of topics including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Mobile technology and telecommunications</li>
            <li>Digital services and platforms</li>
            <li>Technology trends and analysis</li>
            <li>Industry news and updates</li>
            <li>Product reviews and comparisons</li>
            <li>Tech tips and how-to guides</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p className="text-gray-700 mb-4">
            We are committed to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Accuracy:</strong> Ensuring all information is verified and reliable</li>
            <li><strong>Transparency:</strong> Being clear about our sources and methodologies</li>
            <li><strong>Quality:</strong> Providing well-researched, engaging content</li>
            <li><strong>Independence:</strong> Maintaining editorial independence in all our work</li>
            <li><strong>User Privacy:</strong> Respecting and protecting our readers' privacy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Editorial Standards</h2>
          <p className="text-gray-700 mb-4">
            Our content goes through rigorous review processes to ensure accuracy and quality. 
            We fact-check all claims, cite credible sources, and update our articles as new 
            information becomes available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            We welcome feedback, suggestions, and inquiries from our readers. If you have 
            questions or would like to contribute to our blog, please reach out to us.
          </p>
        </section>
      </div>
    </div>
  )
}

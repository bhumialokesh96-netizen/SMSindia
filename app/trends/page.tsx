import { getTrendingTopics } from '@/lib/trends'

export const metadata = {
  title: 'Trending Topics',
  description: 'Discover the latest trending topics and search trends in technology.',
}

export const revalidate = 3600 // Revalidate every hour

export default async function TrendsPage() {
  const trendData = await getTrendingTopics('IN')

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Trending Topics</h1>
        <p className="text-xl text-gray-600">
          Stay informed about what's trending in the tech world right now.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2 text-blue-900">About Trend Intelligence</h2>
        <p className="text-blue-800">
          Our trend intelligence system analyzes search patterns and popular topics to help 
          us create content that matters to our readers. This page shows current trending 
          topics that we may cover in upcoming articles.
        </p>
      </div>

      {trendData.trends.length > 0 ? (
        <>
          <div className="mb-6 text-sm text-gray-600">
            Last updated: {trendData.timestamp.toLocaleString('en-IN')}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendData.trends.map((trend, index) => (
              <div key={index} className="card">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold flex-1">{trend.keyword}</h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    #{index + 1}
                  </span>
                </div>
                <div className="text-gray-600 mb-3">
                  Traffic: <span className="font-medium">{trend.formattedValue}</span>
                </div>
                {trend.link && (
                  <a 
                    href={trend.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Learn more →
                  </a>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg mb-4">
            Trend data is currently unavailable.
          </p>
          <p className="text-gray-500">
            This feature analyzes search trends to help identify popular topics. 
            Please check back later.
          </p>
        </div>
      )}

      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">How We Use Trends</h2>
        <p className="text-gray-700 mb-4">
          We analyze trending topics to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Identify timely and relevant content opportunities</li>
          <li>Understand what our audience is interested in</li>
          <li>Create articles that address current technology discussions</li>
          <li>Stay ahead of emerging trends in the tech industry</li>
          <li>Provide value to our readers with up-to-date information</li>
        </ul>
      </div>
    </div>
  )
}

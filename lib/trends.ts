// Google Trends API integration for trend intelligence

interface TrendData {
  keyword: string
  value: number
  formattedValue: string
  link: string
}

interface TrendResult {
  trends: TrendData[]
  timestamp: Date
}

// Cache for trend data (in production, use Redis or similar)
let trendCache: { [key: string]: { data: TrendResult; expiry: number } } = {}

export async function getTrendingTopics(
  geo: string = 'IN',
  category?: string
): Promise<TrendResult> {
  const cacheKey = `${geo}-${category || 'all'}`
  const now = Date.now()

  // Check cache (1 hour expiry)
  if (trendCache[cacheKey] && trendCache[cacheKey].expiry > now) {
    return trendCache[cacheKey].data
  }

  try {
    // Import dynamically to avoid build issues
    const googleTrends = require('google-trends-api')
    
    const results = await googleTrends.dailyTrends({
      geo,
      ...(category && { category }),
    })

    const parsed = JSON.parse(results)
    const trendingSearches = parsed.default?.trendingSearchesDays?.[0]?.trendingSearches || []

    const trends: TrendData[] = trendingSearches.slice(0, 10).map((item: any) => ({
      keyword: item.title?.query || '',
      value: parseInt(item.formattedTraffic?.replace(/[^0-9]/g, '') || '0'),
      formattedValue: item.formattedTraffic || 'N/A',
      link: item.articles?.[0]?.url || '',
    }))

    const result: TrendResult = {
      trends,
      timestamp: new Date(),
    }

    // Cache the result
    trendCache[cacheKey] = {
      data: result,
      expiry: now + 3600000, // 1 hour
    }

    return result
  } catch (error) {
    console.error('Error fetching trends:', error)
    
    // Return empty result on error
    return {
      trends: [],
      timestamp: new Date(),
    }
  }
}

export async function getRelatedSearches(keyword: string, geo: string = 'IN'): Promise<string[]> {
  try {
    const googleTrends = require('google-trends-api')
    
    const results = await googleTrends.relatedQueries({
      keyword,
      geo,
    })

    const parsed = JSON.parse(results)
    const relatedQueries = parsed.default?.rankedList?.[0]?.rankedKeyword || []

    return relatedQueries.slice(0, 10).map((item: any) => item.query)
  } catch (error) {
    console.error('Error fetching related searches:', error)
    return []
  }
}

export async function getInterestOverTime(
  keyword: string,
  startTime?: Date,
  endTime?: Date,
  geo: string = 'IN'
): Promise<{ date: string; value: number }[]> {
  try {
    const googleTrends = require('google-trends-api')
    
    const results = await googleTrends.interestOverTime({
      keyword,
      startTime: startTime || new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
      endTime: endTime || new Date(),
      geo,
    })

    const parsed = JSON.parse(results)
    const timelineData = parsed.default?.timelineData || []

    return timelineData.map((item: any) => ({
      date: item.formattedTime,
      value: item.value?.[0] || 0,
    }))
  } catch (error) {
    console.error('Error fetching interest over time:', error)
    return []
  }
}

// Suggest content topics based on trending searches
export async function suggestContentTopics(
  existingTopics: string[] = [],
  geo: string = 'IN'
): Promise<string[]> {
  const trendResult = await getTrendingTopics(geo)
  
  // Filter out topics already covered
  const suggestions = trendResult.trends
    .map(trend => trend.keyword)
    .filter(keyword => !existingTopics.some(topic => 
      topic.toLowerCase().includes(keyword.toLowerCase()) ||
      keyword.toLowerCase().includes(topic.toLowerCase())
    ))
    .slice(0, 5)

  return suggestions
}

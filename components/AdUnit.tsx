'use client'

import { useEffect } from 'react'

interface AdUnitProps {
  slot: string
  format?: 'horizontal' | 'vertical' | 'rectangle' | 'auto'
  responsive?: boolean
  className?: string
}

export default function AdUnit({ 
  slot, 
  format = 'auto', 
  responsive = true,
  className = '' 
}: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  // Don't render ads in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`bg-gray-100 p-4 text-center text-gray-500 border border-gray-300 rounded ${className}`}>
        <div className="text-sm font-medium">Ad Placement: {slot}</div>
        <div className="text-xs mt-1">Format: {format}</div>
        <div className="text-xs">Ads are disabled in development mode</div>
      </div>
    )
  }

  const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXXX'
  const adSlotId = process.env[`NEXT_PUBLIC_ADSENSE_SLOT_${slot.toUpperCase().replace(/-/g, '_')}`] || '0000000000'

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={adSlotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}

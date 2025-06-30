import ShopFooter from '@/components/frontend/ShopFooter'
import ShopHeader from '@/components/frontend/ShopHeader'
import React from 'react'

export default function ShopFrontLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <ShopHeader />
      {children}
      <ShopFooter />
    </div>
  )
}

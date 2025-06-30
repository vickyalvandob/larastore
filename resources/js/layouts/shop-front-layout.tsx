import ShopFooter from '@/components/frontend/ShopFooter'
import ShopHeader from '@/components/frontend/ShopHeader'
import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function ShopFrontLayout({children}: {children: React.ReactNode}) {
  return (
    <div>

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <ShopHeader />
              {children}
              <ShopFooter />
          </ThemeProvider>

     
    </div>
  )
}

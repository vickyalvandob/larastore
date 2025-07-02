import ProductList from '@/components/frontend/ProductListing'
import ShopBanner from '@/components/frontend/ShopBanner'
import ShopCategories from '@/components/frontend/ShopCategories'
import ShopFrontLayout from '@/layouts/shop-front-layout'
import { CategoryItem } from '@/types/categories'
import React from 'react'

export default function home({categories}: {categories: CategoryItem[]}) {
  
  return (
    <ShopFrontLayout>
      <div className="min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <ShopBanner />
          <div className="py-16">
            <ShopCategories categories={categories} />
          </div>
          <div className="py-16">
            <ProductList />
          </div>
        </div>
      </div>
    </ShopFrontLayout>
  )
}

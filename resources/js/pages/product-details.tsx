"use client";
// ProductDetail.tsx
import { useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  Share2,
  ChevronRight,
  ChevronLeft,
  Check,
} from "lucide-react";
import SimilarProducts from "@/components/frontend/SimilarProducts";
import { SimilarProduct } from "@/types/products";
import ShopFrontLayout from "@/layouts/shop-front-layout";

// Types
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  images: string[];
  colors: {
    name: string;
    value: string;
  }[];
  sizes: string[];
  inStock: boolean;
}




// Mock data
const product: Product = {
  id: "prod-001",
  name: "Premium Ergonomic Office Chair",
  price: 349.99,
  originalPrice: 499.99,
  rating: 4.8,
  reviewCount: 254,
  description:
    "Experience unparalleled comfort with our Premium Ergonomic Office Chair, designed to provide optimal support during long working hours. Featuring adjustable lumbar support, breathable mesh back, and premium cushioning, this chair is the perfect blend of style and functionality for your workspace.",
  features: [
    "Adjustable height and armrests",
    "Breathable mesh back with lumbar support",
    "Premium cushioning with memory foam",
    "360° swivel with smooth-rolling casters",
    "Weight capacity up to 300 lbs",
    "Eco-friendly materials",
  ],
  images: [
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ],
  colors: [
    { name: "Classic Black", value: "#000000" },
    { name: "Platinum Gray", value: "#8e8e8e" },
    { name: "Navy Blue", value: "#15317E" },
    { name: "Burgundy", value: "#8C001A" },
  ],
  sizes: ["Standard", "Large", "Extra Large"],
  inStock: true,
};

const similarProducts: SimilarProduct[] = [
  {
    id: "prod-002",
    name: "Executive High-Back Office Chair",
    price: 299.99,
    rating: 4.6,
    reviewCount: 187,
    image:
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "prod-003",
    name: "Modern Ergonomic Task Chair",
    price: 249.99,
    rating: 4.5,
    reviewCount: 142,
    image:
      "https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "prod-004",
    name: "Designer Mesh Office Chair",
    price: 279.99,
    rating: 4.7,
    reviewCount: 213,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "prod-005",
    name: "Luxury Leather Executive Chair",
    price: 399.99,
    rating: 4.9,
    reviewCount: 176,
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];


const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);


  return (
   <ShopFrontLayout>
     <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Home
        </a>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Office Furniture
        </a>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Chairs
        </a>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="object-cover transition-all duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex space-x-4 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg ${
                  selectedImage === index
                    ? "ring-2 ring-indigo-600"
                    : "ring-1 ring-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} - View ${index + 1}`}
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : i < product.rating
                        ? "text-yellow-400 fill-yellow-400 opacity-50"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">
                {product.rating} ({product.reviewCount} reviews)
              </p>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex items-center">
                <div
                  className={`h-3 w-3 rounded-full ${
                    product.inStock ? "bg-green-500" : "bg-red-500"
                  } mr-2`}
                ></div>
                <p
                  className={`text-sm ${
                    product.inStock ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="mt-2 flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`relative h-10 w-10 rounded-full ${
                      selectedColor === index
                        ? "ring-2 ring-offset-2 ring-indigo-600"
                        : ""
                    }`}
                    title={color.name}
                  >
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: color.value }}
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(index)}
                    className={`flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium ${
                      selectedSize === index
                        ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                        : "border-gray-200 text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <div className="mt-2 flex items-center border border-gray-200 rounded-md w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-500 hover:text-gray-700"
                >
                  -
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-500 hover:text-gray-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 rounded-md bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200">
              <div className="flex items-center justify-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </div>
            </button>
            <button className="rounded-md border border-gray-300 p-3 hover:bg-gray-50 transition-all duration-200">
              <Heart className="h-5 w-5 text-gray-500" />
            </button>
            <button className="rounded-md border border-gray-300 p-3 hover:bg-gray-50 transition-all duration-200">
              <Share2 className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium text-gray-900">
              Product Description
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Features</h3>
            <ul className="mt-2 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* Similar Products */}
      <SimilarProducts similarProducts={similarProducts} />
    </div>
   </ShopFrontLayout>
  );
};

export default ProductDetails;

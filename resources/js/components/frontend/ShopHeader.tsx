import { useState, useEffect } from "react";
import {
  ShoppingBag,
  ChevronDown,
  Plus,
  Minus,
  X,
  Search,
  ShoppingBagIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import { Link } from "@inertiajs/react";
import { ModeToggle } from "../mode-toggle";

// Sample cart items for demonstration
const initialCartItems = [
  {
    id: 1,
    name: "Premium Noise-Cancelling Headphones",
    price: 299.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Smart Watch Ultra Series",
    price: 429.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function ShopHeader() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateQuantity = (id: number, increment: boolean) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: increment
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1),
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-black shadow-md" : "bg-white dark:bg-black"
      }`}
    >
      {/* Top announcements/offers bar */}
      {/* <div className="bg-orange-500 text-white py-2 text-center text-sm font-medium">
        Free worldwide shipping on all orders over $100
      </div> */}

      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between px-4 md:px-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-40">
                <div className="flex items-center">
                   <ShoppingBagIcon/> 
                  <span className="text-2xl ml-2 font-bold tracking-tight">
                  Larastore
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Search bar - directly in the navbar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative flex w-full items-center">
              <Input
                type="search"
                placeholder="Search products, brands and categories"
                className="h-10 w-full rounded-r-none border-r-0"
              />
              <Button
                type="submit"
                className="h-10 rounded-l-none bg-orange-500 hover:bg-orange-600"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-6">
            <ModeToggle />
            <Link
                href={route('login')}
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
            >
                Login
            </Link>
           
            {/* Shopping Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full relative"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-medium text-white">
                      {cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )}
                    </span>
                  )}
                  <span className="sr-only">Shopping Cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col w-full sm:max-w-md">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle className="text-xl">Your Shopping Bag</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-auto py-6">
                  {cartItems.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center">
                      <ShoppingBag className="h-16 w-16 text-slate-300" />
                      <p className="mt-6 text-lg font-medium">
                        Your shopping bag is empty
                      </p>
                      <p className="mt-2 text-sm text-slate-500 text-center max-w-xs">
                        Looks like you haven't added anything to your bag yet.
                      </p>
                      <SheetClose asChild>
                        <Button className="mt-8 bg-orange-500 hover:bg-orange-600">
                          Continue Shopping
                        </Button>
                      </SheetClose>
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="grid grid-cols-[80px_1fr] gap-4"
                        >
                          <div className="aspect-square overflow-hidden rounded-md bg-slate-50">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="grid gap-1">
                            <div className="flex items-start justify-between">
                              <h3 className="font-medium leading-tight">
                                {item.name}
                              </h3>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => removeItem(item.id)}
                              >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Remove</span>
                              </Button>
                            </div>
                            <p className="text-sm text-slate-500">
                              ${item.price.toFixed(2)}
                            </p>
                            <div className="flex items-center gap-3 mt-2">
                              <div className="flex items-center border rounded-full">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full"
                                  onClick={() => updateQuantity(item.id, false)}
                                >
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">
                                    Decrease quantity
                                  </span>
                                </Button>
                                <span className="w-8 text-center text-sm">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full"
                                  onClick={() => updateQuantity(item.id, true)}
                                >
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">
                                    Increase quantity
                                  </span>
                                </Button>
                              </div>
                              <div className="ml-auto font-medium">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {cartItems.length > 0 && (
                  <SheetFooter className="border-t pt-6">
                    <div className="w-full space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">Subtotal</span>
                        <span className="font-medium">
                          ${calculateTotal().toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">Shipping</span>
                        <span className="font-medium">
                          Calculated at checkout
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-t pt-4">
                        <span className="text-base font-semibold">Total</span>
                        <span className="text-base font-semibold">
                          ${calculateTotal().toFixed(2)}
                        </span>
                      </div>
                      <div className="grid gap-2">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 py-6">
                          Proceed to Checkout
                        </Button>
                        <SheetClose asChild>
                          <Button variant="outline" className="w-full">
                            Continue Shopping
                          </Button>
                        </SheetClose>
                      </div>
                      <p className="text-xs text-center text-slate-500 mt-4">
                        Shipping & taxes calculated at checkout
                      </p>
                    </div>
                  </SheetFooter>
                )}
              </SheetContent>
            </Sheet>

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0.5H18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M0 5.5H18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M0 10.5H18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-6 space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search" className="pl-9" />
                  </div>
                  <nav className="grid gap-2">
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 text-base font-medium"
                    >
                      New Arrivals <ChevronDown className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 text-base font-medium"
                    >
                      Women <ChevronDown className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 text-base font-medium"
                    >
                      Men <ChevronDown className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 text-base font-medium"
                    >
                      Accessories <ChevronDown className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 text-base font-medium"
                    >
                      Collections <ChevronDown className="h-4 w-4" />
                    </Link>
                  </nav>
                  <div className="border-t pt-4 mt-6">
                    <nav className="grid gap-1">
                      <Link href="#" className="text-sm py-2">
                        Account
                      </Link>
                      <Link href="#" className="text-sm py-2">
                        Wishlist
                      </Link>
                      <Link href="#" className="text-sm py-2">
                        Order Tracking
                      </Link>
                      <Link href="#" className="text-sm py-2">
                        Help & Contact
                      </Link>
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

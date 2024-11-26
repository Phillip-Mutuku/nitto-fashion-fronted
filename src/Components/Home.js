import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faUser,
  faChevronDown,
  faMobile,
  faLaptop,
  faTv,
  faWatch,
  faHeadphones,
  faCamera,
  faGamepad,
  faPersonSwimming,
  faTrophy,
  faAngleRight,
  faBars
} from '@fortawesome/free-solid-svg-icons';

import { Star, ShoppingCart, Heart, RefreshCw, Eye } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';


const style = document.createElement('style');
style.textContent = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
document.head.appendChild(style);


const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: faMobile, title: 'Cell Phones', hasSubmenu: true },
    { icon: faLaptop, title: 'Computers & Accessories', hasSubmenu: true },
    { icon: faTv, title: 'Television & Video', hasSubmenu: true },
    { icon: faTv, title: 'Smartwatches', hasSubmenu: true },
    { icon: faHeadphones, title: 'Headphones', hasSubmenu: false },
    { icon: faCamera, title: 'Camera & Photo', hasSubmenu: false },
    { icon: faGamepad, title: 'Video Games', hasSubmenu: false },
    { icon: faPersonSwimming, title: 'Sports & Outdoors', hasSubmenu: false },
    { icon: faTrophy, title: 'Best Sellers', badge: 'SAVE %25' }
  ];


  const logos = [
    { name: 'OPPO', image: 'https://download.logo.wine/logo/Oppo/Oppo-Logo.wine.png' },
    { name: 'DELL', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/799px-Dell_Logo.png' },
    { name: 'Lenovo', image: 'https://logos-world.net/wp-content/uploads/2022/07/Lenovo-Symbol.png' },
    { name: 'ASUS', image: 'https://www.cdnlogo.com/logos/a/85/asus.svg' },
    { name: 'SAMSUNG', image: 'https://1000logos.net/wp-content/uploads/2017/06/Font-Samsung-Logo.jpg' },
    { name: 'SONY', image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' }
  ];

  /* Main sections */
  const features = [
    {
      icon: "📦", 
      title: "International Shipment",
      description: "Your orders are shipped seamlessly between countries"
    },
    {
      icon: "↩️",
      title: "Extended 45 day returns",
      description: "You have the right to return your orders within 45 days."
    },
    {
      icon: "🔒", 
      title: "Secure Payment",
      description: "Your payments are secure with our private security network."
    }
  ];

  const bestSellers = [
    {
      id: 1,
      name: "Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB",
      price: 629.99,
      originalPrice: 699.99,
      discount: "11%",
      rating: 5,
      reviews: 1,
      delivery: "2-day Delivery",
      image: "https://gfx3.senetic.com/akeneo-catalog/5/9/8/b/598bfe4a0d383b0c15402028270924213c05acec_1728167_MM6R3_image2.jpg"
    },
    {
      id: 2,
      name: "Apple iPhone 11 64GB Yellow Fully Unlocked",
      price: 438.67,
      originalPrice: 478.67,
      discount: "9%",
      rating: 4,
      reviews: 1,
      delivery: "2-day Delivery",
      specs: ["Fully Unlocked", "iPhone 11 Pro Max", "6.50 in"],
      image: "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-11-64GB-Verizon-GSM-Unlocked-T-Mobile-AT-T-4G-LTE-Smartphone-Yellow-Refurbished_12c9ece0-8cdd-42b9-87cf-801e986ba1b6.222d27fef02d333d556414c72088bc63.jpeg"
    },
    {
      id: 3,
      name: "ASUS VivoBook 15 Thin and Light Laptop 15.6 FHD Display",
      price: 469.00,
      originalPrice: 519.00,
      rating: 5,
      reviews: 1,
      delivery: "2-day Delivery",
      stock: "Only 7 left in stock",
      badge: "TOP PRODUCT",
      image: "https://www.ubuy.ke/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFmc3RKa1VsYUwuX0FDX1NMMTUwMF8uanBn.jpg"
    },
    {
      id: 4,
      name: "Cubitl Smart Watch CT2S Waterproof Fitness Tracker",
      price: 65.00,
      originalPrice: 95.00,
      discount: "32%",
      rating: 3,
      reviews: 1,
      delivery: "2-day Delivery",
      image: "https://qvc.scene7.com/is/image/QVC/e/77/e311377.001"
    }
  ];


  /* Footer */
  const footerLinks = {
    'Make Money with Us': [
      'Sell on Machic',
      'Sell Your Services on Machic',
      'Sell on Machic Business',
      'Sell Your Apps on Machic',
      'Become an Affiate',
      'Advertise Your Products',
      'Self-Publish with Us',
      'Become an Machic Vendor'
    ],
    'Product Categories': [
      'Apple',
      'Camera & Photo',
      'Cell Phones',
      'Computers & Accessories',
      'Headphones',
      'Smartwatches',
      'Sports & Outdoors',
      'Television & Video',
      'Video Games'
    ],
    'Let Us Help You': [
      'Your Account',
      'Your Orders',
      'Returns & Replacements',
      'Shipping Rates & Policies',
      'Refund and Returns Policy',
      'Privacy Policy',
      'Terms and Conditions',
      'Help Center'
    ],
    'Get to Know Us': [
      'Careers',
      'About Machic',
      'Inverstor Relations',
      'Machic Devices',
      'Customer reviews',
      'Privacy Policy',
      'Contact Us'
    ]
  };

  const productTags = [
    'Apple', 'Apple Watch', 'Beats', 'Camera', 'Game Controller', 'HD', 'HTC', 
    'HTC One', 'iMac', 'Ipad', 'ipad 4 16Gb', 'Ipad Mini', 'Keyboard', 'Lenovo', 
    'M8', 'Mackbook Pro M1', 'Mouse', 'Samsung', 'Samsung Galaxy M11', 
    'Samsung Galaxy M31', 'Samsung Galaxy S5 - 64gb', 'Samsung Galaxy Tab 4', 
    'Wireless Speaker'
  ];



  return (
    <>
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2.5 text-sm">
            <div className="flex space-x-6">
              <a href="/about" className="text-gray-600">About Us</a>
              <a href="/account" className="text-gray-600">My account</a>
              <a href="/featured" className="text-gray-600">Featured Products</a>
              <a href="/wishlist" className="text-gray-600">Wishlist</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/tracking" className="text-gray-600">Order Tracking</a>
              <button className="flex items-center text-gray-600">
                English <FontAwesomeIcon icon={faChevronDown} className="ml-1.5 text-xs" />
              </button>
              <button className="flex items-center text-gray-600">
                USD <FontAwesomeIcon icon={faChevronDown} className="ml-1.5 text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1 space-x-12">
            <h1 className='text-4xl bold-900'>Nitto<span className='text-xl italic bold-900'>Fashions</span></h1>
            
            <div className="flex-1 max-w-2xl">
              <div className="flex h-11">
                <div className="relative">
                  <select className="h-full pl-4 pr-8 border-2 border-r-0 rounded-l-md appearance-none bg-white text-gray-600 focus:outline-none">
                    <option>All</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                <input
                  type="text"
                  placeholder="Search your favorite product..."
                  className="flex-1 px-4 border-2 border-x-0 focus:outline-none text-gray-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="px-8 bg-[#002145] text-white font-medium rounded-r-md hover:bg-[#001835] transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 ml-8">
            <div className="flex items-center space-x-1">
              <div className="flex flex-col text-right text-sm">
                <span className="text-gray-500">Sign In</span>
                <span className="font-medium">Account</span>
              </div>
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faHeart} className="text-xl text-gray-700" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-medium">
                0
              </span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl text-gray-700 mr-2" />
              <span className="font-medium">$0.00</span>
              <span className="absolute ml-4 -mt-6 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-medium">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-y">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <button className="flex items-center space-x-2 h-full">
              <FontAwesomeIcon icon={faBars} className="text-lg" />
              <span className="font-medium">All Departments</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-xs ml-1" />
            </button>

            <nav className="flex items-center space-x-8">
              <a href="/" className="text-blue-600">Home</a>
              <a href="/shop" className="text-gray-700 flex items-center">
                Shop <FontAwesomeIcon icon={faChevronDown} className="ml-1.5 text-xs" />
              </a>
              <a href="/phones" className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faMobile} className="mr-2" /> Cell Phones
              </a>
              <a href="/headphones" className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faHeadphones} className="mr-2" /> Headphones
              </a>
              <a href="/blog" className="text-gray-700">Blog</a>
              <a href="/contact" className="text-gray-700">Contact</a>
            </nav>

            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">%</span>
              </div>
              <span className="ml-2 text-sm text-gray-500">Only this weekend</span>
              <a href="/discount" className="ml-2 text-sm font-medium hover:text-blue-600">
                Super Discount
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r">
            <div className="py-4">
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className={`group relative flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 cursor-pointer ${
                    index !== sidebarItems.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={item.icon} className="w-5 text-gray-400" />
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                  {item.hasSubmenu && (
                    <FontAwesomeIcon icon={faAngleRight} className="text-gray-400" />
                  )}
                  {item.badge && (
                    <span className="absolute right-4 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex-1 bg-gray-50">
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center p-12">
                <div className="bg-yellow-400 text-sm font-semibold px-4 py-1 rounded-full inline-block">
                  WEEKEND DISCOUNT
                </div>
                <h1 className="text-[2.75rem] leading-tight font-bold mt-6 mb-4">
                  Enhance Your<br />Entertainment
                </h1>
                <p className="text-xl mb-8">
                  Last call for up to <span className="text-red-500 font-bold">%20</span> off!
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors w-fit">
                  Shop Now
                </button>
              </div>
              <div className="flex items-center justify-end">
                <img
                  src="https://i.pinimg.com/736x/84/2a/72/842a72d8b32949c36d2376d119f67a48.jpg"
                  alt="Woman enjoying music with headphones"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


{/*Logos section*/}
<div className="w-full overflow-hidden bg-white py-8">
  <div className="relative">
    <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
      {[...logos, ...logos].map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0 mx-12 w-32 h-12 flex items-center justify-center"
        >
          <img 
            src={logo.image}
            alt={logo.name}
            className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</div>

{/* Main section */}
<div className="max-w-7xl mx-auto px-4 py-8">
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border border-gray-200">
            <span className="text-2xl mb-4 block">{feature.icon}</span>
            <h3 className="text-base font-medium text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Promotional Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Phone Banner */}
        <div className="bg-white rounded p-6 border border-gray-200">
          <div className="mb-4">
            <span className="text-blue-600 uppercase text-xs font-semibold">SUPER DISCOUNT</span>
            <h2 className="text-xl font-bold mt-2">New Phone 11</h2>
            <p className="text-sm text-gray-600 mt-1">Don't miss the last opportunity.</p>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded mt-4">
              Shop Now
            </button>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLXQBn2MuLuTLwR9RbnCTSlEx2nfp_MZDIw&s" 
            alt="Phone 11" 
            className="w-full h-48 object-contain"
          />
        </div>

        {/* Speaker Banner */}
        <div className="bg-white rounded p-6 flex items-center border border-gray-200">
          <div className="flex-1">
            <span className="text-blue-600 uppercase text-xs font-semibold">WEEKEND DISCOUNT</span>
            <h2 className="text-xl font-bold mt-2">Home Speaker</h2>
            <p className="text-sm text-gray-600 mt-1">Don't miss the last opportunity.</p>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded mt-4">
              Shop Now
            </button>
          </div>
          <img 
            src="https://m.media-amazon.com/images/I/A1xlwUXvbCL._AC_SL1500_.jpg" 
            alt="Speaker" 
            className="w-1/2 object-contain"
          />
        </div>

        {/* Smartphone Banner */}
        <div className="bg-white rounded p-6 flex items-center border border-gray-200">
          <div className="flex-1">
            <span className="text-blue-600 uppercase text-xs font-semibold">WEEKEND DISCOUNT</span>
            <h2 className="text-xl font-bold mt-2">New Smartphones</h2>
            <p className="text-sm text-gray-600 mt-1">Don't miss the last opportunity.</p>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded mt-4">
              Shop Now
            </button>
          </div>
          <img 
            src="https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj-1200-80.jpg" 
            alt="Smartphone" 
            className="w-1/2 object-contain"
          />
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Best Sellers</h2>
          <a href="#" className="text-blue-600 text-sm flex items-center">
            View All 
            <span className="ml-1">→</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 relative">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.discount && (
                  <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
                    {product.discount}
                  </span>
                )}
                {product.badge && (
                  <span className="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 bg-white rounded-full p-1.5 shadow-md">
                <Heart className="w-4 h-4 text-gray-400" />
              </button>

              {/* Product Image */}
              <div className="mb-4 aspect-square relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">{product.reviews}</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-sm line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Delivery Info */}
                <div className="text-xs text-gray-500">{product.delivery}</div>

                {/* Stock Status */}
                {product.stock && (
                  <div className="text-xs text-red-600 font-medium">{product.stock}</div>
                )}

                {/* Specifications */}
                {product.specs && (
                  <ul className="text-xs text-gray-600 space-y-1 mt-2">
                    {product.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 p-2 border border-gray-200 rounded-md hover:bg-gray-50">
                    <ShoppingCart className="w-4 h-4 mx-auto text-gray-600" />
                  </button>
                  {product.id === 2 && (
                    <>
                      <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
                        <RefreshCw className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



{/* Footer section */}
<footer className="bg-white">
      {/* Newsletter Section */}
      <div className="bg-[#041e42] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Sign Up For Newsletters</h2>
              <p className="text-gray-300">
                Get E-mail updates about our latest shop and{' '}
                <span className="text-yellow-400">special offers.</span>
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full md:w-80 rounded-l outline-none text-gray-700"
              />
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 font-medium rounded-r">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo and Social Links */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className='text-4xl bold-900'>Nitto<span className='text-xl italic bold-900'>Fashions</span></h1>
          <div className="flex space-x-3">
            <Facebook className="w-8 h-8 text-gray-400 hover:text-gray-600" />
            <Twitter className="w-8 h-8 text-gray-400 hover:text-gray-600" />
            <Linkedin className="w-8 h-8 text-gray-400 hover:text-gray-600" />
            
            <Instagram className="w-8 h-8 text-gray-400 hover:text-gray-600" />
            <Youtube className="w-8 h-8 text-gray-400 hover:text-gray-600" />
          </div>
        </div>

        {/* Product Tags */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-wrap gap-2">
            {productTags.map((tag, index) => (
              <React.Fragment key={tag}>
                <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                  {tag}
                </a>
                {index < productTags.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Copyright and Payment Methods */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            Copyright 2024 © Machic WordPress Theme. All right reserved. Powered by{' '}
            <a href="#" className="text-gray-700">
              KLBTheme
            </a>
            .
          </p>
          <div className="mt-4 md:mt-0">
            <img 
              src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg" 
              alt="Payment Methods" 
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
</>
  );
};

export default Home;
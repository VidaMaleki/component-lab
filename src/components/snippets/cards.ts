export const cardsSnippets = {
  products: `import { ShoppingCart, Heart, Star } from 'lucide-react';

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
  <div className="aspect-square bg-slate-100 relative">
    <img src="/product.jpg" alt="Product" className="w-full h-full object-cover" />
    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
      <Heart className="w-5 h-5 text-slate-600" />
    </button>
  </div>
  <div className="p-4">
    <div className="flex items-start justify-between mb-2">
      <h3 className="text-slate-900">Premium Headphones</h3>
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm text-slate-600">4.5</span>
      </div>
    </div>
    <p className="text-sm text-slate-600 mb-4">High-quality wireless headphones</p>
    <div className="flex items-center justify-between">
      <div className="text-slate-900">$299.99</div>
      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
        <ShoppingCart className="w-4 h-4" />
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
  info: `import { Activity } from 'lucide-react';

<div className="bg-white border border-slate-200 rounded-xl p-6">
  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
    <Activity className="w-6 h-6 text-indigo-600" />
  </div>
  <h3 className="text-slate-900 mb-2">Real-time Analytics</h3>
  <p className="text-sm text-slate-600">
    Track your website performance with live data updates and detailed insights.
  </p>
</div>`,
  profile: `<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
  <div className="h-24 bg-linear-to-r from-indigo-500 to-purple-500"></div>
  <div className="px-6 pb-6">
    <div className="flex items-end gap-4 -mt-12 mb-4">
      <img src="/avatar.jpg" alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white" />
      <button className="mb-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
        Follow
      </button>
    </div>
    <h3 className="text-slate-900 mb-1">Sarah Johnson</h3>
    <p className="text-sm text-slate-600 mb-4">Product Designer • San Francisco</p>
    <div className="flex gap-6">
      <div>
        <div className="text-slate-900">1,234</div>
        <div className="text-xs text-slate-600">Followers</div>
      </div>
      <div>
        <div className="text-slate-900">567</div>
        <div className="text-xs text-slate-600">Following</div>
      </div>
    </div>
  </div>
</div>`,
  stat: `import { DollarSign, TrendingUp } from 'lucide-react';

<div className="bg-white border border-slate-200 rounded-xl p-6">
  <div className="flex items-start justify-between mb-4">
    <div>
      <p className="text-sm text-slate-600 mb-1">Total Revenue</p>
      <div className="text-slate-900">$45,231</div>
    </div>
    <div className="p-2 bg-green-100 rounded-lg">
      <DollarSign className="w-5 h-5 text-green-600" />
    </div>
  </div>
  <div className="flex items-center gap-1 text-sm">
    <TrendingUp className="w-4 h-4 text-green-600" />
    <span className="text-green-600">+12.5%</span>
    <span className="text-slate-600">from last month</span>
  </div>
</div>`,
  horizontal: `<div className="bg-white border border-slate-200 rounded-xl overflow-hidden flex">
  <img src="/workspace.jpg" alt="Workspace" className="w-48 object-cover" />
  <div className="flex-1 p-6">
    <div className="flex items-start justify-between mb-2">
      <h3 className="text-slate-900">Modern Workspace</h3>
      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">New</span>
    </div>
    <p className="text-sm text-slate-600 mb-4">
      A beautiful and productive workspace designed for modern teams.
    </p>
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-600">$2,500/month</span>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
        Learn More
      </button>
    </div>
  </div>
</div>`,
};

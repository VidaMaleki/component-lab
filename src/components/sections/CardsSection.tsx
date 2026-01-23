import { ComponentShowcase } from '../ComponentShowcase';
import { ShoppingCart, Heart, Star, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
import { cardsSnippets } from '../snippets/cards';

export default function CardsSection() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Cards</h1>
                <p className="text-slate-600">
                    Various card components for displaying content, products, profiles, and statistics.
                </p>
            </div>

            {/* Product Card */}
            <ComponentShowcase
                title="Product Card"
                description="Card for displaying products with image and actions"
                preview={
                    <div className="w-72">
                        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-square bg-slate-100 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    Product Image
                                </div>
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
                                <p className="text-sm text-slate-600 mb-4">High-quality wireless headphones with noise cancellation</p>
                                <div className="flex items-center justify-between">
                                    <div className="text-slate-900">$299.99</div>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                                        <ShoppingCart className="w-4 h-4" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                code={cardsSnippets.products}
            />

            {/* Info Card */}
            <ComponentShowcase
                title="Info Card"
                description="Simple informational card with icon"
                preview={
                    <div className="flex gap-6 items-stretch">
                        {/* Card 1 */}
                        <div className="w-72 bg-white border border-slate-200 rounded-xl p-6 flex flex-col">
                            <div>
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <Activity className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="text-slate-900 mb-2">Real-time Analytics</h3>
                                <p className="text-sm text-slate-600">
                                    Track your website performance with live data updates and detailed insights.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-72 bg-linear-to-br from-indigo-600 to-purple-600 text-white rounded-xl p-6 flex flex-col">
                            <div>
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="mb-2">Growth Tracking</h3>
                                <p className="text-sm text-white/80">
                                    Monitor your business growth with comprehensive tracking tools.
                                </p>
                            </div>
                        </div>
                    </div>
                }
                code={cardsSnippets.info}
            />

            {/* Profile Card */}
            <ComponentShowcase
                title="Profile Card"
                description="User profile card with avatar and info"
                preview={
                    <div className="w-72 bg-white border border-slate-200 rounded-xl overflow-hidden">
                        <div className="h-24 bg-linear-to-r from-indigo-500 to-purple-500"></div>
                        <div className="px-6 pb-6">
                            <div className="flex items-end gap-4 -mt-12 mb-4">
                                <div className="w-24 h-24 bg-slate-300 rounded-full border-4 border-white flex items-center justify-center text-slate-600">
                                    <Users className="w-12 h-12" />
                                </div>
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
                                <div>
                                    <div className="text-slate-900">89</div>
                                    <div className="text-xs text-slate-600">Posts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                code={cardsSnippets.profile}
            />

            {/* Stat Card */}
            <ComponentShowcase
                title="Stat Cards"
                description="Cards for displaying statistics and metrics"
                preview={
                    <>
                        <div className="w-64 bg-white border border-slate-200 rounded-xl p-6">
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
                        </div>

                        <div className="w-64 bg-white border border-slate-200 rounded-xl p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <p className="text-sm text-slate-600 mb-1">New Users</p>
                                    <div className="text-slate-900">2,847</div>
                                </div>
                                <div className="p-2 bg-indigo-100 rounded-lg">
                                    <Users className="w-5 h-5 text-indigo-600" />
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <TrendingUp className="w-4 h-4 text-green-600" />
                                <span className="text-green-600">+8.2%</span>
                                <span className="text-slate-600">from last week</span>
                            </div>
                        </div>
                    </>
                }
                code={cardsSnippets.stat}
            />

            {/* Horizontal Card */}
            <ComponentShowcase
                title="Horizontal Card"
                description="Card with horizontal layout"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden flex">
                            <div className="w-48 bg-slate-100 flex items-center justify-center text-slate-400">
                                Image
                            </div>
                            <div className="flex-1 p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-slate-900">Modern Workspace</h3>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">New</span>
                                </div>
                                <p className="text-sm text-slate-600 mb-4">
                                    A beautiful and productive workspace designed for modern teams. Includes all amenities and high-speed internet.
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-600">$2,500/month</span>
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                code={cardsSnippets.horizontal}
            />
        </div>
    );
}

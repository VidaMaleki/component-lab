import { ComponentShowcase } from '../ComponentShowcase';
import { X } from 'lucide-react';

export default function BadgesSection() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Badges & Chips</h1>
                <p className="text-slate-600">
                    Status badges, tags, and chip components for labels and categorization.
                </p>
            </div>

            {/* Status Badges */}
            <ComponentShowcase
                title="Status Badges"
                description="Badges for displaying status"
                preview={
                    <>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Inactive</span>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Pending</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">In Progress</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Completed</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Draft</span>
                    </>
                }
                code={`<span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
<span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Inactive</span>
<span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Pending</span>
<span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">In Progress</span>`}
            />

            {/* Pill Badges */}
            <ComponentShowcase
                title="Pill Badges"
                description="Rounded pill-style badges"
                preview={
                    <>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">New</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">Featured</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Hot</span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">Popular</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Premium</span>
                    </>
                }
                code={`<span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">New</span>
<span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">Featured</span>
<span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Hot</span>`}
            />

            {/* Solid Badges */}
            <ComponentShowcase
                title="Solid Badges"
                description="Badges with solid background colors"
                preview={
                    <>
                        <span className="px-2 py-1 bg-green-600 text-white rounded text-xs">Success</span>
                        <span className="px-2 py-1 bg-red-600 text-white rounded text-xs">Error</span>
                        <span className="px-2 py-1 bg-yellow-600 text-white rounded text-xs">Warning</span>
                        <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs">Info</span>
                        <span className="px-2 py-1 bg-indigo-600 text-white rounded text-xs">Primary</span>
                        <span className="px-2 py-1 bg-slate-600 text-white rounded text-xs">Default</span>
                    </>
                }
                code={`<span className="px-2 py-1 bg-green-600 text-white rounded text-xs">Success</span>
<span className="px-2 py-1 bg-red-600 text-white rounded text-xs">Error</span>
<span className="px-2 py-1 bg-indigo-600 text-white rounded text-xs">Primary</span>`}
            />

            {/* Outline Badges */}
            <ComponentShowcase
                title="Outline Badges"
                description="Badges with border outline"
                preview={
                    <>
                        <span className="px-2 py-1 border border-green-500 text-green-700 rounded text-xs">Approved</span>
                        <span className="px-2 py-1 border border-red-500 text-red-700 rounded text-xs">Rejected</span>
                        <span className="px-2 py-1 border border-blue-500 text-blue-700 rounded text-xs">Review</span>
                        <span className="px-2 py-1 border border-purple-500 text-purple-700 rounded text-xs">Verified</span>
                    </>
                }
                code={`<span className="px-2 py-1 border border-green-500 text-green-700 rounded text-xs">Approved</span>
<span className="px-2 py-1 border border-red-500 text-red-700 rounded text-xs">Rejected</span>
<span className="px-2 py-1 border border-blue-500 text-blue-700 rounded text-xs">Review</span>`}
            />

            {/* Notification Badges */}
            <ComponentShowcase
                title="Notification Badges"
                description="Small count badges for notifications"
                preview={
                    <>
                        <div className="relative inline-block">
                            <button className="px-4 py-2 bg-slate-200 rounded-lg">Messages</button>
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">
                                3
                            </span>
                        </div>
                        <div className="relative inline-block">
                            <button className="px-4 py-2 bg-slate-200 rounded-lg">Notifications</button>
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">
                                9
                            </span>
                        </div>
                        <div className="relative inline-block">
                            <button className="px-4 py-2 bg-slate-200 rounded-lg">Cart</button>
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-600 rounded-full"></span>
                        </div>
                    </>
                }
                code={`<div className="relative inline-block">
  <button className="px-4 py-2 bg-slate-200 rounded-lg">Messages</button>
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">
    3
  </span>
</div>

{/* Dot indicator */}
<div className="relative inline-block">
  <button>Notifications</button>
  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-600 rounded-full"></span>
</div>`}
            />

            {/* Tag Chips */}
            <ComponentShowcase
                title="Tag Chips"
                description="Removable tag chips"
                preview={
                    <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                            React
                            <button className="hover:text-slate-900">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                            TypeScript
                            <button className="hover:text-slate-900">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                            Tailwind CSS
                            <button className="hover:text-slate-900">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                            Next.js
                            <button className="hover:text-slate-900">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                    </div>
                }
                code={`import { X } from 'lucide-react';

<span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
  React
  <button className="hover:text-slate-900">
    <X className="w-3 h-3" />
  </button>
</span>`}
            />

            {/* Colored Tag Chips */}
            <ComponentShowcase
                title="Colored Tag Chips"
                description="Colorful removable tags"
                preview={
                    <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                            Design
                            <button className="hover:text-blue-900">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                            Development
                            <button className="hover:text-green-900">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">
                            Marketing
                            <button className="hover:text-purple-900">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm">
                            Sales
                            <button className="hover:text-orange-900">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                    </div>
                }
                code={`import { X } from 'lucide-react';

<span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
  Design
  <button className="hover:text-blue-900">
    <X className="w-3 h-3" />
  </button>
</span>`}
            />

            {/* Badge Sizes */}
            <ComponentShowcase
                title="Badge Sizes"
                description="Badges in different sizes"
                preview={
                    <>
                        <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">Extra Small</span>
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Small</span>
                        <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded text-sm">Medium</span>
                        <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded">Large</span>
                    </>
                }
                code={`{/* Extra Small */}
<span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">XS</span>

{/* Small */}
<span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Small</span>

{/* Medium */}
<span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded text-sm">Medium</span>

{/* Large */}
<span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded">Large</span>`}
            />

            {/* Dot Badges */}
            <ComponentShowcase
                title="Dot Badges"
                description="Badges with status dots"
                preview={
                    <>
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                            Online
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                            <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                            Away
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                            Busy
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                            <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                            Offline
                        </span>
                    </>
                }
                code={`<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
  <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
  Online
</span>`}
            />
        </div>
    );
}

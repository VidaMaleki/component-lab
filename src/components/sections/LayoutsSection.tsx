import { ComponentShowcase } from '../ComponentShowcase';

export default function LayoutsSection() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Layouts</h1>
                <p className="text-slate-600">
                    Grid systems, containers, spacing utilities, and layout patterns.
                </p>
            </div>

            {/* Container */}
            <ComponentShowcase
                title="Container"
                description="Centered container with max-width"
                preview={
                    <div className="w-full bg-slate-100 p-4 rounded-lg">
                        <div className="max-w-7xl mx-auto bg-indigo-100 p-6 rounded-lg text-center text-indigo-700">
                            max-w-7xl container
                        </div>
                    </div>
                }
                code={`<div className="max-w-7xl mx-auto px-4">
  {/* Content */}
</div>

{/* Different sizes */}
<div className="max-w-sm mx-auto">Small container (384px)</div>
<div className="max-w-md mx-auto">Medium container (448px)</div>
<div className="max-w-lg mx-auto">Large container (512px)</div>
<div className="max-w-xl mx-auto">XL container (576px)</div>
<div className="max-w-2xl mx-auto">2XL container (672px)</div>
<div className="max-w-7xl mx-auto">7XL container (1280px)</div>`}
            />

            {/* Grid System */}
            <ComponentShowcase
                title="Grid System"
                description="Responsive grid layouts"
                preview={
                    <div className="w-full space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-indigo-100 p-4 rounded-lg text-center text-indigo-700">Col 1</div>
                            <div className="bg-indigo-100 p-4 rounded-lg text-center text-indigo-700">Col 2</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-purple-100 p-4 rounded-lg text-center text-purple-700">Col 1</div>
                            <div className="bg-purple-100 p-4 rounded-lg text-center text-purple-700">Col 2</div>
                            <div className="bg-purple-100 p-4 rounded-lg text-center text-purple-700">Col 3</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-pink-100 p-4 rounded-lg text-center text-pink-700">Col 1</div>
                            <div className="bg-pink-100 p-4 rounded-lg text-center text-pink-700">Col 2</div>
                            <div className="bg-pink-100 p-4 rounded-lg text-center text-pink-700">Col 3</div>
                            <div className="bg-pink-100 p-4 rounded-lg text-center text-pink-700">Col 4</div>
                        </div>
                    </div>
                }
                code={`{/* 2 columns */}
<div className="grid grid-cols-2 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

{/* 3 columns */}
<div className="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

{/* Responsive grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`}
            />

            {/* Column Spanning */}
            <ComponentShowcase
                title="Column Spanning"
                description="Grid items spanning multiple columns"
                preview={
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 bg-indigo-100 p-4 rounded-lg text-center text-indigo-700">
                            Spans 2 columns
                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg text-center text-indigo-700">Col</div>
                        <div className="bg-purple-100 p-4 rounded-lg text-center text-purple-700">Col</div>
                        <div className="col-span-2 bg-purple-100 p-4 rounded-lg text-center text-purple-700">
                            Spans 2 columns
                        </div>
                        <div className="col-span-3 bg-pink-100 p-4 rounded-lg text-center text-pink-700">
                            Spans 3 columns (full width)
                        </div>
                    </div>
                }
                code={`<div className="grid grid-cols-3 gap-4">
  <div className="col-span-2">Spans 2 columns</div>
  <div>Column</div>
  <div>Column</div>
  <div className="col-span-2">Spans 2 columns</div>
  <div className="col-span-3">Spans 3 columns (full width)</div>
</div>`}
            />

            {/* Flexbox */}
            <ComponentShowcase
                title="Flexbox Layouts"
                description="Flexible box layouts"
                preview={
                    <div className="w-full space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-1 bg-indigo-100 p-4 rounded-lg text-center text-indigo-700">Flex 1</div>
                            <div className="flex-1 bg-indigo-100 p-4 rounded-lg text-center text-indigo-700">Flex 1</div>
                            <div className="flex-1 bg-indigo-100 p-4 rounded-lg text-center text-indigo-700">Flex 1</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none bg-purple-100 p-4 rounded-lg text-center text-purple-700 w-24">Fixed</div>
                            <div className="flex-1 bg-purple-100 p-4 rounded-lg text-center text-purple-700">Flexible</div>
                            <div className="flex-none bg-purple-100 p-4 rounded-lg text-center text-purple-700 w-24">Fixed</div>
                        </div>
                    </div>
                }
                code={`{/* Equal width items */}
<div className="flex gap-4">
  <div className="flex-1">Item 1</div>
  <div className="flex-1">Item 2</div>
  <div className="flex-1">Item 3</div>
</div>

{/* Fixed and flexible items */}
<div className="flex gap-4">
  <div className="flex-none w-24">Fixed width</div>
  <div className="flex-1">Flexible</div>
  <div className="flex-none w-24">Fixed width</div>
</div>`}
            />

            {/* Spacing Scale */}
            <ComponentShowcase
                title="Spacing Scale"
                description="Consistent spacing system"
                preview={
                    <div className="w-full space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-16 text-xs text-slate-600">space-1</div>
                            <div className="flex gap-1">
                                <div className="w-6 h-6 bg-indigo-200"></div>
                                <div className="w-6 h-6 bg-indigo-200"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-16 text-xs text-slate-600">space-2</div>
                            <div className="flex gap-2">
                                <div className="w-6 h-6 bg-purple-200"></div>
                                <div className="w-6 h-6 bg-purple-200"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-16 text-xs text-slate-600">space-4</div>
                            <div className="flex gap-4">
                                <div className="w-6 h-6 bg-pink-200"></div>
                                <div className="w-6 h-6 bg-pink-200"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-16 text-xs text-slate-600">space-6</div>
                            <div className="flex gap-6">
                                <div className="w-6 h-6 bg-green-200"></div>
                                <div className="w-6 h-6 bg-green-200"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-16 text-xs text-slate-600">space-8</div>
                            <div className="flex gap-8">
                                <div className="w-6 h-6 bg-blue-200"></div>
                                <div className="w-6 h-6 bg-blue-200"></div>
                            </div>
                        </div>
                    </div>
                }
                code={`{/* Gap spacing */}
<div className="flex gap-1">  {/* 4px */}
<div className="flex gap-2">  {/* 8px */}
<div className="flex gap-4">  {/* 16px */}
<div className="flex gap-6">  {/* 24px */}
<div className="flex gap-8">  {/* 32px */}

{/* Padding */}
<div className="p-1">   {/* 4px all sides */}
<div className="p-4">   {/* 16px all sides */}
<div className="px-4">  {/* 16px horizontal */}
<div className="py-4">  {/* 16px vertical */}

{/* Margin */}
<div className="m-4">   {/* 16px all sides */}
<div className="mx-4">  {/* 16px horizontal */}
<div className="my-4">  {/* 16px vertical */}`}
            />

            {/* Stack Layout */}
            <ComponentShowcase
                title="Stack Layout"
                description="Vertical stacking with consistent spacing"
                preview={
                    <div className="w-full max-w-md space-y-4">
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">Item 1</div>
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">Item 2</div>
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">Item 3</div>
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">Item 4</div>
                    </div>
                }
                code={`<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

{/* Different spacing */}
<div className="space-y-2">  {/* 8px spacing */}
<div className="space-y-6">  {/* 24px spacing */}
<div className="space-y-8">  {/* 32px spacing */}`}
            />

            {/* Sidebar Layout */}
            <ComponentShowcase
                title="Sidebar Layout"
                description="Classic sidebar with main content"
                preview={
                    <div className="w-full flex gap-4 min-h-50">
                        <div className="w-48 bg-slate-800 rounded-lg p-4">
                            <div className="text-white text-sm">Sidebar</div>
                        </div>
                        <div className="flex-1 bg-slate-100 rounded-lg p-4">
                            <div className="text-slate-700">Main Content</div>
                        </div>
                    </div>
                }
                code={`<div className="flex gap-4">
  <aside className="w-64 bg-slate-800">
    {/* Sidebar content */}
  </aside>
  <main className="flex-1">
    {/* Main content */}
  </main>
</div>`}
            />

            {/* Card Grid */}
            <ComponentShowcase
                title="Card Grid"
                description="Responsive card grid layout"
                preview={
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
                                <div className="w-full h-24 bg-slate-100 rounded mb-3"></div>
                                <div className="text-slate-900 mb-2">Card {i}</div>
                                <div className="text-sm text-slate-600">Card content goes here</div>
                            </div>
                        ))}
                    </div>
                }
                code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-white border rounded-lg p-4">
    Card 1
  </div>
  <div className="bg-white border rounded-lg p-4">
    Card 2
  </div>
  <div className="bg-white border rounded-lg p-4">
    Card 3
  </div>
</div>`}
            />

            {/* Center Layout */}
            <ComponentShowcase
                title="Center Layout"
                description="Centered content vertically and horizontally"
                preview={
                    <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center">
                        <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
                            Centered Content
                        </div>
                    </div>
                }
                code={`{/* Center both axes */}
<div className="flex items-center justify-center h-screen">
  <div>Centered content</div>
</div>

{/* Center horizontally only */}
<div className="flex justify-center">
  <div>Horizontally centered</div>
</div>

{/* Center vertically only */}
<div className="flex items-center h-screen">
  <div>Vertically centered</div>
</div>`}
            />
        </div>
    );
}

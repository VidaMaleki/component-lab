import { ComponentShowcase } from '../ComponentShowcase';
import { Plus, Download, Heart, Send, Settings, Trash2, Edit } from 'lucide-react';

export default function ButtonsSection() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Buttons</h1>
                <p className="text-slate-600">
                    A comprehensive collection of button components with multiple variants, sizes, and states.
                </p>
            </div>

            {/* Primary Buttons */}
            <ComponentShowcase
                title="Primary Buttons"
                description="Main call-to-action buttons in different sizes"
                preview={
                    <>
                        <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                            Small
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Medium
                        </button>
                        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Large
                        </button>
                    </>
                }
                code={`<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
  Primary Button
</button>`}
            />

            {/* Secondary Buttons */}
            <ComponentShowcase
                title="Secondary Buttons"
                description="Alternative action buttons with outline style"
                preview={
                    <>
                        <button className="px-3 py-1.5 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors text-sm">
                            Small
                        </button>
                        <button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                            Medium
                        </button>
                        <button className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                            Large
                        </button>
                    </>
                }
                code={`<button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
  Secondary Button
</button>`}
            />

            {/* Ghost Buttons */}
            <ComponentShowcase
                title="Ghost Buttons"
                description="Minimal buttons without borders"
                preview={
                    <>
                        <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                            Ghost Button
                        </button>
                        <button className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                            Ghost Neutral
                        </button>
                    </>
                }
                code={`<button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
  Ghost Button
</button>`}
            />

            {/* Destructive Buttons */}
            <ComponentShowcase
                title="Destructive Buttons"
                description="Buttons for dangerous or irreversible actions"
                preview={
                    <>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                            Delete
                        </button>
                        <button className="px-4 py-2 bg-white text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                            Remove
                        </button>
                        <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            Cancel
                        </button>
                    </>
                }
                code={`<button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
  Delete
</button>

<button className="px-4 py-2 bg-white text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
  Remove
</button>`}
            />

            {/* Icon Buttons */}
            <ComponentShowcase
                title="Icon Buttons"
                description="Buttons with icons for visual context"
                preview={
                    <>
                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            <Plus className="w-4 h-4" />
                            Add New
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            <Download className="w-4 h-4" />
                            Download
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                            <Heart className="w-4 h-4" />
                            Favorite
                        </button>
                    </>
                }
                code={`import { Plus } from 'lucide-react';

<button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
  <Plus className="w-4 h-4" />
  Add New
</button>`}
            />

            {/* Icon Only Buttons */}
            <ComponentShowcase
                title="Icon Only Buttons"
                description="Compact buttons with only icons"
                preview={
                    <>
                        <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                            <Settings className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                            <Send className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </>
                }
                code={`import { Edit } from 'lucide-react';

<button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
  <Edit className="w-4 h-4" />
</button>`}
            />

            {/* Floating Action Button */}
            <ComponentShowcase
                title="Floating Action Button"
                description="Prominent button for primary actions"
                preview={
                    <>
                        <button className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all flex items-center justify-center">
                            <Plus className="w-6 h-6" />
                        </button>
                        <button className="w-12 h-12 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 hover:shadow-xl transition-all flex items-center justify-center">
                            <Heart className="w-5 h-5" />
                        </button>
                    </>
                }
                code={`<button className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all flex items-center justify-center">
  <Plus className="w-6 h-6" />
</button>`}
            />

            {/* Button States */}
            <ComponentShowcase
                title="Button States"
                description="Different states including disabled"
                preview={
                    <>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Default
                        </button>
                        <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg shadow-md">
                            Active
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg ring-2 ring-indigo-300 ring-offset-2">
                            Focused
                        </button>
                        <button
                            disabled
                            className="px-4 py-2 bg-slate-300 text-slate-500 rounded-lg cursor-not-allowed"
                        >
                            Disabled
                        </button>
                    </>
                }
                code={`{/* Default */}
<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
  Default
</button>

{/* Disabled */}
<button disabled className="px-4 py-2 bg-slate-300 text-slate-500 rounded-lg cursor-not-allowed">
  Disabled
</button>`}
            />

            {/* Segmented Buttons */}
            <ComponentShowcase
                title="Segmented Button Group"
                description="Connected buttons for related actions"
                preview={
                    <div className="inline-flex rounded-lg border border-slate-300 overflow-hidden">
                        <button className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                            Day
                        </button>
                        <button className="px-4 py-2 bg-white text-slate-700 border-l border-slate-300 hover:bg-slate-50 transition-colors">
                            Week
                        </button>
                        <button className="px-4 py-2 bg-white text-slate-700 border-l border-slate-300 hover:bg-slate-50 transition-colors">
                            Month
                        </button>
                        <button className="px-4 py-2 bg-white text-slate-700 border-l border-slate-300 hover:bg-slate-50 transition-colors">
                            Year
                        </button>
                    </div>
                }
                code={`<div className="inline-flex rounded-lg border border-slate-300 overflow-hidden">
  <button className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
    Day
  </button>
  <button className="px-4 py-2 bg-white text-slate-700 border-l border-slate-300 hover:bg-slate-50 transition-colors">
    Week
  </button>
  <button className="px-4 py-2 bg-white text-slate-700 border-l border-slate-300 hover:bg-slate-50 transition-colors">
    Month
  </button>
  <button className="px-4 py-2 bg-white text-slate-700 border-l border-slate-300 hover:bg-slate-50 transition-colors">
    Year
  </button>
</div>`}
            />

            {/* Link Buttons */}
            <ComponentShowcase
                title="Link Buttons"
                description="Buttons styled as links"
                preview={
                    <>
                        <button className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
                            Link Button
                        </button>
                        <button className="text-slate-700 hover:text-slate-900 hover:underline underline-offset-4">
                            Subtle Link
                        </button>
                    </>
                }
                code={`<button className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
  Link Button
</button>`}
            />

            {/* Tonal Buttons */}
            <ComponentShowcase
                title="Tonal Buttons"
                description="Buttons with subtle background colors"
                preview={
                    <>
                        <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
                            Indigo Tonal
                        </button>
                        <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                            Green Tonal
                        </button>
                        <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                            Purple Tonal
                        </button>
                        <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors">
                            Orange Tonal
                        </button>
                    </>
                }
                code={`<button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
  Indigo Tonal
</button>`}
            />

            {/* Loading Button */}
            <ComponentShowcase
                title="Loading Button"
                description="Button with loading state"
                preview={
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Loading...
                    </button>
                }
                code={`<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2">
  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>`}
            />
        </div>
    );
}

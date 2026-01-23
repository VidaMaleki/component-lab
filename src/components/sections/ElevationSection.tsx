import { ComponentShowcase } from '../ComponentShowcase';

export default function ElevationSection() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Elevation & Shadows</h1>
                <p className="text-slate-600">
                    Shadow system for creating depth and elevation in your interfaces.
                </p>
            </div>

            {/* Shadow Scale */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-slate-900 mb-6">Shadow Scale</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <div className="bg-white p-6 rounded-lg text-center text-slate-700">
                            No Shadow
                        </div>
                        <div className="text-sm text-slate-600">Default / Flat</div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white shadow-sm p-6 rounded-lg text-center text-slate-700">
                            shadow-sm
                        </div>
                        <div className="text-sm text-slate-600">Subtle elevation</div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white shadow p-6 rounded-lg text-center text-slate-700">
                            shadow
                        </div>
                        <div className="text-sm text-slate-600">Default elevation</div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white shadow-md p-6 rounded-lg text-center text-slate-700">
                            shadow-md
                        </div>
                        <div className="text-sm text-slate-600">Medium elevation</div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white shadow-lg p-6 rounded-lg text-center text-slate-700">
                            shadow-lg
                        </div>
                        <div className="text-sm text-slate-600">Large elevation</div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white shadow-xl p-6 rounded-lg text-center text-slate-700">
                            shadow-xl
                        </div>
                        <div className="text-sm text-slate-600">Extra large elevation</div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white shadow-2xl p-6 rounded-lg text-center text-slate-700">
                            shadow-2xl
                        </div>
                        <div className="text-sm text-slate-600">Maximum elevation</div>
                    </div>
                </div>
            </div>

            {/* Shadow Usage */}
            <ComponentShowcase
                title="Shadow Classes"
                description="Available shadow utility classes"
                preview={
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white shadow-sm p-4 rounded-lg text-center text-sm text-slate-700">
                            shadow-sm
                        </div>
                        <div className="bg-white shadow p-4 rounded-lg text-center text-sm text-slate-700">
                            shadow
                        </div>
                        <div className="bg-white shadow-md p-4 rounded-lg text-center text-sm text-slate-700">
                            shadow-md
                        </div>
                        <div className="bg-white shadow-lg p-4 rounded-lg text-center text-sm text-slate-700">
                            shadow-lg
                        </div>
                    </div>
                }
                code={`<div className="shadow-sm">Subtle shadow</div>
<div className="shadow">Default shadow</div>
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>
<div className="shadow-xl">Extra large shadow</div>
<div className="shadow-2xl">2XL shadow</div>
<div className="shadow-none">No shadow</div>`}
            />

            {/* Card Examples */}
            <ComponentShowcase
                title="Cards with Elevation"
                description="Common card patterns with shadows"
                preview={
                    <div className="w-full grid md:grid-cols-3 gap-6">
                        <div className="bg-white shadow rounded-xl p-6">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-4"></div>
                            <h4 className="text-slate-900 mb-2">Default Card</h4>
                            <p className="text-sm text-slate-600">Standard card with subtle shadow</p>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4"></div>
                            <h4 className="text-slate-900 mb-2">Elevated Card</h4>
                            <p className="text-sm text-slate-600">Card with medium elevation</p>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-lg mb-4"></div>
                            <h4 className="text-slate-900 mb-2">High Card</h4>
                            <p className="text-sm text-slate-600">Card with high elevation</p>
                        </div>
                    </div>
                }
                code={`<div className="bg-white shadow rounded-xl p-6">
  Default card with subtle shadow
</div>

<div className="bg-white shadow-md rounded-xl p-6">
  Card with medium elevation
</div>

<div className="bg-white shadow-lg rounded-xl p-6">
  Card with high elevation
</div>`}
            />

            {/* Hover Shadows */}
            <ComponentShowcase
                title="Hover Shadow Transitions"
                description="Interactive shadow effects on hover"
                preview={
                    <div className="w-full grid md:grid-cols-3 gap-6">
                        <div className="bg-white shadow hover:shadow-lg transition-shadow rounded-xl p-6 cursor-pointer">
                            <div className="text-slate-900 mb-2">Hover Me</div>
                            <p className="text-sm text-slate-600">shadow → shadow-lg</p>
                        </div>

                        <div className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-xl p-6 cursor-pointer">
                            <div className="text-slate-900 mb-2">Hover Me</div>
                            <p className="text-sm text-slate-600">shadow-md → shadow-xl</p>
                        </div>

                        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-xl p-6 cursor-pointer">
                            <div className="text-slate-900 mb-2">Hover Me</div>
                            <p className="text-sm text-slate-600">shadow-lg → shadow-2xl</p>
                        </div>
                    </div>
                }
                code={`<div className="shadow hover:shadow-lg transition-shadow">
  Hover for shadow lift
</div>

<div className="shadow-md hover:shadow-xl transition-shadow">
  Hover for more elevation
</div>

<div className="shadow-lg hover:shadow-2xl transition-shadow">
  Hover for maximum lift
</div>`}
            />

            {/* Colored Shadows */}
            <ComponentShowcase
                title="Colored Shadows"
                description="Shadows with custom colors"
                preview={
                    <div className="w-full grid md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl text-center shadow-lg shadow-indigo-500/50">
                            <div className="text-slate-900 mb-1">Indigo</div>
                            <div className="text-xs text-slate-600">shadow-indigo-500/50</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl text-center shadow-lg shadow-purple-500/50">
                            <div className="text-slate-900 mb-1">Purple</div>
                            <div className="text-xs text-slate-600">shadow-purple-500/50</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl text-center shadow-lg shadow-pink-500/50">
                            <div className="text-slate-900 mb-1">Pink</div>
                            <div className="text-xs text-slate-600">shadow-pink-500/50</div>
                        </div>

                        <div className="bg-white p-6 rounded-xl text-center shadow-lg shadow-blue-500/50">
                            <div className="text-slate-900 mb-1">Blue</div>
                            <div className="text-xs text-slate-600">shadow-blue-500/50</div>
                        </div>
                    </div>
                }
                code={`<div className="shadow-lg shadow-indigo-500/50">
  Indigo colored shadow
</div>

<div className="shadow-lg shadow-purple-500/50">
  Purple colored shadow
</div>

<div className="shadow-lg shadow-pink-500/50">
  Pink colored shadow
</div>

<div className="shadow-lg shadow-blue-500/50">
  Blue colored shadow
</div>`}
            />

            {/* Inner Shadow */}
            <ComponentShowcase
                title="Inner Shadow"
                description="Inset shadows for depth"
                preview={
                    <div className="w-full grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 shadow-inner p-8 rounded-xl text-center text-slate-700">
                            Inner Shadow
                            <div className="text-xs text-slate-600 mt-2">shadow-inner</div>
                        </div>

                        <div className="bg-white border border-slate-200 shadow-inner p-8 rounded-xl text-center text-slate-700">
                            Inner Shadow with Border
                            <div className="text-xs text-slate-600 mt-2">shadow-inner + border</div>
                        </div>
                    </div>
                }
                code={`<div className="shadow-inner">
  Inner shadow effect
</div>

<div className="shadow-inner border border-slate-200">
  Inner shadow with border
</div>`}
            />

            {/* Elevation Levels */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-slate-900 mb-4">Elevation Level Guidelines</h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-16 h-16 bg-white shadow-sm rounded-lg"></div>
                        <div>
                            <div className="text-slate-900 mb-1">Level 1 - shadow-sm</div>
                            <p className="text-sm text-slate-600">
                                Subtle elevation for cards, inputs, and containers that need slight separation
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-16 h-16 bg-white shadow-md rounded-lg"></div>
                        <div>
                            <div className="text-slate-900 mb-1">Level 2 - shadow-md</div>
                            <p className="text-sm text-slate-600">
                                Medium elevation for dropdowns, popovers, and interactive elements
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-16 h-16 bg-white shadow-lg rounded-lg"></div>
                        <div>
                            <div className="text-slate-900 mb-1">Level 3 - shadow-lg</div>
                            <p className="text-sm text-slate-600">
                                High elevation for modals, tooltips, and floating elements
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-16 h-16 bg-white shadow-2xl rounded-lg"></div>
                        <div>
                            <div className="text-slate-900 mb-1">Level 4 - shadow-2xl</div>
                            <p className="text-sm text-slate-600">
                                Maximum elevation for critical overlays, dialogs, and prominent elements
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Best Practices */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h3 className="text-indigo-900 mb-4">Shadow Best Practices</h3>
                <div className="space-y-3 text-sm text-indigo-700">
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p>Use consistent shadow levels throughout your design for visual hierarchy</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p>Apply higher elevations to elements that appear closer to the user</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p>Use hover shadow transitions to indicate interactivity</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p>Don't overuse shadows - they should enhance, not distract</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p>Consider using colored shadows sparingly for special emphasis</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

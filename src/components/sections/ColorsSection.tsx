import { ComponentShowcase } from '../ComponentShowcase';

export default function ColorsSection() {
    const colorPalettes = [
        {
            name: 'Slate',
            shades: [
                { value: 'slate-50', hex: '#f8fafc', text: 'text-slate-900' },
                { value: 'slate-100', hex: '#f1f5f9', text: 'text-slate-900' },
                { value: 'slate-200', hex: '#e2e8f0', text: 'text-slate-900' },
                { value: 'slate-300', hex: '#cbd5e1', text: 'text-slate-900' },
                { value: 'slate-400', hex: '#94a3b8', text: 'text-white' },
                { value: 'slate-500', hex: '#64748b', text: 'text-white' },
                { value: 'slate-600', hex: '#475569', text: 'text-white' },
                { value: 'slate-700', hex: '#334155', text: 'text-white' },
                { value: 'slate-800', hex: '#1e293b', text: 'text-white' },
                { value: 'slate-900', hex: '#0f172a', text: 'text-white' },
            ],
        },
        {
            name: 'Indigo',
            shades: [
                { value: 'indigo-50', hex: '#eef2ff', text: 'text-indigo-900' },
                { value: 'indigo-100', hex: '#e0e7ff', text: 'text-indigo-900' },
                { value: 'indigo-200', hex: '#c7d2fe', text: 'text-indigo-900' },
                { value: 'indigo-300', hex: '#a5b4fc', text: 'text-indigo-900' },
                { value: 'indigo-400', hex: '#818cf8', text: 'text-white' },
                { value: 'indigo-500', hex: '#6366f1', text: 'text-white' },
                { value: 'indigo-600', hex: '#4f46e5', text: 'text-white' },
                { value: 'indigo-700', hex: '#4338ca', text: 'text-white' },
                { value: 'indigo-800', hex: '#3730a3', text: 'text-white' },
                { value: 'indigo-900', hex: '#312e81', text: 'text-white' },
            ],
        },
        {
            name: 'Purple',
            shades: [
                { value: 'purple-50', hex: '#faf5ff', text: 'text-purple-900' },
                { value: 'purple-100', hex: '#f3e8ff', text: 'text-purple-900' },
                { value: 'purple-200', hex: '#e9d5ff', text: 'text-purple-900' },
                { value: 'purple-300', hex: '#d8b4fe', text: 'text-purple-900' },
                { value: 'purple-400', hex: '#c084fc', text: 'text-white' },
                { value: 'purple-500', hex: '#a855f7', text: 'text-white' },
                { value: 'purple-600', hex: '#9333ea', text: 'text-white' },
                { value: 'purple-700', hex: '#7e22ce', text: 'text-white' },
                { value: 'purple-800', hex: '#6b21a8', text: 'text-white' },
                { value: 'purple-900', hex: '#581c87', text: 'text-white' },
            ],
        },
        {
            name: 'Blue',
            shades: [
                { value: 'blue-50', hex: '#eff6ff', text: 'text-blue-900' },
                { value: 'blue-100', hex: '#dbeafe', text: 'text-blue-900' },
                { value: 'blue-200', hex: '#bfdbfe', text: 'text-blue-900' },
                { value: 'blue-300', hex: '#93c5fd', text: 'text-blue-900' },
                { value: 'blue-400', hex: '#60a5fa', text: 'text-white' },
                { value: 'blue-500', hex: '#3b82f6', text: 'text-white' },
                { value: 'blue-600', hex: '#2563eb', text: 'text-white' },
                { value: 'blue-700', hex: '#1d4ed8', text: 'text-white' },
                { value: 'blue-800', hex: '#1e40af', text: 'text-white' },
                { value: 'blue-900', hex: '#1e3a8a', text: 'text-white' },
            ],
        },
        {
            name: 'Green',
            shades: [
                { value: 'green-50', hex: '#f0fdf4', text: 'text-green-900' },
                { value: 'green-100', hex: '#dcfce7', text: 'text-green-900' },
                { value: 'green-200', hex: '#bbf7d0', text: 'text-green-900' },
                { value: 'green-300', hex: '#86efac', text: 'text-green-900' },
                { value: 'green-400', hex: '#4ade80', text: 'text-white' },
                { value: 'green-500', hex: '#22c55e', text: 'text-white' },
                { value: 'green-600', hex: '#16a34a', text: 'text-white' },
                { value: 'green-700', hex: '#15803d', text: 'text-white' },
                { value: 'green-800', hex: '#166534', text: 'text-white' },
                { value: 'green-900', hex: '#14532d', text: 'text-white' },
            ],
        },
        {
            name: 'Red',
            shades: [
                { value: 'red-50', hex: '#fef2f2', text: 'text-red-900' },
                { value: 'red-100', hex: '#fee2e2', text: 'text-red-900' },
                { value: 'red-200', hex: '#fecaca', text: 'text-red-900' },
                { value: 'red-300', hex: '#fca5a5', text: 'text-red-900' },
                { value: 'red-400', hex: '#f87171', text: 'text-white' },
                { value: 'red-500', hex: '#ef4444', text: 'text-white' },
                { value: 'red-600', hex: '#dc2626', text: 'text-white' },
                { value: 'red-700', hex: '#b91c1c', text: 'text-white' },
                { value: 'red-800', hex: '#991b1b', text: 'text-white' },
                { value: 'red-900', hex: '#7f1d1d', text: 'text-white' },
            ],
        },
    ];

    const semanticColors = [
        { name: 'Primary', bg: 'bg-indigo-600', text: 'Indigo-600', usage: 'Main brand color, CTAs' },
        { name: 'Success', bg: 'bg-green-600', text: 'Green-600', usage: 'Success states, confirmations' },
        { name: 'Warning', bg: 'bg-yellow-600', text: 'Yellow-600', usage: 'Warning messages, cautions' },
        { name: 'Error', bg: 'bg-red-600', text: 'Red-600', usage: 'Errors, destructive actions' },
        { name: 'Info', bg: 'bg-blue-600', text: 'Blue-600', usage: 'Information, neutral alerts' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Colors</h1>
                <p className="text-slate-600">
                    Complete color palette with primary, secondary, semantic, and neutral colors.
                </p>
            </div>

            {/* Semantic Colors */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-slate-900 mb-4">Semantic Colors</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {semanticColors.map((color) => (
                        <div key={color.name} className="space-y-2">
                            <div className={`${color.bg} h-20 rounded-lg flex items-center justify-center text-white`}>
                                {color.name}
                            </div>
                            <div className="text-sm">
                                <div className="text-slate-900">{color.text}</div>
                                <div className="text-slate-600 text-xs">{color.usage}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Color Palettes */}
            {colorPalettes.map((palette) => (
                <div key={palette.name} className="bg-white rounded-xl border border-slate-200 p-6">
                    <h3 className="text-slate-900 mb-4">{palette.name}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
                        {palette.shades.map((shade) => (
                            <div key={shade.value} className="space-y-2">
                                <div className={`bg-${shade.value} h-16 rounded-lg border border-slate-200`}></div>
                                <div className="text-xs">
                                    <div className="text-slate-900">{shade.value.split('-')[1]}</div>
                                    <div className="text-slate-600 font-mono">{shade.hex}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Usage Examples */}
            <ComponentShowcase
                title="Background Colors"
                description="Using colors for backgrounds"
                preview={
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-indigo-600 text-white p-6 rounded-lg text-center">
                            bg-indigo-600
                        </div>
                        <div className="bg-purple-600 text-white p-6 rounded-lg text-center">
                            bg-purple-600
                        </div>
                        <div className="bg-green-600 text-white p-6 rounded-lg text-center">
                            bg-green-600
                        </div>
                        <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                            bg-red-600
                        </div>
                    </div>
                }
                code={`<div className="bg-indigo-600 text-white">Indigo background</div>
<div className="bg-purple-600 text-white">Purple background</div>
<div className="bg-green-600 text-white">Green background</div>
<div className="bg-red-600 text-white">Red background</div>`}
            />

            <ComponentShowcase
                title="Text Colors"
                description="Using colors for text"
                preview={
                    <div className="w-full space-y-2">
                        <p className="text-slate-900">Slate 900 - Primary text</p>
                        <p className="text-slate-700">Slate 700 - Secondary text</p>
                        <p className="text-slate-600">Slate 600 - Muted text</p>
                        <p className="text-indigo-600">Indigo 600 - Accent text</p>
                        <p className="text-green-600">Green 600 - Success text</p>
                        <p className="text-red-600">Red 600 - Error text</p>
                    </div>
                }
                code={`<p className="text-slate-900">Primary text</p>
<p className="text-slate-700">Secondary text</p>
<p className="text-slate-600">Muted text</p>
<p className="text-indigo-600">Accent text</p>
<p className="text-green-600">Success text</p>
<p className="text-red-600">Error text</p>`}
            />

            <ComponentShowcase
                title="Border Colors"
                description="Using colors for borders"
                preview={
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="border-2 border-indigo-600 p-6 rounded-lg text-center text-slate-700">
                            Indigo border
                        </div>
                        <div className="border-2 border-purple-600 p-6 rounded-lg text-center text-slate-700">
                            Purple border
                        </div>
                        <div className="border-2 border-green-600 p-6 rounded-lg text-center text-slate-700">
                            Green border
                        </div>
                        <div className="border-2 border-red-600 p-6 rounded-lg text-center text-slate-700">
                            Red border
                        </div>
                    </div>
                }
                code={`<div className="border-2 border-indigo-600">Indigo border</div>
<div className="border-2 border-purple-600">Purple border</div>
<div className="border-2 border-green-600">Green border</div>
<div className="border-2 border-red-600">Red border</div>`}
            />

            <ComponentShowcase
                title="Gradient Backgrounds"
                description="Using color gradients"
                preview={
                    <div className="w-full space-y-4">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg text-center">
                            Indigo to Purple
                        </div>
                        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg text-center">
                            Green to Blue
                        </div>
                        <div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white p-6 rounded-lg text-center">
                            Pink to Orange
                        </div>
                    </div>
                }
                code={`<div className="bg-gradient-to-r from-indigo-600 to-purple-600">
  Indigo to Purple gradient
</div>

<div className="bg-gradient-to-r from-green-600 to-blue-600">
  Green to Blue gradient
</div>

<div className="bg-gradient-to-br from-pink-600 to-orange-600">
  Pink to Orange gradient (diagonal)
</div>`}
            />

            {/* Color Guidelines */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h3 className="text-indigo-900 mb-4">Color Usage Guidelines</h3>
                <div className="space-y-3 text-sm text-indigo-700">
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Primary (Indigo):</strong> Use for main CTAs, links, and primary actions</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Success (Green):</strong> Use for success states, confirmations, and positive feedback</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Warning (Yellow):</strong> Use for warnings, cautions, and items requiring attention</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Error (Red):</strong> Use for errors, destructive actions, and critical alerts</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Neutral (Slate):</strong> Use for text, borders, backgrounds, and subtle UI elements</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

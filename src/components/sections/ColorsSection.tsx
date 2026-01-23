import { ComponentShowcase } from '../ComponentShowcase';
import { colorPalettes, semanticColors } from '../../../assets/colorsData';

export default function ColorsSection() {
    
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
                code={`
<div className="bg-indigo-600 text-white">Indigo background</div>
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
                code={`
<p className="text-slate-900">Primary text</p>
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
                code={`
<div className="border-2 border-indigo-600">Indigo border</div>
<div className="border-2 border-purple-600">Purple border</div>
<div className="border-2 border-green-600">Green border</div>
<div className="border-2 border-red-600">Red border</div>`}
            />

            <ComponentShowcase
                title="Gradient Backgrounds"
                description="Using color gradients"
                preview={
                    <div className="w-full space-y-4">
                        <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg text-center">
                            Indigo to Purple
                        </div>
                        <div className="bg-linear-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg text-center">
                            Green to Blue
                        </div>
                        <div className="bg-linear-to-r from-pink-600 to-orange-600 text-white p-6 rounded-lg text-center">
                            Pink to Orange
                        </div>
                    </div>
                }
                code={`
<div className="bg-linear-to-r from-indigo-600 to-purple-600">
  Indigo to Purple gradient
</div>

<div className="bg-linear-to-r from-green-600 to-blue-600">
  Green to Blue gradient
</div>

<div className="bg-linear-to-r from-pink-600 to-orange-600">
  Pink to Orange gradient (diagonal)
</div>`}
            />

            {/* Color Guidelines */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h3 className="text-indigo-900 mb-4">Color Usage Guidelines</h3>
                <div className="space-y-3 text-sm text-indigo-700">
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p><strong>Primary (Indigo):</strong> Use for main CTAs, links, and primary actions</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p><strong>Success (Green):</strong> Use for success states, confirmations, and positive feedback</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p><strong>Warning (Yellow):</strong> Use for warnings, cautions, and items requiring attention</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p><strong>Error (Red):</strong> Use for errors, destructive actions, and critical alerts</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                        <p><strong>Neutral (Slate):</strong> Use for text, borders, backgrounds, and subtle UI elements</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { ComponentShowcase } from '../ComponentShowcase';

export function TypographySection() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Typography</h1>
                <p className="text-slate-600">
                    Typography system including headings, body text, captions, and labels.
                </p>
            </div>

            {/* Headings */}
            <ComponentShowcase
                title="Headings"
                description="Heading hierarchy from H1 to H6"
                preview={
                    <div className="w-full space-y-4">
                        <h1 className="text-slate-900">Heading 1</h1>
                        <h2 className="text-slate-900">Heading 2</h2>
                        <h3 className="text-slate-900">Heading 3</h3>
                        <h4 className="text-slate-900">Heading 4</h4>
                        <h5 className="text-slate-900">Heading 5</h5>
                        <h6 className="text-slate-900">Heading 6</h6>
                    </div>
                }
                code={`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
            />

            {/* Body Text */}
            <ComponentShowcase
                title="Body Text"
                description="Different body text sizes"
                preview={
                    <div className="w-full space-y-4">
                        <p className="text-lg text-slate-700">
                            Large body text - Perfect for introductory paragraphs and important content that needs emphasis.
                        </p>
                        <p className="text-slate-700">
                            Regular body text - The standard size for most content. Highly readable and works well for paragraphs.
                        </p>
                        <p className="text-sm text-slate-600">
                            Small body text - Ideal for secondary information, captions, and supporting details.
                        </p>
                        <p className="text-xs text-slate-600">
                            Extra small text - Used for minor details, footnotes, and auxiliary information.
                        </p>
                    </div>
                }
                code={`{/* Large */}
<p className="text-lg text-slate-700">
  Large body text - Perfect for introductory paragraphs.
</p>

{/* Regular */}
<p className="text-slate-700">
  Regular body text - The standard size for most content.
</p>

{/* Small */}
<p className="text-sm text-slate-600">
  Small body text - Ideal for secondary information.
</p>

{/* Extra Small */}
<p className="text-xs text-slate-600">
  Extra small text - Used for minor details.
</p>`}
            />

            {/* Font Weights */}
            <ComponentShowcase
                title="Font Weights"
                description="Different font weight variations"
                preview={
                    <div className="w-full space-y-2">
                        <p className="text-slate-700 font-light">Light - Elegant and airy appearance</p>
                        <p className="text-slate-700 font-normal">Regular - Standard weight for body text</p>
                        <p className="text-slate-700 font-medium">Medium - Slightly emphasized text</p>
                        <p className="text-slate-900 font-semibold">Semibold - Strong emphasis</p>
                        <p className="text-slate-900 font-bold">Bold - Maximum emphasis</p>
                    </div>
                }
                code={`<p className="font-light">Light text</p>
<p className="font-normal">Regular text</p>
<p className="font-medium">Medium text</p>
<p className="font-semibold">Semibold text</p>
<p className="font-bold">Bold text</p>`}
            />

            {/* Text Colors */}
            <ComponentShowcase
                title="Text Colors"
                description="Semantic text color variations"
                preview={
                    <div className="w-full space-y-2">
                        <p className="text-slate-900">Primary text color - Main content</p>
                        <p className="text-slate-700">Secondary text color - Body text</p>
                        <p className="text-slate-600">Muted text color - Supporting text</p>
                        <p className="text-slate-500">Subtle text color - Placeholder text</p>
                        <p className="text-indigo-600">Accent text color - Links and highlights</p>
                        <p className="text-green-600">Success text color - Positive messages</p>
                        <p className="text-red-600">Error text color - Error messages</p>
                        <p className="text-yellow-600">Warning text color - Warnings</p>
                    </div>
                }
                code={`<p className="text-slate-900">Primary text</p>
<p className="text-slate-700">Secondary text</p>
<p className="text-slate-600">Muted text</p>
<p className="text-indigo-600">Accent text</p>
<p className="text-green-600">Success text</p>
<p className="text-red-600">Error text</p>`}
            />

            {/* Text Alignment */}
            <ComponentShowcase
                title="Text Alignment"
                description="Text alignment options"
                preview={
                    <div className="w-full space-y-3">
                        <p className="text-left text-slate-700">Left aligned text - Default alignment for most content</p>
                        <p className="text-center text-slate-700">Center aligned text - Used for headings and special content</p>
                        <p className="text-right text-slate-700">Right aligned text - Often used for numbers and dates</p>
                        <p className="text-justify text-slate-700">
                            Justified text - Text is aligned to both the left and right margins, creating a clean block of text. This is useful for formal documents and print-style layouts.
                        </p>
                    </div>
                }
                code={`<p className="text-left">Left aligned text</p>
<p className="text-center">Center aligned text</p>
<p className="text-right">Right aligned text</p>
<p className="text-justify">Justified text</p>`}
            />

            {/* Text Decoration */}
            <ComponentShowcase
                title="Text Decoration"
                description="Text decoration and styling"
                preview={
                    <div className="w-full space-y-2">
                        <p className="text-slate-700 underline">Underlined text</p>
                        <p className="text-slate-700 line-through">Strikethrough text</p>
                        <p className="text-slate-700 italic">Italic text</p>
                        <p className="text-slate-700 uppercase">Uppercase text</p>
                        <p className="text-slate-700 lowercase">LOWERCASE TEXT</p>
                        <p className="text-slate-700 capitalize">capitalized text</p>
                    </div>
                }
                code={`<p className="underline">Underlined text</p>
<p className="line-through">Strikethrough text</p>
<p className="italic">Italic text</p>
<p className="uppercase">Uppercase text</p>
<p className="lowercase">Lowercase text</p>
<p className="capitalize">Capitalized text</p>`}
            />

            {/* Line Height */}
            <ComponentShowcase
                title="Line Height"
                description="Different line height options"
                preview={
                    <div className="w-full space-y-4">
                        <p className="text-slate-700 leading-tight">
                            Tight line height - The quick brown fox jumps over the lazy dog. This text has minimal spacing between lines for a compact appearance.
                        </p>
                        <p className="text-slate-700 leading-normal">
                            Normal line height - The quick brown fox jumps over the lazy dog. This text has standard spacing between lines for optimal readability.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            Relaxed line height - The quick brown fox jumps over the lazy dog. This text has generous spacing between lines for a more open feel.
                        </p>
                    </div>
                }
                code={`<p className="leading-tight">Tight line height text</p>
<p className="leading-normal">Normal line height text</p>
<p className="leading-relaxed">Relaxed line height text</p>
<p className="leading-loose">Loose line height text</p>`}
            />

            {/* Labels */}
            <ComponentShowcase
                title="Labels"
                description="Form labels and input labels"
                preview={
                    <div className="w-full space-y-3">
                        <label className="block text-sm text-slate-700">Default Label</label>
                        <label className="block text-sm text-slate-700 font-medium">Medium Weight Label</label>
                        <label className="block text-sm text-slate-900 font-semibold">Semibold Label</label>
                        <label className="block text-xs text-slate-600 uppercase tracking-wide">Small Caps Label</label>
                    </div>
                }
                code={`<label className="block text-sm text-slate-700">Default Label</label>
<label className="block text-sm text-slate-700 font-medium">Medium Weight Label</label>
<label className="block text-sm text-slate-900 font-semibold">Semibold Label</label>
<label className="block text-xs text-slate-600 uppercase tracking-wide">Small Caps Label</label>`}
            />

            {/* Captions */}
            <ComponentShowcase
                title="Captions"
                description="Caption and helper text styles"
                preview={
                    <div className="w-full space-y-2">
                        <p className="text-xs text-slate-600">Small caption text for additional information</p>
                        <p className="text-xs text-slate-500">Muted caption text for subtle details</p>
                        <p className="text-xs text-green-600">Success caption with color</p>
                        <p className="text-xs text-red-600">Error caption with color</p>
                    </div>
                }
                code={`<p className="text-xs text-slate-600">Small caption text</p>
<p className="text-xs text-slate-500">Muted caption text</p>
<p className="text-xs text-green-600">Success caption</p>
<p className="text-xs text-red-600">Error caption</p>`}
            />

            {/* Links */}
            <ComponentShowcase
                title="Links"
                description="Link styles and variations"
                preview={
                    <div className="w-full space-y-2">
                        <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">
                            Default underlined link
                        </a>
                        <br />
                        <a href="#" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                            Link with hover underline
                        </a>
                        <br />
                        <a href="#" className="text-indigo-600 hover:text-indigo-700">
                            Link without underline
                        </a>
                        <br />
                        <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors">
                            Subtle link with color transition
                        </a>
                    </div>
                }
                code={`{/* Default underlined */}
<a href="#" className="text-indigo-600 hover:text-indigo-700 underline">
  Default link
</a>

{/* Hover underline */}
<a href="#" className="text-indigo-600 hover:text-indigo-700 hover:underline">
  Hover underline link
</a>

{/* No underline */}
<a href="#" className="text-indigo-600 hover:text-indigo-700">
  Clean link
</a>`}
            />

            {/* Code Text */}
            <ComponentShowcase
                title="Code & Monospace"
                description="Inline code and monospace text"
                preview={
                    <div className="w-full space-y-3">
                        <p className="text-slate-700">
                            This is <code className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded text-sm font-mono">inline code</code> within a paragraph.
                        </p>
                        <p className="text-slate-700">
                            Use <code className="px-1.5 py-0.5 bg-indigo-100 text-indigo-800 rounded text-sm font-mono">className</code> to style elements.
                        </p>
                        <p className="font-mono text-sm text-slate-700">This entire paragraph uses monospace font</p>
                    </div>
                }
                code={`<p>
  This is <code className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded text-sm font-mono">inline code</code> within text.
</p>

<p className="font-mono text-sm">Monospace paragraph</p>`}
            />

            {/* Blockquote */}
            <ComponentShowcase
                title="Blockquote"
                description="Quotation and citation styles"
                preview={
                    <div className="w-full">
                        <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 text-slate-700 italic">
                            "Design is not just what it looks like and feels like. Design is how it works."
                            <footer className="text-sm text-slate-600 mt-2 not-italic">— Steve Jobs</footer>
                        </blockquote>
                    </div>
                }
                code={`<blockquote className="border-l-4 border-indigo-500 pl-4 py-2 text-slate-700 italic">
  "Design is not just what it looks like and feels like. Design is how it works."
  <footer className="text-sm text-slate-600 mt-2 not-italic">— Steve Jobs</footer>
</blockquote>`}
            />
        </div>
    );
}

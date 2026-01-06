import { useState } from 'react';
import { Check, Copy, Code } from 'lucide-react';

type ComponentShowcaseProps = {
    title: string;
    description?: string;
    preview: React.ReactNode;
    code: string;
    language?: 'tsx' | 'html';
};

export function ComponentShowcase({ title, description, preview, code, language = 'tsx' }: ComponentShowcaseProps) {
    const [copied, setCopied] = useState(false);
    const [showCode, setShowCode] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-slate-900 mb-1">{title}</h3>
                        {description && <p className="text-sm text-slate-600">{description}</p>}
                    </div>
                    <button
                        onClick={() => setShowCode(!showCode)}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                        <Code className="w-4 h-4" />
                        {showCode ? 'Hide' : 'Show'} Code
                    </button>
                </div>
            </div>

            {/* Preview */}
            <div className="p-8 bg-slate-50">
                <div className="flex items-center justify-center flex-wrap gap-4">
                    {preview}
                </div>
            </div>

            {/* Code */}
            {showCode && (
                <div className="border-t border-slate-200">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900 text-slate-100">
                        <span className="text-xs uppercase tracking-wide text-slate-400">{language}</span>
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3 h-3" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3 h-3" />
                                    Copy
                                </>
                            )}
                        </button>
                    </div>
                    <div className="p-4 bg-slate-900 overflow-x-auto">
                        <pre className="text-sm text-slate-100">
                            <code>{code}</code>
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
}

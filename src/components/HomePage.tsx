import { Search, Zap, Code, Palette, CheckCircle } from 'lucide-react';
import * as React from 'react';
import { FaGithub } from "react-icons/fa";
import { categories } from '../../assets/categories';

type HomePageProps = {
    onNavigate: (id: string) => void;
    searchQuery: string;
    onSearchChange: (value: string) => void;
    firstMatchId?: string;
};

export function HomePage({ onNavigate, searchQuery, onSearchChange, firstMatchId }: HomePageProps) {
    const categoriesRef = React.useRef<HTMLDivElement | null>(null);

    const features = [
        {
            icon: Zap,
            title: 'Production Ready',
            description: 'All components are built with best practices and ready to use in production applications.',
        },
        {
            icon: Code,
            title: 'Copy & Paste',
            description: 'Every component includes code snippets that you can copy and paste directly into your project.',
        },
        {
            icon: Palette,
            title: 'Fully Customizable',
            description: 'Built with Tailwind CSS, making it easy to customize colors, spacing, and styles.',
        },
        {
            icon: CheckCircle,
            title: 'Multiple Variants',
            description: 'Each component comes with multiple sizes, states, and style variations.',
        },
    ];

    const scrollToCategories = () => {
        categoriesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-12">
                <h1 className="text-slate-900 max-w-3xl mx-auto">
                    Beautiful UI Components for Modern Web Applications
                </h1>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                    A comprehensive design system with 100+ components built with React and Tailwind CSS.
                    Copy, paste, and customize to build your next project faster.
                </p>
                <div className="flex items-center justify-center gap-4 pt-6">
                    <button onClick={scrollToCategories} className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Browse Components
                    </button>
                    <a
                        href="https://github.com/VidaMaleki/component-lab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        <FaGithub className="w-5 h-5" />
                        View on GitHub
                    </a>
                </div>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && firstMatchId) onNavigate(firstMatchId);
                        }}
                        placeholder="Search for components, variants, or patterns..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                    />
                </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div key={feature.title} className="bg-white p-6 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <Icon className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-600">{feature.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Categories */}
            <div ref={categoriesRef}>
                <h2 className="text-slate-900 mb-6">Component Categories</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            onClick={() => onNavigate(category.id)}
                            className="bg-white p-5 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    {category.name}
                                </div>
                                <div className={`px-2.5 py-1 rounded-full text-xs ${category.color}`}>
                                    {category.count}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Getting Started */}
            <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <h2 className="text-slate-900 mb-4">Getting Started</h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm shrink-0 mt-0.5">
                            1
                        </div>
                        <div>
                            <div className="text-slate-900 mb-1">Browse Components</div>
                            <p className="text-sm text-slate-600">
                                Explore the sidebar to find the component you need
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm shrink-0 mt-0.5">
                            2
                        </div>
                        <div>
                            <div className="text-slate-900 mb-1">Copy the Code</div>
                            <p className="text-sm text-slate-600">
                                Click the "Copy" button on any component snippet
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm shrink-0 mt-0.5">
                            3
                        </div>
                        <div>
                            <div className="text-slate-900 mb-1">Paste and Customize</div>
                            <p className="text-sm text-slate-600">
                                Add it to your project and customize to match your design
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

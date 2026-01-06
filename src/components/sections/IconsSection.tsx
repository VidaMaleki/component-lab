import { ComponentShowcase } from '../ComponentShowcase';
import {
    Home, User, Settings, Bell, Search, Heart, Star, ShoppingCart, Mail, Phone,
    Calendar, Clock, MapPin, Download, Upload, Trash2, Edit, Plus, Minus, Check,
    X, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, Filter, Share2,
    Eye, EyeOff, Lock, Unlock, Image, File, Folder, AlertCircle, Info, HelpCircle,
    Send, MessageCircle, Bookmark, Flag, Award, TrendingUp, Activity,
    BarChart, PieChart, Zap, Sun, Moon, Camera, Mic, Video, Play, Pause
} from 'lucide-react';

export function IconsSection() {
    const iconGroups = [
        {
            title: 'Common',
            icons: [
                { Icon: Home, name: 'Home' },
                { Icon: User, name: 'User' },
                { Icon: Settings, name: 'Settings' },
                { Icon: Bell, name: 'Bell' },
                { Icon: Search, name: 'Search' },
                { Icon: Heart, name: 'Heart' },
                { Icon: Star, name: 'Star' },
                { Icon: ShoppingCart, name: 'ShoppingCart' },
            ],
        },
        {
            title: 'Communication',
            icons: [
                { Icon: Mail, name: 'Mail' },
                { Icon: Phone, name: 'Phone' },
                { Icon: Send, name: 'Send' },
                { Icon: MessageCircle, name: 'MessageCircle' },
                { Icon: Share2, name: 'Share2' },
            ],
        },
        {
            title: 'Actions',
            icons: [
                { Icon: Plus, name: 'Plus' },
                { Icon: Minus, name: 'Minus' },
                { Icon: Edit, name: 'Edit' },
                { Icon: Trash2, name: 'Trash2' },
                { Icon: Download, name: 'Download' },
                { Icon: Upload, name: 'Upload' },
                { Icon: Check, name: 'Check' },
                { Icon: X, name: 'X' },
            ],
        },
        {
            title: 'Navigation',
            icons: [
                { Icon: ChevronRight, name: 'ChevronRight' },
                { Icon: ChevronLeft, name: 'ChevronLeft' },
                { Icon: ChevronUp, name: 'ChevronUp' },
                { Icon: ChevronDown, name: 'ChevronDown' },
                { Icon: Menu, name: 'Menu' },
            ],
        },
        {
            title: 'Status',
            icons: [
                { Icon: AlertCircle, name: 'AlertCircle' },
                { Icon: Info, name: 'Info' },
                { Icon: HelpCircle, name: 'HelpCircle' },
                { Icon: Check, name: 'Check' },
                { Icon: X, name: 'X' },
            ],
        },
        {
            title: 'Media',
            icons: [
                { Icon: Image, name: 'Image' },
                { Icon: Camera, name: 'Camera' },
                { Icon: Video, name: 'Video' },
                { Icon: Mic, name: 'Mic' },
                { Icon: Play, name: 'Play' },
                { Icon: Pause, name: 'Pause' },
            ],
        },
        {
            title: 'Charts & System',
            icons: [
                { Icon: Calendar, name: 'Calendar' },
                { Icon: Clock, name: 'Clock' },
                { Icon: MapPin, name: 'MapPin' },
                { Icon: Filter, name: 'Filter' },
                { Icon: Eye, name: 'Eye' },
                { Icon: EyeOff, name: 'EyeOff' },
                { Icon: Lock, name: 'Lock' },
                { Icon: Unlock, name: 'Unlock' },
                { Icon: File, name: 'File' },
                { Icon: Folder, name: 'Folder' },
                { Icon: TrendingUp, name: 'TrendingUp' },
                { Icon: Activity, name: 'Activity' },
                { Icon: BarChart, name: 'BarChart' },
                { Icon: PieChart, name: 'PieChart' },
                { Icon: Zap, name: 'Zap' },
                { Icon: Sun, name: 'Sun' },
                { Icon: Moon, name: 'Moon' },
            ],
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Icons</h1>
                <p className="text-slate-600">
                    Icon library powered by Lucide React. Over 1000+ beautiful, consistent icons.
                </p>
            </div>

            {/* Icon Sizes */}
            <ComponentShowcase
                title="Icon Sizes"
                description="Icons in different sizes"
                preview={
                    <>
                        <Star className="w-4 h-4 text-slate-600" />
                        <Star className="w-5 h-5 text-slate-600" />
                        <Star className="w-6 h-6 text-slate-600" />
                        <Star className="w-8 h-8 text-slate-600" />
                        <Star className="w-10 h-10 text-slate-600" />
                        <Star className="w-12 h-12 text-slate-600" />
                    </>
                }
                code={`import { Star } from 'lucide-react';

<Star className="w-4 h-4" />   {/* 16px */}
<Star className="w-5 h-5" />   {/* 20px */}
<Star className="w-6 h-6" />   {/* 24px */}
<Star className="w-8 h-8" />   {/* 32px */}
<Star className="w-10 h-10" /> {/* 40px */}
<Star className="w-12 h-12" /> {/* 48px */}`}
            />

            {/* Icon Colors */}
            <ComponentShowcase
                title="Icon Colors"
                description="Icons with different colors"
                preview={
                    <>
                        <Heart className="w-6 h-6 text-slate-600" />
                        <Heart className="w-6 h-6 text-indigo-600" />
                        <Heart className="w-6 h-6 text-purple-600" />
                        <Heart className="w-6 h-6 text-pink-600" />
                        <Heart className="w-6 h-6 text-red-600" />
                        <Heart className="w-6 h-6 text-orange-600" />
                        <Heart className="w-6 h-6 text-green-600" />
                        <Heart className="w-6 h-6 text-blue-600" />
                    </>
                }
                code={`import { Heart } from 'lucide-react';

<Heart className="w-6 h-6 text-slate-600" />
<Heart className="w-6 h-6 text-indigo-600" />
<Heart className="w-6 h-6 text-pink-600" />
<Heart className="w-6 h-6 text-red-600" />`}
            />

            {/* Filled Icons */}
            <ComponentShowcase
                title="Filled Icons"
                description="Icons with fill effect"
                preview={
                    <>
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                        <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                        <Bell className="w-6 h-6 text-indigo-500 fill-indigo-500" />
                        <Bookmark className="w-6 h-6 text-purple-500 fill-purple-500" />
                        <Flag className="w-6 h-6 text-orange-500 fill-orange-500" />
                    </>
                }
                code={`import { Star, Heart } from 'lucide-react';

<Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
<Heart className="w-6 h-6 text-red-500 fill-red-500" />`}
            />

            {/* Icons with Background */}
            <ComponentShowcase
                title="Icons with Background"
                description="Icons inside colored containers"
                preview={
                    <>
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <User className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Check className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Award className="w-5 h-5 text-purple-600" />
                        </div>
                    </>
                }
                code={`import { User, Check } from 'lucide-react';

<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
  <User className="w-5 h-5 text-indigo-600" />
</div>

<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
  <Check className="w-5 h-5 text-green-600" />
</div>`}
            />

            {/* Icon Grid */}
            {iconGroups.map((group) => (
                <div key={group.title} className="bg-white rounded-xl border border-slate-200 p-6">
                    <h3 className="text-slate-900 mb-4">{group.title} Icons</h3>
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                        {group.icons.map(({ Icon, name }) => (
                            <div
                                key={name}
                                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                                <Icon className="w-6 h-6 text-slate-600" />
                                <span className="text-xs text-slate-600 text-center">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Usage Example */}
            <ComponentShowcase
                title="Usage Example"
                description="How to import and use icons"
                preview={
                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                            <Download className="w-4 h-4" />
                            Download
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50">
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            <Check className="w-4 h-4" />
                            Confirm
                        </button>
                    </div>
                }
                code={`import { Download, Share2, Check } from 'lucide-react';

<button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg">
  <Download className="w-4 h-4" />
  Download
</button>

<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg">
  <Share2 className="w-4 h-4" />
  Share
</button>`}
            />

            {/* Icon Library Info */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h3 className="text-indigo-900 mb-2">Using Lucide React Icons</h3>
                <p className="text-sm text-indigo-700 mb-4">
                    This design system uses Lucide React, which provides over 1000+ beautiful, consistent icons. All icons are:
                </p>
                <ul className="space-y-2 text-sm text-indigo-700">
                    <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Fully customizable with Tailwind CSS classes</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Tree-shakeable for optimal bundle size</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Accessible and semantic</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Easy to import and use</span>
                    </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-indigo-200">
                    <code className="text-xs text-indigo-800 bg-indigo-100 px-2 py-1 rounded">
                        import {'{ IconName }'} from 'lucide-react';
                    </code>
                </div>
            </div>
        </div>
    );
}

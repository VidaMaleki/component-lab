import { useState, type ComponentType } from 'react';
import { Search, Menu, X, Home, Square, FormInput, Navigation, CreditCard, Layout, Bell, Tag, User, Type, Palette, Layers, Box, Sparkles, Image, BarChart3, Command, Zap, FileText } from 'lucide-react';
import { HomePage } from './components/HomePage';
import { ButtonsSection } from './components/sections/ButtonsSection';
import { FormsSection } from './components/sections/FormsSection';
import { NavigationSection } from './components/sections/NavigationSection';
import { CardsSection } from './components/sections/CardsSection';
import { ModalsSection } from './components/sections/ModalsSection';
import { TablesSection } from './components/sections/TablesSection';
import { AlertsSection } from './components/sections/AlertsSection';
import { BadgesSection } from './components/sections/BadgesSection';
import { AvatarsSection } from './components/sections/AvatarsSection';
import { TypographySection } from './components/sections/TypographySection';
import { IconsSection } from './components/sections/IconsSection';
import { LayoutsSection } from './components/sections/LayoutsSection';
import { ColorsSection } from './components/sections/ColorsSection';
import { ElevationSection } from './components/sections/ElevationSection';
import { AnimationsSection } from './components/sections/AnimationsSection';
import { CarouselsSection } from './components/sections/CarouselsSection';
import { ChartsSection } from './components/sections/ChartsSection';
import { CommandPaletteSection } from './components/sections/CommandPaletteSection';
import { MicroInteractionsSection } from './components/sections/MicroInteractionsSection';
import { RichTextSection } from './components/sections/RichTextSection';

type Section = {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  component: React.ComponentType;
};

const sections: Section[] = [
  { id: 'home', label: 'Home', icon: Home, component: HomePage },
  { id: 'buttons', label: 'Buttons', icon: Square, component: ButtonsSection },
  { id: 'forms', label: 'Form Elements', icon: FormInput, component: FormsSection },
  { id: 'navigation', label: 'Navigation', icon: Navigation, component: NavigationSection },
  { id: 'cards', label: 'Cards', icon: CreditCard, component: CardsSection },
  { id: 'modals', label: 'Modals & Overlays', icon: Layout, component: ModalsSection },
  { id: 'tables', label: 'Tables', icon: Box, component: TablesSection },
  { id: 'alerts', label: 'Alerts & Toasts', icon: Bell, component: AlertsSection },
  { id: 'badges', label: 'Badges & Chips', icon: Tag, component: BadgesSection },
  { id: 'avatars', label: 'Avatars', icon: User, component: AvatarsSection },
  { id: 'carousels', label: 'Carousels & Sliders', icon: Image, component: CarouselsSection },
  { id: 'animations', label: 'Animations & Transitions', icon: Sparkles, component: AnimationsSection },
  { id: 'charts', label: 'Interactive Charts', icon: BarChart3, component: ChartsSection },
  { id: 'command', label: 'Command Palettes', icon: Command, component: CommandPaletteSection },
  { id: 'micro', label: 'Micro-interactions', icon: Zap, component: MicroInteractionsSection },
  { id: 'typography', label: 'Typography', icon: Type, component: TypographySection },
  { id: 'richtext', label: 'Rich Text Editors', icon: FileText, component: RichTextSection },
  { id: 'icons', label: 'Icons', icon: Layers, component: IconsSection },
  { id: 'layouts', label: 'Layouts', icon: Layout, component: LayoutsSection },
  { id: 'colors', label: 'Colors', icon: Palette, component: ColorsSection },
  { id: 'elevation', label: 'Elevation', icon: Layers, component: ElevationSection },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || HomePage;

  const filteredSections = sections.filter(section =>
    section.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-slate-900 tracking-tight">DesignSystem</div>
                <div className="text-xs text-slate-500">Component Library</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-[73px] left-0 z-40 w-64 h-[calc(100vh-73px)] bg-white border-r border-slate-200 overflow-y-auto transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}
        >
          <nav className="p-4 space-y-1">
            {filteredSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === section.id
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-73px)] overflow-y-auto">
          <div className="max-w-7xl mx-auto p-6 md:p-8 lg:p-12">
            <ActiveComponent />
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

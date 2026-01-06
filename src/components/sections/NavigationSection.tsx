import { ComponentShowcase } from '../ComponentShowcase';
import { Home, Settings, User, Bell, Menu, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function NavigationSection() {
    const [activePage, setActivePage] = useState(1);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Navigation</h1>
                <p className="text-slate-600">
                    Navigation components including navbars, sidebars, breadcrumbs, tabs, and pagination.
                </p>
            </div>

            {/* Navbar */}
            <ComponentShowcase
                title="Navbar"
                description="Top navigation bar with links"
                preview={
                    <div className="w-full">
                        <nav className="bg-white border border-slate-200 rounded-lg px-4 py-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-8">
                                    <div className="text-slate-900">Brand</div>
                                    <div className="hidden md:flex items-center gap-6">
                                        <a href="#" className="text-indigo-600">Home</a>
                                        <a href="#" className="text-slate-600 hover:text-slate-900">About</a>
                                        <a href="#" className="text-slate-600 hover:text-slate-900">Services</a>
                                        <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
                                        Sign In
                                    </button>
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                }
                code={`<nav className="bg-white border border-slate-200 rounded-lg px-4 py-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-8">
      <div className="text-slate-900">Brand</div>
      <div className="flex items-center gap-6">
        <a href="#" className="text-indigo-600">Home</a>
        <a href="#" className="text-slate-600 hover:text-slate-900">About</a>
        <a href="#" className="text-slate-600 hover:text-slate-900">Services</a>
        <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
        Sign In
      </button>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Sign Up
      </button>
    </div>
  </div>
</nav>`}
            />

            {/* Sidebar */}
            <ComponentShowcase
                title="Sidebar Navigation"
                description="Vertical navigation sidebar"
                preview={
                    <div className="w-64">
                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                            <div className="space-y-1">
                                <a href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Home className="w-5 h-5" />
                                    Dashboard
                                </a>
                                <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
                                    <User className="w-5 h-5" />
                                    Profile
                                </a>
                                <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
                                    <Settings className="w-5 h-5" />
                                    Settings
                                </a>
                                <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
                                    <Bell className="w-5 h-5" />
                                    Notifications
                                </a>
                            </div>
                        </div>
                    </div>
                }
                code={`import { Home, User, Settings, Bell } from 'lucide-react';

<div className="bg-white border border-slate-200 rounded-lg p-4">
  <div className="space-y-1">
    <a href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg">
      <Home className="w-5 h-5" />
      Dashboard
    </a>
    <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
      <User className="w-5 h-5" />
      Profile
    </a>
    <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">
      <Settings className="w-5 h-5" />
      Settings
    </a>
  </div>
</div>`}
            />

            {/* Breadcrumbs */}
            <ComponentShowcase
                title="Breadcrumbs"
                description="Navigation breadcrumb trail"
                preview={
                    <nav className="flex items-center gap-2 text-sm">
                        <a href="#" className="text-indigo-600 hover:text-indigo-700">Home</a>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <a href="#" className="text-indigo-600 hover:text-indigo-700">Products</a>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-700">Electronics</span>
                    </nav>
                }
                code={`import { ChevronRight } from 'lucide-react';

<nav className="flex items-center gap-2 text-sm">
  <a href="#" className="text-indigo-600 hover:text-indigo-700">Home</a>
  <ChevronRight className="w-4 h-4 text-slate-400" />
  <a href="#" className="text-indigo-600 hover:text-indigo-700">Products</a>
  <ChevronRight className="w-4 h-4 text-slate-400" />
  <span className="text-slate-700">Electronics</span>
</nav>`}
            />

            {/* Tabs */}
            <ComponentShowcase
                title="Tabs"
                description="Tabbed navigation interface"
                preview={
                    <div className="w-full">
                        <div className="border-b border-slate-200">
                            <nav className="flex gap-8">
                                <button className="pb-3 border-b-2 border-indigo-600 text-indigo-600">
                                    Overview
                                </button>
                                <button className="pb-3 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
                                    Analytics
                                </button>
                                <button className="pb-3 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
                                    Reports
                                </button>
                                <button className="pb-3 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
                                    Settings
                                </button>
                            </nav>
                        </div>
                    </div>
                }
                code={`<div className="border-b border-slate-200">
  <nav className="flex gap-8">
    <button className="pb-3 border-b-2 border-indigo-600 text-indigo-600">
      Overview
    </button>
    <button className="pb-3 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
      Analytics
    </button>
    <button className="pb-3 border-b-2 border-transparent text-slate-600 hover:text-slate-900">
      Reports
    </button>
  </nav>
</div>`}
            />

            {/* Pills Tabs */}
            <ComponentShowcase
                title="Pill Tabs"
                description="Rounded pill-style tabs"
                preview={
                    <div className="inline-flex gap-2 p-1 bg-slate-100 rounded-lg">
                        <button className="px-4 py-2 bg-white text-slate-900 rounded-lg shadow-sm">
                            All
                        </button>
                        <button className="px-4 py-2 text-slate-600 hover:text-slate-900">
                            Active
                        </button>
                        <button className="px-4 py-2 text-slate-600 hover:text-slate-900">
                            Completed
                        </button>
                        <button className="px-4 py-2 text-slate-600 hover:text-slate-900">
                            Archived
                        </button>
                    </div>
                }
                code={`<div className="inline-flex gap-2 p-1 bg-slate-100 rounded-lg">
  <button className="px-4 py-2 bg-white text-slate-900 rounded-lg shadow-sm">
    All
  </button>
  <button className="px-4 py-2 text-slate-600 hover:text-slate-900">
    Active
  </button>
  <button className="px-4 py-2 text-slate-600 hover:text-slate-900">
    Completed
  </button>
</div>`}
            />

            {/* Pagination */}
            <ComponentShowcase
                title="Pagination"
                description="Page navigation controls"
                preview={
                    <nav className="flex items-center gap-2">
                        <button
                            onClick={() => setActivePage(Math.max(1, activePage - 1))}
                            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={activePage === 1}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                onClick={() => setActivePage(page)}
                                className={`px-3 py-2 rounded-lg ${activePage === page
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => setActivePage(Math.min(5, activePage + 1))}
                            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={activePage === 5}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </nav>
                }
                code={`import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function Pagination() {
  const [activePage, setActivePage] = useState(1);

  return (
    <nav className="flex items-center gap-2">
      <button
        onClick={() => setActivePage(Math.max(1, activePage - 1))}
        className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          onClick={() => setActivePage(page)}
          className={\`px-3 py-2 rounded-lg \${
            activePage === page
              ? 'bg-indigo-600 text-white'
              : 'text-slate-700 hover:bg-slate-100'
          }\`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setActivePage(Math.min(5, activePage + 1))}
        className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}`}
            />

            {/* Mobile Nav */}
            <ComponentShowcase
                title="Mobile Navigation Drawer"
                description="Hamburger menu for mobile"
                preview={
                    <div className="w-full">
                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                            <button className="p-2 hover:bg-slate-100 rounded-lg">
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="mt-2 p-4 bg-white border border-slate-200 rounded-lg">
                            <div className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Menu Items</div>
                            <div className="space-y-1">
                                <a href="#" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">Home</a>
                                <a href="#" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">Products</a>
                                <a href="#" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">About</a>
                                <a href="#" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">Contact</a>
                            </div>
                        </div>
                    </div>
                }
                code={`import { Menu } from 'lucide-react';
import { useState } from 'react';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-slate-100 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-slate-200 rounded-lg">
          <div className="space-y-1">
            <a href="#" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">Home</a>
            <a href="#" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">Products</a>
            <a href="#" className="block px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">About</a>
          </div>
        </div>
      )}
    </>
  );
}`}
            />

            {/* Dropdown Menu */}
            <ComponentShowcase
                title="Dropdown Menu"
                description="Expandable dropdown navigation"
                preview={
                    <div className="relative inline-block">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">
                            Options
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
                            <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-100">Profile</a>
                            <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-100">Settings</a>
                            <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-100">Billing</a>
                            <div className="border-t border-slate-200"></div>
                            <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50">Logout</a>
                        </div>
                    </div>
                }
                code={`import { ChevronDown } from 'lucide-react';

<div className="relative">
  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">
    Options
    <ChevronDown className="w-4 h-4" />
  </button>
  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg">
    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-100">Profile</a>
    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-100">Settings</a>
    <div className="border-t border-slate-200"></div>
    <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50">Logout</a>
  </div>
</div>`}
            />
        </div>
    );
}

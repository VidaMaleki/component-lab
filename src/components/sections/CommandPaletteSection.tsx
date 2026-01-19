import { ComponentShowcase } from '../ComponentShowcase';
import { Search, Command, Settings, User, Home, FileText, Mail, Calendar, Hash, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CommandPaletteSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen2, setIsOpen2] = useState(false);
    const [searchQuery2, setSearchQuery2] = useState('');

    const commands = [
        { id: 1, title: 'Home', icon: Home, shortcut: '⌘H', category: 'Navigation' },
        { id: 2, title: 'Settings', icon: Settings, shortcut: '⌘S', category: 'Navigation' },
        { id: 3, title: 'Profile', icon: User, shortcut: '⌘P', category: 'Navigation' },
        { id: 4, title: 'New Document', icon: FileText, shortcut: '⌘N', category: 'Actions' },
        { id: 5, title: 'Send Email', icon: Mail, shortcut: '⌘E', category: 'Actions' },
        { id: 6, title: 'Schedule Meeting', icon: Calendar, shortcut: '⌘M', category: 'Actions' },
    ];

    const filteredCommands = commands.filter((cmd) =>
        cmd.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredCommands2 = commands.filter((cmd) =>
        cmd.title.toLowerCase().includes(searchQuery2.toLowerCase())
    );

    const groupedCommands = filteredCommands2.reduce((acc, cmd) => {
        if (!acc[cmd.category]) {
            acc[cmd.category] = [];
        }
        acc[cmd.category].push(cmd);
        return acc;
    }, {} as Record<string, typeof commands>);

    // Listen for keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
                setIsOpen2(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Command Palettes</h1>
                <p className="text-slate-600">
                    Sophisticated search/command interfaces for quick navigation and action execution via keyboard shortcuts.
                </p>
            </div>

            {/* Simple Command Palette */}
            <ComponentShowcase
                title="Simple Command Palette"
                description="Basic command palette with search"
                preview={
                    <div className="space-y-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 w-full max-w-md"
                        >
                            <Search className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-600">Search commands...</span>
                            <kbd className="ml-auto px-2 py-1 bg-slate-100 border border-slate-200 rounded text-xs">⌘K</kbd>
                        </button>

                        {isOpen && (
                            <>
                                <div
                                    className="fixed inset-0 bg-black/50 z-50"
                                    onClick={() => setIsOpen(false)}
                                />
                                <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 bg-white rounded-xl shadow-2xl border border-slate-200">
                                    <div className="p-4 border-b border-slate-200">
                                        <div className="flex items-center gap-3">
                                            <Search className="w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                placeholder="Type a command or search..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="flex-1 outline-none text-slate-900"
                                                autoFocus
                                            />
                                        </div>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        {filteredCommands.length === 0 ? (
                                            <div className="p-8 text-center text-slate-500">No results found</div>
                                        ) : (
                                            filteredCommands.map((cmd) => {
                                                const Icon = cmd.icon;
                                                return (
                                                    <button
                                                        key={cmd.id}
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setSearchQuery('');
                                                        }}
                                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-100 transition-colors"
                                                    >
                                                        <Icon className="w-5 h-5 text-slate-400" />
                                                        <span className="flex-1 text-left text-slate-900">{cmd.title}</span>
                                                        <kbd className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-xs text-slate-600">
                                                            {cmd.shortcut}
                                                        </kbd>
                                                    </button>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                }
                code={`import { Search, Home, Settings } from 'lucide-react';
import { useState } from 'react';

function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const commands = [
    { id: 1, title: 'Home', icon: Home, shortcut: '⌘H' },
    { id: 2, title: 'Settings', icon: Settings, shortcut: '⌘S' },
  ];

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Search /> Search commands... <kbd>⌘K</kbd>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-xl shadow-2xl">
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Type a command..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <div className="max-h-96 overflow-y-auto">
              {commands.map((cmd) => (
                <button key={cmd.id} className="w-full px-4 py-3 hover:bg-slate-100">
                  <cmd.icon /> {cmd.title} <kbd>{cmd.shortcut}</kbd>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}`}
            />

            {/* Grouped Command Palette */}
            <ComponentShowcase
                title="Grouped Command Palette"
                description="Command palette with categorized groups"
                preview={
                    <div className="space-y-4">
                        <button
                            onClick={() => setIsOpen2(!isOpen2)}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 w-full max-w-md"
                        >
                            <Command className="w-4 h-4" />
                            <span>Quick Actions</span>
                            <kbd className="ml-auto px-2 py-1 bg-slate-700 rounded text-xs">⌘K</kbd>
                        </button>

                        {isOpen2 && (
                            <>
                                <div
                                    className="fixed inset-0 bg-black/50 z-50"
                                    onClick={() => setIsOpen2(false)}
                                />
                                <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                                    <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-indigo-500 to-purple-500">
                                        <div className="flex items-center gap-3">
                                            <Command className="w-5 h-5 text-white" />
                                            <input
                                                type="text"
                                                placeholder="What do you want to do?"
                                                value={searchQuery2}
                                                onChange={(e) => setSearchQuery2(e.target.value)}
                                                className="flex-1 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 outline-none px-3 py-2 rounded-lg"
                                                autoFocus
                                            />
                                        </div>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto p-2">
                                        {Object.keys(groupedCommands).length === 0 ? (
                                            <div className="p-8 text-center text-slate-500">No results found</div>
                                        ) : (
                                            Object.entries(groupedCommands).map(([category, cmds]) => (
                                                <div key={category} className="mb-4">
                                                    <div className="px-3 py-2 text-xs text-slate-500 uppercase tracking-wider">
                                                        {category}
                                                    </div>
                                                    {cmds.map((cmd) => {
                                                        const Icon = cmd.icon;
                                                        return (
                                                            <button
                                                                key={cmd.id}
                                                                onClick={() => {
                                                                    setIsOpen2(false);
                                                                    setSearchQuery2('');
                                                                }}
                                                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-indigo-50 transition-colors group"
                                                            >
                                                                <div className="w-8 h-8 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center">
                                                                    <Icon className="w-4 h-4 text-indigo-600" />
                                                                </div>
                                                                <span className="flex-1 text-left text-slate-900">{cmd.title}</span>
                                                                <ChevronRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    <div className="p-3 border-t border-slate-200 bg-slate-50">
                                        <div className="flex items-center gap-4 text-xs text-slate-600">
                                            <div className="flex items-center gap-1">
                                                <kbd className="px-2 py-1 bg-white border border-slate-200 rounded">↑</kbd>
                                                <kbd className="px-2 py-1 bg-white border border-slate-200 rounded">↓</kbd>
                                                <span>Navigate</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <kbd className="px-2 py-1 bg-white border border-slate-200 rounded">Enter</kbd>
                                                <span>Select</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <kbd className="px-2 py-1 bg-white border border-slate-200 rounded">Esc</kbd>
                                                <span>Close</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                }
                code={`import { Command, Home, Settings } from 'lucide-react';
import { useState } from 'react';

function GroupedCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const commands = [
    { id: 1, title: 'Home', icon: Home, category: 'Navigation' },
    { id: 2, title: 'Settings', icon: Settings, category: 'Navigation' },
  ];

  const groupedCommands = commands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Command /> Quick Actions <kbd>⌘K</kbd>
      </button>

      {isOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-xl">
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="What do you want to do?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="max-h-96 overflow-y-auto p-2">
            {Object.entries(groupedCommands).map(([category, cmds]) => (
              <div key={category}>
                <div className="text-xs text-slate-500 uppercase">{category}</div>
                {cmds.map((cmd) => (
                  <button key={cmd.id} className="w-full px-3 py-2 hover:bg-indigo-50">
                    <cmd.icon /> {cmd.title}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}`}
            />

            {/* Quick Switcher */}
            <ComponentShowcase
                title="Quick Switcher"
                description="Compact command palette for quick switching"
                preview={
                    <div className="bg-slate-900 p-8 rounded-xl">
                        <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden max-w-md mx-auto">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
                                <Hash className="w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Jump to channel..."
                                    className="flex-1 bg-transparent text-white outline-none placeholder-slate-500"
                                />
                            </div>
                            <div className="p-2">
                                {['general', 'random', 'announcements', 'design', 'development'].map((channel) => (
                                    <button
                                        key={channel}
                                        className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                                    >
                                        <Hash className="w-4 h-4" />
                                        <span>{channel}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                code={`import { Hash } from 'lucide-react';

function QuickSwitcher() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
        <Hash className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Jump to channel..."
          className="flex-1 bg-transparent text-white outline-none"
        />
      </div>
      <div className="p-2">
        {channels.map((channel) => (
          <button key={channel} className="w-full px-3 py-2 rounded hover:bg-slate-700">
            <Hash /> {channel}
          </button>
        ))}
      </div>
    </div>
  );
}`}
            />
        </div>
    );
}

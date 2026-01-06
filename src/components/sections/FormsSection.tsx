import { ComponentShowcase } from '../ComponentShowcase';
import { Eye, EyeOff, Search } from 'lucide-react';
import { useState } from 'react';

export function FormsSection() {
    const [showPassword, setShowPassword] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);
    const [selectedRadio, setSelectedRadio] = useState('option1');

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Form Elements</h1>
                <p className="text-slate-600">
                    Complete collection of form inputs, controls, and validation states.
                </p>
            </div>

            {/* Text Input */}
            <ComponentShowcase
                title="Text Input"
                description="Standard text input field"
                preview={
                    <div className="w-full max-w-md space-y-4">
                        <div>
                            <label className="block text-sm text-slate-700 mb-1.5">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-700 mb-1.5">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                }
                code={`<div>
  <label className="block text-sm text-slate-700 mb-1.5">Email</label>
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
  />
</div>`}
            />

            {/* Password Input */}
            <ComponentShowcase
                title="Password Input"
                description="Password field with show/hide toggle"
                preview={
                    <div className="w-full max-w-md">
                        <label className="block text-sm text-slate-700 mb-1.5">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                }
                code={`import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        className="w-full px-3 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
      >
        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  );
}`}
            />

            {/* Textarea */}
            <ComponentShowcase
                title="Textarea"
                description="Multi-line text input"
                preview={
                    <div className="w-full max-w-md">
                        <label className="block text-sm text-slate-700 mb-1.5">Message</label>
                        <textarea
                            rows={4}
                            placeholder="Enter your message..."
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                        />
                    </div>
                }
                code={`<textarea
  rows={4}
  placeholder="Enter your message..."
  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
/>`}
            />

            {/* Number Input */}
            <ComponentShowcase
                title="Number Input"
                description="Input for numeric values"
                preview={
                    <div className="w-full max-w-md">
                        <label className="block text-sm text-slate-700 mb-1.5">Quantity</label>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            defaultValue="1"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                }
                code={`<input
  type="number"
  min="0"
  max="100"
  defaultValue="1"
  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
/>`}
            />

            {/* Search Input */}
            <ComponentShowcase
                title="Search Input"
                description="Search field with icon"
                preview={
                    <div className="w-full max-w-md">
                        <label className="block text-sm text-slate-700 mb-1.5">Search</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="search"
                                placeholder="Search..."
                                className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                }
                code={`import { Search } from 'lucide-react';

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
  <input
    type="search"
    placeholder="Search..."
    className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
  />
</div>`}
            />

            {/* Select Dropdown */}
            <ComponentShowcase
                title="Select Dropdown"
                description="Dropdown selection menu"
                preview={
                    <div className="w-full max-w-md">
                        <label className="block text-sm text-slate-700 mb-1.5">Country</label>
                        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                            <option>Germany</option>
                            <option>France</option>
                        </select>
                    </div>
                }
                code={`<select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white">
  <option>United States</option>
  <option>Canada</option>
  <option>United Kingdom</option>
  <option>Germany</option>
  <option>France</option>
</select>`}
            />

            {/* Checkbox */}
            <ComponentShowcase
                title="Checkbox"
                description="Multiple choice inputs"
                preview={
                    <div className="space-y-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
                            />
                            <span className="text-slate-700">Accept terms and conditions</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
                            />
                            <span className="text-slate-700">Subscribe to newsletter</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
                            />
                            <span className="text-slate-700">Remember me</span>
                        </label>
                    </div>
                }
                code={`<label className="flex items-center gap-2 cursor-pointer">
  <input
    type="checkbox"
    className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
  />
  <span className="text-slate-700">Accept terms and conditions</span>
</label>`}
            />

            {/* Radio Buttons */}
            <ComponentShowcase
                title="Radio Buttons"
                description="Single choice selection"
                preview={
                    <div className="space-y-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="plan"
                                value="option1"
                                checked={selectedRadio === 'option1'}
                                onChange={(e) => setSelectedRadio(e.target.value)}
                                className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-2 focus:ring-indigo-500"
                            />
                            <span className="text-slate-700">Free Plan</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="plan"
                                value="option2"
                                checked={selectedRadio === 'option2'}
                                onChange={(e) => setSelectedRadio(e.target.value)}
                                className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-2 focus:ring-indigo-500"
                            />
                            <span className="text-slate-700">Pro Plan</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="plan"
                                value="option3"
                                checked={selectedRadio === 'option3'}
                                onChange={(e) => setSelectedRadio(e.target.value)}
                                className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-2 focus:ring-indigo-500"
                            />
                            <span className="text-slate-700">Enterprise Plan</span>
                        </label>
                    </div>
                }
                code={`<label className="flex items-center gap-2 cursor-pointer">
  <input
    type="radio"
    name="plan"
    value="free"
    className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-2 focus:ring-indigo-500"
  />
  <span className="text-slate-700">Free Plan</span>
</label>`}
            />

            {/* Switch Toggle */}
            <ComponentShowcase
                title="Switch Toggle"
                description="On/off toggle switch"
                preview={
                    <div className="space-y-4">
                        <label className="flex items-center justify-between max-w-xs cursor-pointer">
                            <span className="text-slate-700">Enable notifications</span>
                            <button
                                type="button"
                                onClick={() => setSwitchValue(!switchValue)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${switchValue ? 'bg-indigo-600' : 'bg-slate-300'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${switchValue ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </label>
                    </div>
                }
                code={`import { useState } from 'react';

function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setEnabled(!enabled)}
      className={\`relative inline-flex h-6 w-11 items-center rounded-full transition-colors \${
        enabled ? 'bg-indigo-600' : 'bg-slate-300'
      }\`}
    >
      <span
        className={\`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }\`}
      />
    </button>
  );
}`}
            />

            {/* Slider */}
            <ComponentShowcase
                title="Slider"
                description="Range input slider"
                preview={
                    <div className="w-full max-w-md">
                        <label className="block text-sm text-slate-700 mb-1.5">
                            Volume: {sliderValue}%
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={(e) => setSliderValue(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>
                }
                code={`import { useState } from 'react';

function Slider() {
  const [value, setValue] = useState(50);

  return (
    <div>
      <label className="block text-sm text-slate-700 mb-1.5">
        Volume: {value}%
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
      />
    </div>
  );
}`}
            />

            {/* Input States */}
            <ComponentShowcase
                title="Input States"
                description="Different input validation states"
                preview={
                    <div className="w-full max-w-md space-y-4">
                        <div>
                            <label className="block text-sm text-slate-700 mb-1.5">Default</label>
                            <input
                                type="text"
                                placeholder="Default state"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-green-700 mb-1.5">Success</label>
                            <input
                                type="text"
                                placeholder="Valid input"
                                defaultValue="john@example.com"
                                className="w-full px-3 py-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <p className="text-xs text-green-600 mt-1">Email is valid</p>
                        </div>
                        <div>
                            <label className="block text-sm text-red-700 mb-1.5">Error</label>
                            <input
                                type="text"
                                placeholder="Invalid input"
                                defaultValue="invalid-email"
                                className="w-full px-3 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                            <p className="text-xs text-red-600 mt-1">Please enter a valid email</p>
                        </div>
                        <div>
                            <label className="block text-sm text-slate-700 mb-1.5 opacity-50">Disabled</label>
                            <input
                                type="text"
                                placeholder="Disabled input"
                                disabled
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-100 text-slate-500 cursor-not-allowed"
                            />
                        </div>
                    </div>
                }
                code={`{/* Error State */}
<div>
  <label className="block text-sm text-red-700 mb-1.5">Error</label>
  <input
    type="text"
    className="w-full px-3 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
  />
  <p className="text-xs text-red-600 mt-1">Please enter a valid email</p>
</div>

{/* Disabled State */}
<input
  type="text"
  disabled
  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-100 text-slate-500 cursor-not-allowed"
/>`}
            />

            {/* Multi-Select */}
            <ComponentShowcase
                title="Multi-Select Tags"
                description="Tag-based multi-select input"
                preview={
                    <div className="w-full max-w-md">
                        <label className="block text-sm text-slate-700 mb-1.5">Skills</label>
                        <div className="flex flex-wrap gap-2 p-2 border border-slate-300 rounded-lg">
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm">
                                React
                                <button className="hover:text-indigo-900">×</button>
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm">
                                TypeScript
                                <button className="hover:text-indigo-900">×</button>
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm">
                                Tailwind
                                <button className="hover:text-indigo-900">×</button>
                            </span>
                            <input
                                type="text"
                                placeholder="Add more..."
                                className="flex-1 min-w-[120px] px-2 py-1 outline-none text-sm"
                            />
                        </div>
                    </div>
                }
                code={`<div className="flex flex-wrap gap-2 p-2 border border-slate-300 rounded-lg">
  <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm">
    React
    <button className="hover:text-indigo-900">×</button>
  </span>
  <input
    type="text"
    placeholder="Add more..."
    className="flex-1 min-w-[120px] px-2 py-1 outline-none text-sm"
  />
</div>`}
            />
        </div>
    );
}

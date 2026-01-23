export const avatarsSnippets = {
  size: `import { User } from 'lucide-react';
    
    {/* Small */}
    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
      <User className="w-4 h-4 text-indigo-600" />
    </div>
    
    {/* Medium */}
    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
      <User className="w-6 h-6 text-indigo-600" />
    </div>
    
    {/* Large */}
    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
      <User className="w-8 h-8 text-indigo-600" />
    </div>`,

  withStatus: `<div className="relative">
  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
    <User className="w-6 h-6 text-indigo-600" />
  </div>
  {/* Online - green */}
  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
</div>

<div className="relative">
  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
    <User className="w-6 h-6 text-purple-600" />
  </div>
  {/* Away - yellow */}
  <span className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-white rounded-full"></span>
</div>

<div className="relative">
  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
    <User className="w-6 h-6 text-pink-600" />
  </div>
  {/* Busy - red */}
  <span className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
</div>`,
  group: `<div className="flex -space-x-3">
  <div className="w-10 h-10 bg-indigo-100 rounded-full border-2 border-white flex items-center justify-center">
    <User className="w-5 h-5 text-indigo-600" />
  </div>
  <div className="w-10 h-10 bg-purple-100 rounded-full border-2 border-white flex items-center justify-center">
    <User className="w-5 h-5 text-purple-600" />
  </div>
  <div className="w-10 h-10 bg-pink-100 rounded-full border-2 border-white flex items-center justify-center">
    <User className="w-5 h-5 text-pink-600" />
  </div>
  {/* Count indicator */}
  <div className="w-10 h-10 bg-slate-200 text-slate-700 rounded-full border-2 border-white flex items-center justify-center text-xs">
    +5
  </div>
</div>`,
  initial: `<div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center">
  JD
</div>
<div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
  AS
</div>`,
  square: `<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
  <User className="w-6 h-6 text-indigo-600" />
</div>`,
  badge: `<div className="relative">
  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
    <User className="w-6 h-6 text-indigo-600" />
  </div>
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">
    3
  </span>
</div>`,
  border: `<div className="w-12 h-12 bg-indigo-100 rounded-full border-2 border-indigo-500 flex items-center justify-center">
  <User className="w-6 h-6 text-indigo-600" />
</div>

{/* Thicker border */}
<div className="w-12 h-12 bg-green-100 rounded-full border-4 border-green-500 flex items-center justify-center">
  <User className="w-6 h-6 text-green-600" />
</div>`,
  colors: `<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
  <User className="w-6 h-6 text-red-600" />
</div>
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
  <User className="w-6 h-6 text-blue-600" />
</div>
<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
  <User className="w-6 h-6 text-purple-600" />
</div>`,
};

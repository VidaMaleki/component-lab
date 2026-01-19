import { ComponentShowcase } from '../ComponentShowcase';
import { User } from 'lucide-react';

export default function AvatarsSection() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Avatars</h1>
                <p className="text-slate-600">
                    User avatar components in various sizes and styles with status indicators.
                </p>
            </div>

            {/* Avatar Sizes */}
            <ComponentShowcase
                title="Avatar Sizes"
                description="Avatars in different sizes"
                preview={
                    <>
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                            <User className="w-8 h-8 text-indigo-600" />
                        </div>
                        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                            <User className="w-10 h-10 text-indigo-600" />
                        </div>
                    </>
                }
                code={`import { User } from 'lucide-react';

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
</div>`}
            />

            {/* Avatar with Status */}
            <ComponentShowcase
                title="Avatar with Status Indicator"
                description="Avatars with online/offline status"
                preview={
                    <>
                        <div className="relative">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-indigo-600" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div className="relative">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-purple-600" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div className="relative">
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-pink-600" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div className="relative">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-slate-600" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-slate-400 border-2 border-white rounded-full"></span>
                        </div>
                    </>
                }
                code={`<div className="relative">
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
</div>`}
            />

            {/* Avatar Group */}
            <ComponentShowcase
                title="Avatar Group"
                description="Multiple avatars stacked together"
                preview={
                    <div className="flex -space-x-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full border-2 border-white flex items-center justify-center">
                            <User className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="w-10 h-10 bg-purple-100 rounded-full border-2 border-white flex items-center justify-center">
                            <User className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="w-10 h-10 bg-pink-100 rounded-full border-2 border-white flex items-center justify-center">
                            <User className="w-5 h-5 text-pink-600" />
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-full border-2 border-white flex items-center justify-center">
                            <User className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="w-10 h-10 bg-slate-200 text-slate-700 rounded-full border-2 border-white flex items-center justify-center text-xs">
                            +5
                        </div>
                    </div>
                }
                code={`<div className="flex -space-x-3">
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
</div>`}
            />

            {/* Avatar with Initials */}
            <ComponentShowcase
                title="Avatar with Initials"
                description="Avatars displaying user initials"
                preview={
                    <>
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                            JD
                        </div>
                        <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
                            AS
                        </div>
                        <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center">
                            MK
                        </div>
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                            RJ
                        </div>
                    </>
                }
                code={`<div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center">
  JD
</div>
<div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
  AS
</div>`}
            />

            {/* Square Avatars */}
            <ComponentShowcase
                title="Square Avatars"
                description="Square-shaped avatars with rounded corners"
                preview={
                    <>
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <User className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <User className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                            <User className="w-8 h-8 text-pink-600" />
                        </div>
                    </>
                }
                code={`<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
  <User className="w-6 h-6 text-indigo-600" />
</div>`}
            />

            {/* Avatar with Badge */}
            <ComponentShowcase
                title="Avatar with Notification Badge"
                description="Avatars with notification count"
                preview={
                    <>
                        <div className="relative">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-indigo-600" />
                            </div>
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">
                                3
                            </span>
                        </div>
                        <div className="relative">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-purple-600" />
                            </div>
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">
                                9
                            </span>
                        </div>
                    </>
                }
                code={`<div className="relative">
  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
    <User className="w-6 h-6 text-indigo-600" />
  </div>
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">
    3
  </span>
</div>`}
            />

            {/* Avatar with Border */}
            <ComponentShowcase
                title="Avatar with Border"
                description="Avatars with colored borders"
                preview={
                    <>
                        <div className="w-12 h-12 bg-indigo-100 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                            <User className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full border-2 border-purple-500 flex items-center justify-center">
                            <User className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="w-12 h-12 bg-pink-100 rounded-full border-2 border-pink-500 flex items-center justify-center">
                            <User className="w-6 h-6 text-pink-600" />
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full border-4 border-green-500 flex items-center justify-center">
                            <User className="w-6 h-6 text-green-600" />
                        </div>
                    </>
                }
                code={`<div className="w-12 h-12 bg-indigo-100 rounded-full border-2 border-indigo-500 flex items-center justify-center">
  <User className="w-6 h-6 text-indigo-600" />
</div>

{/* Thicker border */}
<div className="w-12 h-12 bg-green-100 rounded-full border-4 border-green-500 flex items-center justify-center">
  <User className="w-6 h-6 text-green-600" />
</div>`}
            />

            {/* Avatar Colors */}
            <ComponentShowcase
                title="Avatar Color Variations"
                description="Avatars in different color schemes"
                preview={
                    <>
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-teal-600" />
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-purple-600" />
                        </div>
                    </>
                }
                code={`<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
  <User className="w-6 h-6 text-red-600" />
</div>
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
  <User className="w-6 h-6 text-blue-600" />
</div>
<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
  <User className="w-6 h-6 text-purple-600" />
</div>`}
            />
        </div>
    );
}

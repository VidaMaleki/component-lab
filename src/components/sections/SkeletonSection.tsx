import { ComponentShowcase } from '../ComponentShowcase';
import { useState } from 'react';

export default function SkeletonSection() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Skeleton Loaders</h1>
                <p className="text-slate-600">
                    Placeholder components that display a stripped-down version of content while loading, improving perceived performance.
                </p>
            </div>

            {/* Basic Skeleton */}
            <ComponentShowcase
                title="Basic Skeleton"
                description="Simple skeleton loader for text and content"
                preview={
                    <div className="space-y-4">
                        <button
                            onClick={() => setLoading(!loading)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                            Toggle Loading
                        </button>
                        <div className="bg-white border border-slate-200 rounded-xl p-6">
                            {loading ? (
                                <div className="space-y-3 animate-pulse">
                                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                                    <div className="h-4 bg-slate-200 rounded w-full" />
                                    <div className="h-4 bg-slate-200 rounded w-5/6" />
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <p className="text-slate-900">This is the actual content that has loaded.</p>
                                    <p className="text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="text-slate-600">Sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            )}
                        </div>
                    </div>
                }
                code={`function BasicSkeleton() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <div className="space-y-3 animate-pulse">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-5/6" />
        </div>
      ) : (
        <div>Actual content here</div>
      )}
    </div>
  );
}`}
            />

            {/* Card Skeleton */}
            <ComponentShowcase
                title="Card Skeleton"
                description="Skeleton loader for card components"
                preview={
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                                <div className="animate-pulse">
                                    <div className="h-48 bg-slate-200" />
                                    <div className="p-4 space-y-3">
                                        <div className="h-4 bg-slate-200 rounded w-3/4" />
                                        <div className="h-3 bg-slate-200 rounded w-full" />
                                        <div className="h-3 bg-slate-200 rounded w-5/6" />
                                        <div className="flex gap-2 mt-4">
                                            <div className="h-8 bg-slate-200 rounded w-20" />
                                            <div className="h-8 bg-slate-200 rounded w-20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
                code={`function CardSkeleton() {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="animate-pulse">
        <div className="h-48 bg-slate-200" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-3 bg-slate-200 rounded w-full" />
          <div className="h-3 bg-slate-200 rounded w-5/6" />
          <div className="flex gap-2 mt-4">
            <div className="h-8 bg-slate-200 rounded w-20" />
            <div className="h-8 bg-slate-200 rounded w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}`}
            />

            {/* Profile Skeleton */}
            <ComponentShowcase
                title="Profile Skeleton"
                description="Skeleton for user profile cards"
                preview={
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="animate-pulse">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-slate-200 rounded-full" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 bg-slate-200 rounded w-32" />
                                    <div className="h-3 bg-slate-200 rounded w-48" />
                                </div>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="h-3 bg-slate-200 rounded w-full" />
                                <div className="h-3 bg-slate-200 rounded w-5/6" />
                                <div className="h-3 bg-slate-200 rounded w-4/6" />
                            </div>
                            <div className="flex gap-2">
                                <div className="h-10 bg-slate-200 rounded w-24" />
                                <div className="h-10 bg-slate-200 rounded w-24" />
                            </div>
                        </div>
                    </div>
                }
                code={`function ProfileSkeleton() {
  return (
    <div className="bg-white border rounded-xl p-6">
      <div className="animate-pulse">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-slate-200 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-200 rounded w-32" />
            <div className="h-3 bg-slate-200 rounded w-48" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-3 bg-slate-200 rounded w-full" />
          <div className="h-3 bg-slate-200 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
}`}
            />

            {/* List Skeleton */}
            <ComponentShowcase
                title="List Skeleton"
                description="Skeleton loader for list items"
                preview={
                    <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="p-4">
                                <div className="flex items-center gap-4 animate-pulse">
                                    <div className="w-12 h-12 bg-slate-200 rounded-lg" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-3 bg-slate-200 rounded w-48" />
                                        <div className="h-2 bg-slate-200 rounded w-32" />
                                    </div>
                                    <div className="w-8 h-8 bg-slate-200 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                }
                code={`function ListSkeleton() {
  return (
    <div className="bg-white border rounded-xl divide-y">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="p-4">
          <div className="flex items-center gap-4 animate-pulse">
            <div className="w-12 h-12 bg-slate-200 rounded-lg" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-slate-200 rounded w-48" />
              <div className="h-2 bg-slate-200 rounded w-32" />
            </div>
            <div className="w-8 h-8 bg-slate-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}`}
            />

            {/* Table Skeleton */}
            <ComponentShowcase
                title="Table Skeleton"
                description="Skeleton for data tables"
                preview={
                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left">
                                        <div className="h-3 bg-slate-200 rounded w-20 animate-pulse" />
                                    </th>
                                    <th className="px-6 py-3 text-left">
                                        <div className="h-3 bg-slate-200 rounded w-24 animate-pulse" />
                                    </th>
                                    <th className="px-6 py-3 text-left">
                                        <div className="h-3 bg-slate-200 rounded w-16 animate-pulse" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {[1, 2, 3, 4].map((row) => (
                                    <tr key={row}>
                                        <td className="px-6 py-4">
                                            <div className="h-3 bg-slate-200 rounded w-32 animate-pulse" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="h-3 bg-slate-200 rounded w-40 animate-pulse" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="h-3 bg-slate-200 rounded w-20 animate-pulse" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
                code={`function TableSkeleton() {
  return (
    <table className="w-full">
      <thead className="bg-slate-50">
        <tr>
          <th className="px-6 py-3">
            <div className="h-3 bg-slate-200 rounded w-20 animate-pulse" />
          </th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4].map((row) => (
          <tr key={row}>
            <td className="px-6 py-4">
              <div className="h-3 bg-slate-200 rounded w-32 animate-pulse" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}`}
            />

            {/* Shimmer Effect */}
            <ComponentShowcase
                title="Shimmer Skeleton"
                description="Enhanced skeleton with shimmer animation"
                preview={
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="relative overflow-hidden">
                                    <div className="flex items-center gap-4">
                                        <div className="w-20 h-20 bg-slate-200 rounded-lg" />
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 bg-slate-200 rounded w-3/4" />
                                            <div className="h-3 bg-slate-200 rounded w-1/2" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/60 to-transparent" />
                                </div>
                            ))}
                        </div>
                    </div>
                }
                code={`/* Add to tailwind.config.js or globals.css */
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

function ShimmerSkeleton() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-slate-200 rounded-lg" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-3 bg-slate-200 rounded w-1/2" />
        </div>
      </div>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/60 to-transparent" />
    </div>
  );
}`}
            />
        </div>
    );
}

import { ComponentShowcase } from '../ComponentShowcase';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

export function AlertsSection() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Alerts & Toasts</h1>
                <p className="text-slate-600">
                    Alert messages and toast notifications for different states and purposes.
                </p>
            </div>

            {/* Success Alert */}
            <ComponentShowcase
                title="Success Alert"
                description="Alert for successful actions"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <div className="text-green-900 mb-1">Success!</div>
                                    <p className="text-sm text-green-700">
                                        Your profile has been updated successfully.
                                    </p>
                                </div>
                                <button className="text-green-600 hover:text-green-700">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                }
                code={`import { CheckCircle, X } from 'lucide-react';

<div className="bg-green-50 border border-green-200 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
    <div className="flex-1">
      <div className="text-green-900 mb-1">Success!</div>
      <p className="text-sm text-green-700">
        Your profile has been updated successfully.
      </p>
    </div>
    <button className="text-green-600 hover:text-green-700">
      <X className="w-5 h-5" />
    </button>
  </div>
</div>`}
            />

            {/* Error Alert */}
            <ComponentShowcase
                title="Error Alert"
                description="Alert for errors and failed actions"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <div className="text-red-900 mb-1">Error</div>
                                    <p className="text-sm text-red-700">
                                        There was a problem processing your request. Please try again.
                                    </p>
                                </div>
                                <button className="text-red-600 hover:text-red-700">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                }
                code={`import { XCircle, X } from 'lucide-react';

<div className="bg-red-50 border border-red-200 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
    <div className="flex-1">
      <div className="text-red-900 mb-1">Error</div>
      <p className="text-sm text-red-700">
        There was a problem processing your request.
      </p>
    </div>
    <button className="text-red-600 hover:text-red-700">
      <X className="w-5 h-5" />
    </button>
  </div>
</div>`}
            />

            {/* Warning Alert */}
            <ComponentShowcase
                title="Warning Alert"
                description="Alert for warnings and cautions"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <div className="text-yellow-900 mb-1">Warning</div>
                                    <p className="text-sm text-yellow-700">
                                        Your storage is almost full. Please upgrade your plan or delete some files.
                                    </p>
                                </div>
                                <button className="text-yellow-600 hover:text-yellow-700">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                }
                code={`import { AlertTriangle, X } from 'lucide-react';

<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
    <div className="flex-1">
      <div className="text-yellow-900 mb-1">Warning</div>
      <p className="text-sm text-yellow-700">
        Your storage is almost full. Please upgrade your plan.
      </p>
    </div>
    <button className="text-yellow-600 hover:text-yellow-700">
      <X className="w-5 h-5" />
    </button>
  </div>
</div>`}
            />

            {/* Info Alert */}
            <ComponentShowcase
                title="Info Alert"
                description="Alert for general information"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <div className="text-blue-900 mb-1">Info</div>
                                    <p className="text-sm text-blue-700">
                                        We've updated our privacy policy. Please review the changes.
                                    </p>
                                </div>
                                <button className="text-blue-600 hover:text-blue-700">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                }
                code={`import { Info, X } from 'lucide-react';

<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
  <div className="flex items-start gap-3">
    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
    <div className="flex-1">
      <div className="text-blue-900 mb-1">Info</div>
      <p className="text-sm text-blue-700">
        We've updated our privacy policy. Please review the changes.
      </p>
    </div>
    <button className="text-blue-600 hover:text-blue-700">
      <X className="w-5 h-5" />
    </button>
  </div>
</div>`}
            />

            {/* Toast Notifications */}
            <ComponentShowcase
                title="Toast Notifications"
                description="Floating notification toasts"
                preview={
                    <div className="w-full max-w-md space-y-3">
                        <div className="bg-white border border-slate-200 rounded-lg shadow-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-slate-900 mb-0.5">File uploaded</div>
                                    <p className="text-sm text-slate-600">Your file has been uploaded successfully.</p>
                                </div>
                                <button className="text-slate-400 hover:text-slate-600">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white rounded-lg shadow-lg p-4">
                            <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="mb-0.5">New message received</div>
                                    <p className="text-sm text-slate-300">You have 3 unread messages.</p>
                                </div>
                                <button className="text-slate-400 hover:text-slate-200">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                }
                code={`import { CheckCircle, X } from 'lucide-react';

{/* Light toast */}
<div className="bg-white border border-slate-200 rounded-lg shadow-lg p-4">
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
      <CheckCircle className="w-5 h-5 text-green-600" />
    </div>
    <div className="flex-1">
      <div className="text-slate-900 mb-0.5">File uploaded</div>
      <p className="text-sm text-slate-600">Your file has been uploaded successfully.</p>
    </div>
    <button className="text-slate-400 hover:text-slate-600">
      <X className="w-4 h-4" />
    </button>
  </div>
</div>

{/* Dark toast */}
<div className="bg-slate-900 text-white rounded-lg shadow-lg p-4">
  <div className="flex items-start gap-3">
    <Info className="w-5 h-5 flex-shrink-0" />
    <div className="flex-1">
      <div className="mb-0.5">New message received</div>
      <p className="text-sm text-slate-300">You have 3 unread messages.</p>
    </div>
  </div>
</div>`}
            />

            {/* Simple Alert */}
            <ComponentShowcase
                title="Simple Alerts"
                description="Minimal alert designs without icons"
                preview={
                    <div className="w-full max-w-2xl space-y-3">
                        <div className="bg-green-50 border-l-4 border-green-500 p-4">
                            <p className="text-sm text-green-700">Your changes have been saved.</p>
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-500 p-4">
                            <p className="text-sm text-red-700">There was an error processing your request.</p>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                            <p className="text-sm text-blue-700">New updates are available. Click to refresh.</p>
                        </div>
                    </div>
                }
                code={`{/* Success */}
<div className="bg-green-50 border-l-4 border-green-500 p-4">
  <p className="text-sm text-green-700">Your changes have been saved.</p>
</div>

{/* Error */}
<div className="bg-red-50 border-l-4 border-red-500 p-4">
  <p className="text-sm text-red-700">There was an error processing your request.</p>
</div>

{/* Info */}
<div className="bg-blue-50 border-l-4 border-blue-500 p-4">
  <p className="text-sm text-blue-700">New updates are available.</p>
</div>`}
            />

            {/* Alert with Action */}
            <ComponentShowcase
                title="Alert with Action Button"
                description="Alert with call-to-action"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3">
                                    <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-indigo-900 mb-1">Update Available</div>
                                        <p className="text-sm text-indigo-700">
                                            A new version of the app is available. Update now to get the latest features.
                                        </p>
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm whitespace-nowrap">
                                    Update Now
                                </button>
                            </div>
                        </div>
                    </div>
                }
                code={`import { Info } from 'lucide-react';

<div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
  <div className="flex items-start justify-between gap-4">
    <div className="flex items-start gap-3">
      <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
      <div>
        <div className="text-indigo-900 mb-1">Update Available</div>
        <p className="text-sm text-indigo-700">
          A new version is available. Update now to get the latest features.
        </p>
      </div>
    </div>
    <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
      Update Now
    </button>
  </div>
</div>`}
            />
        </div>
    );
}

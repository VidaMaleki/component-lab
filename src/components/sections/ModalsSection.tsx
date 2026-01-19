import { ComponentShowcase } from '../ComponentShowcase';
import { X, AlertTriangle, Check, Info } from 'lucide-react';
import { useState } from 'react';

export default function ModalsSection() {
    const [showConfirm, setShowConfirm] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Modals & Overlays</h1>
                <p className="text-slate-600">
                    Dialog boxes, modals, drawers, and overlay components for user interactions.
                </p>
            </div>

            {/* Confirmation Modal */}
            <ComponentShowcase
                title="Confirmation Modal"
                description="Modal for confirming destructive actions"
                preview={
                    <>
                        <button
                            onClick={() => setShowConfirm(true)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                            Open Confirmation Modal
                        </button>
                        {showConfirm && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                                <div className="bg-white rounded-xl max-w-md w-full p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <AlertTriangle className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-slate-900 mb-2">Delete Account</h3>
                                            <p className="text-sm text-slate-600 mb-6">
                                                Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
                                            </p>
                                            <div className="flex gap-3 justify-end">
                                                <button
                                                    onClick={() => setShowConfirm(false)}
                                                    className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={() => setShowConfirm(false)}
                                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                                >
                                                    Delete Account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                }
                code={`import { AlertTriangle } from 'lucide-react';
import { useState } from 'react';

function ConfirmModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-slate-900 mb-2">Delete Account</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Are you sure you want to delete your account?
                </p>
                <div className="flex gap-3 justify-end">
                  <button onClick={() => setShowModal(false)}>Cancel</button>
                  <button onClick={() => setShowModal(false)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`}
            />

            {/* Form Modal */}
            <ComponentShowcase
                title="Form Modal"
                description="Modal containing a form"
                preview={
                    <>
                        <button
                            onClick={() => setShowForm(true)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                            Open Form Modal
                        </button>
                        {showForm && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                                <div className="bg-white rounded-xl max-w-lg w-full">
                                    <div className="flex items-center justify-between p-6 border-b border-slate-200">
                                        <h3 className="text-slate-900">Create New Project</h3>
                                        <button
                                            onClick={() => setShowForm(false)}
                                            className="p-1 hover:bg-slate-100 rounded-lg"
                                        >
                                            <X className="w-5 h-5 text-slate-600" />
                                        </button>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <label className="block text-sm text-slate-700 mb-1.5">Project Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter project name"
                                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-700 mb-1.5">Description</label>
                                            <textarea
                                                rows={3}
                                                placeholder="Enter project description"
                                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 justify-end p-6 border-t border-slate-200">
                                        <button
                                            onClick={() => setShowForm(false)}
                                            className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => setShowForm(false)}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                                        >
                                            Create Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                }
                code={`import { X } from 'lucide-react';

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
  <div className="bg-white rounded-xl max-w-lg w-full">
    <div className="flex items-center justify-between p-6 border-b border-slate-200">
      <h3 className="text-slate-900">Create New Project</h3>
      <button className="p-1 hover:bg-slate-100 rounded-lg">
        <X className="w-5 h-5 text-slate-600" />
      </button>
    </div>
    <div className="p-6 space-y-4">
      <div>
        <label className="block text-sm text-slate-700 mb-1.5">Project Name</label>
        <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
      </div>
    </div>
    <div className="flex gap-3 justify-end p-6 border-t border-slate-200">
      <button>Cancel</button>
      <button>Create Project</button>
    </div>
  </div>
</div>`}
            />

            {/* Drawer */}
            <ComponentShowcase
                title="Side Drawer"
                description="Sliding drawer from the side"
                preview={
                    <>
                        <button
                            onClick={() => setShowDrawer(true)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                            Open Drawer
                        </button>
                        {showDrawer && (
                            <>
                                <div
                                    className="fixed inset-0 bg-black/50 z-40"
                                    onClick={() => setShowDrawer(false)}
                                />
                                <div className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 flex flex-col">
                                    <div className="flex items-center justify-between p-6 border-b border-slate-200">
                                        <h3 className="text-slate-900">Settings</h3>
                                        <button
                                            onClick={() => setShowDrawer(false)}
                                            className="p-1 hover:bg-slate-100 rounded-lg"
                                        >
                                            <X className="w-5 h-5 text-slate-600" />
                                        </button>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-6">
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-sm text-slate-900 mb-3">General</h4>
                                                <div className="space-y-3">
                                                    <label className="flex items-center justify-between">
                                                        <span className="text-sm text-slate-700">Email notifications</span>
                                                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                                                    </label>
                                                    <label className="flex items-center justify-between">
                                                        <span className="text-sm text-slate-700">Push notifications</span>
                                                        <input type="checkbox" className="w-4 h-4" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="border-t border-slate-200 pt-6">
                                                <h4 className="text-sm text-slate-900 mb-3">Privacy</h4>
                                                <div className="space-y-3">
                                                    <label className="flex items-center justify-between">
                                                        <span className="text-sm text-slate-700">Profile visibility</span>
                                                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 border-t border-slate-200">
                                        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                }
                code={`import { X } from 'lucide-react';

<>
  {/* Backdrop */}
  <div className="fixed inset-0 bg-black/50 z-40" onClick={closeDrawer} />
  
  {/* Drawer */}
  <div className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 flex flex-col">
    <div className="flex items-center justify-between p-6 border-b border-slate-200">
      <h3 className="text-slate-900">Settings</h3>
      <button className="p-1 hover:bg-slate-100 rounded-lg">
        <X className="w-5 h-5 text-slate-600" />
      </button>
    </div>
    <div className="flex-1 overflow-y-auto p-6">
      {/* Drawer content */}
    </div>
    <div className="p-6 border-t border-slate-200">
      <button>Save Changes</button>
    </div>
  </div>
</>`}
            />

            {/* Success Modal */}
            <ComponentShowcase
                title="Success Modal"
                description="Modal for successful actions"
                preview={
                    <div className="bg-white rounded-xl max-w-sm w-full p-6 border border-slate-200">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-slate-900 mb-2">Success!</h3>
                            <p className="text-sm text-slate-600 mb-6">
                                Your changes have been saved successfully.
                            </p>
                            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                Continue
                            </button>
                        </div>
                    </div>
                }
                code={`import { Check } from 'lucide-react';

<div className="bg-white rounded-xl max-w-sm w-full p-6">
  <div className="text-center">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Check className="w-8 h-8 text-green-600" />
    </div>
    <h3 className="text-slate-900 mb-2">Success!</h3>
    <p className="text-sm text-slate-600 mb-6">
      Your changes have been saved successfully.
    </p>
    <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
      Continue
    </button>
  </div>
</div>`}
            />

            {/* Info Modal */}
            <ComponentShowcase
                title="Info Modal"
                description="Modal for displaying information"
                preview={
                    <div className="bg-white rounded-xl max-w-md w-full p-6 border border-slate-200">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Info className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-slate-900 mb-2">New Feature Available</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    We've added a new dashboard that gives you better insights into your data. Check it out now!
                                </p>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                                        Learn More
                                    </button>
                                    <button className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg text-sm">
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                code={`import { Info } from 'lucide-react';

<div className="bg-white rounded-xl max-w-md w-full p-6">
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
      <Info className="w-5 h-5 text-blue-600" />
    </div>
    <div className="flex-1">
      <h3 className="text-slate-900 mb-2">New Feature Available</h3>
      <p className="text-sm text-slate-600 mb-4">
        We've added a new dashboard that gives you better insights.
      </p>
      <div className="flex gap-3">
        <button>Learn More</button>
        <button>Dismiss</button>
      </div>
    </div>
  </div>
</div>`}
            />
        </div>
    );
}

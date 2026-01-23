type ColorsDataProps = {
  name: string;
  shades: { value: string; hex: string; text: string }[];
};

type SemanticColorProps = {
  name: string;
  bg: string;
  text: string;
  usage: string;
};

export const colorPalettes: ColorsDataProps[] = [
  {
    name: "Slate",
    shades: [
      { value: "slate-50", hex: "#f8fafc", text: "text-slate-900" },
      { value: "slate-100", hex: "#f1f5f9", text: "text-slate-900" },
      { value: "slate-200", hex: "#e2e8f0", text: "text-slate-900" },
      { value: "slate-300", hex: "#cbd5e1", text: "text-slate-900" },
      { value: "slate-400", hex: "#94a3b8", text: "text-white" },
      { value: "slate-500", hex: "#64748b", text: "text-white" },
      { value: "slate-600", hex: "#475569", text: "text-white" },
      { value: "slate-700", hex: "#334155", text: "text-white" },
      { value: "slate-800", hex: "#1e293b", text: "text-white" },
      { value: "slate-900", hex: "#0f172a", text: "text-white" },
    ],
  },
  {
    name: "Indigo",
    shades: [
      { value: "indigo-50", hex: "#eef2ff", text: "text-indigo-900" },
      { value: "indigo-100", hex: "#e0e7ff", text: "text-indigo-900" },
      { value: "indigo-200", hex: "#c7d2fe", text: "text-indigo-900" },
      { value: "indigo-300", hex: "#a5b4fc", text: "text-indigo-900" },
      { value: "indigo-400", hex: "#818cf8", text: "text-white" },
      { value: "indigo-500", hex: "#6366f1", text: "text-white" },
      { value: "indigo-600", hex: "#4f46e5", text: "text-white" },
      { value: "indigo-700", hex: "#4338ca", text: "text-white" },
      { value: "indigo-800", hex: "#3730a3", text: "text-white" },
      { value: "indigo-900", hex: "#312e81", text: "text-white" },
    ],
  },
  {
    name: "Purple",
    shades: [
      { value: "purple-50", hex: "#faf5ff", text: "text-purple-900" },
      { value: "purple-100", hex: "#f3e8ff", text: "text-purple-900" },
      { value: "purple-200", hex: "#e9d5ff", text: "text-purple-900" },
      { value: "purple-300", hex: "#d8b4fe", text: "text-purple-900" },
      { value: "purple-400", hex: "#c084fc", text: "text-white" },
      { value: "purple-500", hex: "#a855f7", text: "text-white" },
      { value: "purple-600", hex: "#9333ea", text: "text-white" },
      { value: "purple-700", hex: "#7e22ce", text: "text-white" },
      { value: "purple-800", hex: "#6b21a8", text: "text-white" },
      { value: "purple-900", hex: "#581c87", text: "text-white" },
    ],
  },
  {
    name: "Blue",
    shades: [
      { value: "blue-50", hex: "#eff6ff", text: "text-blue-900" },
      { value: "blue-100", hex: "#dbeafe", text: "text-blue-900" },
      { value: "blue-200", hex: "#bfdbfe", text: "text-blue-900" },
      { value: "blue-300", hex: "#93c5fd", text: "text-blue-900" },
      { value: "blue-400", hex: "#60a5fa", text: "text-white" },
      { value: "blue-500", hex: "#3b82f6", text: "text-white" },
      { value: "blue-600", hex: "#2563eb", text: "text-white" },
      { value: "blue-700", hex: "#1d4ed8", text: "text-white" },
      { value: "blue-800", hex: "#1e40af", text: "text-white" },
      { value: "blue-900", hex: "#1e3a8a", text: "text-white" },
    ],
  },
  {
    name: "Green",
    shades: [
      { value: "green-50", hex: "#f0fdf4", text: "text-green-900" },
      { value: "green-100", hex: "#dcfce7", text: "text-green-900" },
      { value: "green-200", hex: "#bbf7d0", text: "text-green-900" },
      { value: "green-300", hex: "#86efac", text: "text-green-900" },
      { value: "green-400", hex: "#4ade80", text: "text-white" },
      { value: "green-500", hex: "#22c55e", text: "text-white" },
      { value: "green-600", hex: "#16a34a", text: "text-white" },
      { value: "green-700", hex: "#15803d", text: "text-white" },
      { value: "green-800", hex: "#166534", text: "text-white" },
      { value: "green-900", hex: "#14532d", text: "text-white" },
    ],
  },
  {
    name: "Red",
    shades: [
      { value: "red-50", hex: "#fef2f2", text: "text-red-900" },
      { value: "red-100", hex: "#fee2e2", text: "text-red-900" },
      { value: "red-200", hex: "#fecaca", text: "text-red-900" },
      { value: "red-300", hex: "#fca5a5", text: "text-red-900" },
      { value: "red-400", hex: "#f87171", text: "text-white" },
      { value: "red-500", hex: "#ef4444", text: "text-white" },
      { value: "red-600", hex: "#dc2626", text: "text-white" },
      { value: "red-700", hex: "#b91c1c", text: "text-white" },
      { value: "red-800", hex: "#991b1b", text: "text-white" },
      { value: "red-900", hex: "#7f1d1d", text: "text-white" },
    ],
  },
];

export const semanticColors: SemanticColorProps[] = [
  {
    name: "Primary",
    bg: "bg-indigo-600",
    text: "Indigo-600",
    usage: "Main brand color, CTAs",
  },
  {
    name: "Success",
    bg: "bg-green-600",
    text: "Green-600",
    usage: "Success states, confirmations",
  },
  {
    name: "Warning",
    bg: "bg-yellow-600",
    text: "Yellow-600",
    usage: "Warning messages, cautions",
  },
  {
    name: "Error",
    bg: "bg-red-600",
    text: "Red-600",
    usage: "Errors, destructive actions",
  },
  {
    name: "Info",
    bg: "bg-blue-600",
    text: "Blue-600",
    usage: "Information, neutral alerts",
  },
];

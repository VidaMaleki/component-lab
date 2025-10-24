import React from "react"; // for React.createElement types
import ButtonDemo from "../components/Buttons/ButtonDemo";
import DropdownDemo from "../components/DropDowns/DropdownDemo";
import FormsDemo from "../components/Forms/FormsDemo";
import CopyButton from "../components/CopyButton";

export const CATEGORIES = [
  "Navigation",
  "Buttons",
  "Dropdowns",
  "Forms",
  "Layout",
  "Feedback",
  "Data Display",
] as const;

export type GalleryItem = {
  id: string;
  title: string;
  category: (typeof CATEGORIES)[number];
  tags: string[];
  description: string;
  createdAt: string;
  preview: React.ReactNode;
  code: string;

  html?: string;
  css?: string;
  selfManagedCode?: boolean;
};

export const COMPONENTS: GalleryItem[] = [
  {
    id: "navbar-basic",
    title: "Responsive Navbar",
    category: "Navigation",
    tags: ["header", "nav", "responsive"],
    description: "A simple responsive navbar with links.",
    createdAt: "2025-10-01T10:00:00Z",
    preview: React.createElement(CopyButton),
    code: `<nav className="flex justify-between p-2 border rounded">...</nav>`,
  },
  {
    id: "button-basic",
    title: "Basic Buttons",
    category: "Buttons",
    tags: ["button", "cta"],
    description: "Common button variants for different actions.",
    createdAt: "2025-10-01T11:00:00Z",
    preview: React.createElement(ButtonDemo),
    code: `<button>Primary</button> <button>Secondary</button>`,
    selfManagedCode: true,
  },
  {
    id: "dropdowns-demo",
    title: "Dropdown Variants",
    category: "Dropdowns",
    tags: ["dropdown", "select", "menu"],
    description:
      "Native select, custom menu, split-button, and multi-select dropdown examples.",
    createdAt: "2025-10-18T00:00:00Z",
    preview: React.createElement(DropdownDemo),
    selfManagedCode: true,
  },
  {
    id: "forms-demo",
    title: "Form Elements",
    category: "Forms",
    tags: ["form", "input", "validation"],
    description: "Styled input fields, checkboxes, radio buttons, and validation states.",
    createdAt: "2025-10-01T12:00:00Z",
    preview: React.createElement(FormsDemo),
    selfManagedCode: true,
  }
];

export function componentsByCategory(category: (typeof CATEGORIES)[number]) {
  return COMPONENTS.filter((c) => c.category === category);
}

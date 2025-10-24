// src/components/Buttons/ButtonDemo.tsx
import { useState } from "react";
import "./buttonStyles.css";
import CodeBlock from "../CodeBlock"; // <-- use the shared component

const variants = [
    {
        name: "Primary",
        className: "btn btn-primary",
        html: `<button class="btn btn-primary">Primary Button</button>`,
        css: `.btn-primary { background: #344150; color: white; border: none; }`,
    },
    {
        name: "Outline",
        className: "btn btn-outline",
        html: `<button class="btn btn-outline">Outline Button</button>`,
        css: `.btn-outline { border: 2px solid #344150; color: #344150; background: transparent; }`,
    },
    {
        name: "Ghost",
        className: "btn btn-ghost",
        html: `<button class="btn btn-ghost">Ghost Button</button>`,
        css: `.btn-ghost { background: transparent; color: #344150; }`,
    },
    {
        name: "Gradient",
        className: "btn btn-gradient",
        html: `<button class="btn btn-gradient">Gradient Button</button>`,
        css: `.btn-gradient { background: linear-gradient(90deg, #344150, #d4af37); color: white; border: none; }`,
    },
    {
        name: "Underline",
        className: "btn btn-underline",
        html: `<button class="btn btn-underline">Underline Button</button>`,
        css: `.btn-underline {
    background: transparent;
    color: #344150;
    border: none;
    position: relative;
  }

  .btn-underline::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: #4a9878;
    transition: width 0.3s ease;
  }

  .btn-underline:hover::after,
  .btn-underline.active::after {
    width: 100%;
  }`,
    },
];

export default function ButtonDemo() {
    const [active, setActive] = useState(variants[0]);

    return (
        <div className="demo-container">
            <div className="variant-tabs">
                {variants.map((v) => (
                    <button
                        key={v.name}
                        className={`variant-tab ${active.name === v.name ? "active" : ""}`}
                        onClick={() => setActive(v)}
                    >
                        {v.name}
                    </button>
                ))}
            </div>

            <div className="preview-area">
                <button
                    className={
                        active.className +
                        (active.name === "Underline" ? " active" : "")
                    }
                >
                    {active.name} Button
                </button>
            </div>

            <div className="code-section">
                <CodeBlock title="HTML" code={active.html} language="markup" />
                <CodeBlock title="CSS" code={active.css} language="css" />
            </div>
        </div>
    );
}

import React, { useMemo, useState } from "react";
import "./dropdownStyles.css";
import CodeBlock from "../CodeBlock";

/**
 * Each variant provides:
 * - name (tab label)
 * - preview (JSX for the live demo)
 * - html (copyable HTML)
 * - css  (copyable CSS – include only the classes you use)
 */
type Variant = {
  name: string;
  preview: React.ReactNode;
  html: string;
  css: string;
};

export default function DropdownDemo() {
  // ------- Variant 1: Native <select> -------
  const NativePreview = (
    <label className="dd-field">
      <span className="dd-label">Choose a fruit</span>
      <select className="dd-native">
        <option>Apple</option>
        <option>Banana</option>
        <option>Grapes</option>
        <option>Orange</option>
      </select>
    </label>
  );
  const nativeHtml = `<label class="dd-field">
  <span class="dd-label">Choose a fruit</span>
  <select class="dd-native">
    <option>Apple</option>
    <option>Banana</option>
    <option>Grapes</option>
    <option>Orange</option>
  </select>
</label>`;

  const nativeCss = `.dd-field { display: grid; gap: 6px; max-width: 280px; }
.dd-label { font-size: 12px; color: #344150; opacity: 0.8; }
.dd-native {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #dcdfe4;
  border-radius: 8px;
  background: white;
}
.dd-native:focus { outline: 2px solid #d4af37; outline-offset: 2px; }`;

  // ------- Variant 2: Custom menu (button + list) -------
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState("Select country");
  const countries = ["USA", "Canada", "Germany", "Japan"];

  const CustomPreview = (
    <div className="dd-menu-wrap">
      <button
        type="button"
        className="dd-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {choice}
        <svg className="dd-caret" width="16" height="16" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {open && (
        <ul
          className="dd-list"
          role="listbox"
          tabIndex={-1}
          onBlur={() => setOpen(false)}
        >
          {countries.map((c) => (
            <li key={c}>
              <button
                className="dd-item"
                role="option"
                onClick={() => {
                  setChoice(c);
                  setOpen(false);
                }}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const customHtml = `<div class="dd-menu-wrap">
  <button type="button" class="dd-trigger" aria-haspopup="listbox" aria-expanded="false">
    Select country
    <svg class="dd-caret" width="16" height="16" viewBox="0 0 24 24">
      <path fill="currentColor" d="M7 10l5 5 5-5z" />
    </svg>
  </button>
  <ul class="dd-list" role="listbox">
    <li><button class="dd-item" role="option">USA</button></li>
    <li><button class="dd-item" role="option">Canada</button></li>
    <li><button class="dd-item" role="option">Germany</button></li>
    <li><button class="dd-item" role="option">Japan</button></li>
  </ul>
</div>`;

  const customCss = `.dd-menu-wrap { position: relative; width: 220px; }
.dd-trigger {
  width: 100%;
  display: flex; align-items: center; justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  border: 1px solid #dcdfe4; border-radius: 8px; background: #fff; cursor: pointer;
}
.dd-trigger:focus { outline: 2px solid #d4af37; outline-offset: 2px; }
.dd-caret { opacity: 0.7; }
.dd-list {
  position: absolute; z-index: 10; top: calc(100% + 6px); left: 0; right: 0;
  border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;
  padding: 6px; box-shadow: 0 10px 20px rgba(0,0,0,.08);
}
.dd-item {
  width: 100%; text-align: left; padding: 8px 10px; border-radius: 6px; background: transparent; cursor: pointer;
}
.dd-item:hover { background: #f6f7f9; }`;

  // ------- Variant 3: Split-button dropdown -------
  const [splitOpen, setSplitOpen] = useState(false);
  const SplitPreview = (
    <div className="dd-split">
      <button className="dd-btn">Action</button>
      <button
        className="dd-split-caret"
        aria-haspopup="menu"
        aria-expanded={splitOpen}
        onClick={() => setSplitOpen((v) => !v)}
      >
        ▾
      </button>
      {splitOpen && (
        <div className="dd-split-menu" role="menu">
          <button className="dd-item" role="menuitem">Duplicate</button>
          <button className="dd-item" role="menuitem">Archive</button>
          <button className="dd-item" role="menuitem">Delete</button>
        </div>
      )}
    </div>
  );

  const splitHtml = `<div class="dd-split">
  <button class="dd-btn">Action</button>
  <button class="dd-split-caret" aria-haspopup="menu" aria-expanded="false">▾</button>
  <div class="dd-split-menu" role="menu">
    <button class="dd-item" role="menuitem">Duplicate</button>
    <button class="dd-item" role="menuitem">Archive</button>
    <button class="dd-item" role="menuitem">Delete</button>
  </div>
</div>`;

  const splitCss = `.dd-split { position: relative; display: inline-flex; }
.dd-btn { padding: 8px 12px; background: #344150; color:#fff; border:none; border-radius: 8px 0 0 8px; }
.dd-split-caret { padding: 8px 10px; background:#2d3748; color:#fff; border:none; border-radius: 0 8px 8px 0; cursor:pointer; }
.dd-split-menu {
  position:absolute; top: calc(100% + 6px); right:0; background:#fff; border:1px solid #e5e7eb; border-radius:8px;
  padding:6px; box-shadow:0 10px 20px rgba(0,0,0,.08);
}
.dd-item { display:block; width:100%; text-align:left; padding:8px 10px; border-radius:6px; background:transparent; cursor:pointer; }
.dd-item:hover { background:#f6f7f9; }`;

  // ------- Variant 4: Multi-select (tags) -------
  const [tags, setTags] = useState<string[]>(["React"]);
  const tagOptions = ["React", "TypeScript", "Vite", "Tailwind"];

  const MultiPreview = (
    <div className="dd-tags-wrap">
      <div className="dd-tags-input">
        {tags.map((t) => (
          <span className="dd-tag" key={t}>
            {t}
            <button className="dd-tag-x" onClick={() => setTags(tags.filter((x) => x !== t))}>×</button>
          </span>
        ))}
        <button
          className="dd-add"
          onClick={(e) => {
            e.preventDefault();
            // simple: cycle through options
            const next = tagOptions.find((o) => !tags.includes(o));
            if (next) setTags([...tags, next]);
          }}
        >
          + Add
        </button>
      </div>
    </div>
  );

  const multiHtml = `<div class="dd-tags-wrap">
  <div class="dd-tags-input">
    <span class="dd-tag">React <button class="dd-tag-x">×</button></span>
    <button class="dd-add">+ Add</button>
  </div>
</div>`;

  const multiCss = `.dd-tags-input {
  display: flex; flex-wrap: wrap; gap: 8px; align-items: center;
  border: 1px solid #dcdfe4; border-radius: 8px; padding: 8px 10px; background: white; max-width: 360px;
}
.dd-tag {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 8px; border-radius: 999px; background: #eef2f7; color: #344150; font-size: 12px;
}
.dd-tag-x { border: none; background: transparent; cursor: pointer; opacity: 0.7; }
.dd-add { border: none; background: #f6f7f9; padding: 6px 10px; border-radius: 6px; cursor: pointer; }`;

  const variants: Variant[] = useMemo(
    () => [
      { name: "Native", preview: NativePreview, html: nativeHtml, css: nativeCss },
      { name: "Custom", preview: CustomPreview, html: customHtml, css: customCss },
      { name: "Split", preview: SplitPreview, html: splitHtml, css: splitCss },
      { name: "Multi-select", preview: MultiPreview, html: multiHtml, css: multiCss },
    ],
    [CustomPreview, MultiPreview, SplitPreview, NativePreview]
  );

  const [active, setActive] = useState<Variant>(variants[0]);

  return (
    <div className="dd-demo">
      {/* Tabs */}
      <div className="dd-tabs">
        {variants.map((v) => (
          <button
            key={v.name}
            className={`dd-tab ${active.name === v.name ? "is-active" : ""}`}
            onClick={() => setActive(v)}
          >
            {v.name}
          </button>
        ))}
      </div>

      {/* Preview */}
      <div className="dd-preview">{active.preview}</div>

      {/* Code */}
      <div className="dd-code">
        <CodeBlock title="HTML" code={active.html} language="markup" />
        <CodeBlock title="CSS" code={active.css} language="css" />
      </div>
    </div>
  );
}

import dedent from "dedent";

export type CodeTriplet = {
  options: string[];
  html: string;
  css: string;
  js: string;
};

export const DROPDOWN_CODE: Record<
  "native" | "custom" | "split" | "multi",
  CodeTriplet
> = {
  /* ================= NATIVE SELECT ================= */
  native: {
    options: ["Apple", "Banana", "Cherry"],
    html: dedent(`
      <div class="dd-field">
        <label class="dd-label">Choose a fruit</label>
        <select class="dd-native">
          <option>Apple</option>
          <option>Banana</option>
          <option>Cherry</option>
        </select>
      </div>
    `),
    css: dedent(`
      .dd-field { display: grid; gap: 6px; }
      .dd-label { font-size: 14px; font-weight: 600; color: #111; }
      .dd-native {
        width: 240px;
        padding: 8px 10px;
        border: 1px solid #dcdfe4;
        border-radius: 8px;
        background: #fff;
        font-size: 14px;
        color: #111;
      }
      .dd-native:focus {
        outline: none;
        border-color: #d4af37;
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.22);
      }
    `),
    js: ``,
  },

  /* ================= CUSTOM DROPDOWN (button + list) ================= */
  custom: {
    options: ["USA", "Canada", "Germany", "Japan"],
    html: dedent(`
      <div id="custom-dd" class="dd-field">
        <label class="dd-label">Select country</label>
        <div class="dd-menu-wrap">
          <button type="button" class="dd-trigger" aria-haspopup="listbox" aria-expanded="false">
            Select country
            <span class="dd-caret">▾</span>
          </button>

          <ul class="dd-list" role="listbox">
            <li><button class="dd-item" role="option">USA</button></li>
            <li><button class="dd-item" role="option">Canada</button></li>
            <li><button class="dd-item" role="option">Germany</button></li>
            <li><button class="dd-item" role="option">Japan</button></li>
          </ul>
        </div>
      </div>
    `),
    css: dedent(`
      .dd-field { display: grid; gap: 6px; }
      .dd-label { font-size: 14px; font-weight: 600; color: #111; }

      .dd-menu-wrap { position: relative; width: 240px; }

      .dd-trigger {
        width: 100%;
        display: flex; align-items: center; justify-content: space-between;
        gap: 8px;
        padding: 8px 10px;
        border: 1px solid #dcdfe4; border-radius: 8px; background: #fff;
        cursor: pointer; font-size: 14px; color: #111;
      }
      .dd-trigger:hover { background: #f9fafb; }
      .dd-trigger:focus {
        outline: none; border-color: #d4af37;
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.22);
      }
      .dd-caret { font-size: 12px; opacity: .7; }

      .dd-list {
        position: absolute; top: calc(100% + 6px); left: 0; right: 0;
        border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;
        padding: 6px; margin: 0; list-style: none;
        box-shadow: 0 10px 20px rgba(0,0,0,.08);
        opacity: 0; visibility: hidden; transform: translateY(-2px);
        transition: opacity .12s ease, transform .12s ease;
        pointer-events: none; z-index: 1000;
      }
      .dd-list.is-open {
        opacity: 1; visibility: visible; transform: translateY(0);
        pointer-events: auto;
      }

      .dd-item {
        width: 100%; text-align: left; padding: 8px 10px;
        border-radius: 6px; background: transparent; cursor: pointer;
      }
      .dd-item:hover { background: #f6f7f9; }
    `),
    js: dedent(`
      (function () {
        const root = document.getElementById('custom-dd');
        if (!root) return;

        const trigger = root.querySelector('.dd-trigger');
        const list = root.querySelector('.dd-list');

        function close() {
          list.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }

        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          const open = list.classList.toggle('is-open');
          trigger.setAttribute('aria-expanded', String(open));
        });

        list.addEventListener('click', (e) => {
          const btn = (e.target as HTMLElement).closest('.dd-item') as HTMLButtonElement | null;
          if (!btn) return;
          trigger.childNodes[0].nodeValue = btn.textContent || 'Select';
          close();
        });

        document.addEventListener('click', (e) => {
          if (!root.contains(e.target as Node)) close();
        });
      })();
    `),
  },

  /* ================= SPLIT BUTTON DROPDOWN ================= */
  split: {
    options: ["Run full", "Run selection"],
    html: dedent(`
      <div id="split-dd" class="dd-field">
        <label class="dd-label">Actions</label>

        <div class="dd-split">
          <button class="dd-split-main" type="button">Run</button>
          <button class="dd-split-caret" type="button" aria-haspopup="menu" aria-expanded="false">▾</button>

          <div class="dd-split-menu" role="menu">
            <button class="dd-item" role="menuitem" type="button">Run full</button>
            <button class="dd-item" role="menuitem" type="button">Run selection</button>
            <button class="dd-item" role="menuitem" type="button">Schedule</button>
          </div>
        </div>
      </div>
    `),
    css: dedent(`
      .dd-field { display: grid; gap: 6px; }
      .dd-label { font-size: 14px; font-weight: 600; color: #111; }

      .dd-split { position: relative; display: inline-flex; vertical-align: top; }

      .dd-split-main {
        padding: 8px 12px;
        border: 1px solid #cbd5e1; border-right: none;
        border-radius: 8px 0 0 8px;
        background: #fff; cursor: pointer; font-size: 14px; color: #111;
      }
      .dd-split-main:hover { background: #f9fafb; }
      .dd-split-main:focus {
        outline: none; border-color: #d4af37;
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.22);
      }

      .dd-split-caret {
        padding: 8px 10px;
        border: 1px solid #cbd5e1;
        border-radius: 0 8px 8px 0;
        background: #fff; cursor: pointer;
      }
      .dd-split-caret:hover { background: #f9fafb; }
      .dd-split-caret:focus {
        outline: none; border-color: #d4af37;
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.22);
      }

      .dd-split-menu {
        position: absolute; top: calc(100% + 6px); right: 0;
        min-width: 180px;
        border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;
        box-shadow: 0 10px 20px rgba(0,0,0,.08);
        padding: 6px;
        opacity: 0; visibility: hidden; transform: translateY(-2px);
        pointer-events: none; transition: opacity .12s ease, transform .12s ease;
        z-index: 1000; max-height: 220px; overflow: auto;
      }
      .dd-split-menu.is-open {
        opacity: 1; visibility: visible; transform: translateY(0);
        pointer-events: auto;
      }

      .dd-item {
        display: block; width: 100%; text-align: left; padding: 8px 10px;
        border-radius: 6px; background: transparent; cursor: pointer;
      }
      .dd-item:hover { background: #f6f7f9; }
    `),
    js: dedent(`
      (function () {
        const root = document.getElementById('split-dd');
        if (!root) return;

        const caret = root.querySelector('.dd-split-caret') as HTMLButtonElement;
        const menu = root.querySelector('.dd-split-menu') as HTMLDivElement;

        function close() {
          menu.classList.remove('is-open');
          caret.setAttribute('aria-expanded', 'false');
        }

        caret.addEventListener('click', (e) => {
          e.stopPropagation();
          const open = menu.classList.toggle('is-open');
          caret.setAttribute('aria-expanded', String(open));
        });

        menu.addEventListener('click', (e) => {
          const btn = (e.target as HTMLElement).closest('.dd-item');
          if (btn) close();
        });

        document.addEventListener('click', (e) => {
          if (!root.contains(e.target as Node)) close();
        });
      })();
    `),
  },

  /* ================= MULTI-SELECT (tags) ================= */
  multi: {
    options: ["React", "TypeScript", "Vite", "Tailwind"],
    html: dedent(`
      <div id="multi-dd" class="dd-field">
        <label class="dd-label">Pick your favorite tech</label>

        <div class="dd-menu-wrap">
          <button class="dd-trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
            Select options…
            <span class="dd-caret">▾</span>
          </button>

          <ul class="dd-list" role="listbox" aria-multiselectable="true">
            <li class="dd-menu-actions" aria-hidden="true">
              <button class="dd-chip" type="button" data-action="all">Select all</button>
              <button class="dd-chip" type="button" data-action="clear">Clear</button>
            </li>
            <li><button class="dd-item dd-item-check" role="option"><input type="checkbox" /> <span>React</span></button></li>
            <li><button class="dd-item dd-item-check" role="option"><input type="checkbox" /> <span>TypeScript</span></button></li>
            <li><button class="dd-item dd-item-check" role="option"><input type="checkbox" /> <span>Vite</span></button></li>
            <li><button class="dd-item dd-item-check" role="option"><input type="checkbox" /> <span>Tailwind</span></button></li>
          </ul>
        </div>

        <div class="dd-selected-list" aria-live="polite"></div>
      </div>
    `),
    css: dedent(`
      .dd-field { display: grid; gap: 6px; }
      .dd-label { font-size: 14px; font-weight: 600; color: #111; }

      .dd-menu-wrap { position: relative; width: 240px; }

      .dd-trigger {
        width: 100%; display: flex; align-items: center; justify-content: space-between;
        gap: 8px; padding: 8px 10px; border: 1px solid #dcdfe4; border-radius: 8px;
        background: #fff; cursor: pointer; font-size: 14px; color: #111;
      }
      .dd-trigger:hover { background: #f9fafb; }

      .dd-list {
        position: absolute; top: calc(100% + 6px); left: 0; right: 0;
        border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;
        padding: 6px; margin: 0; list-style: none;
        box-shadow: 0 10px 20px rgba(0,0,0,.08);
        opacity: 0; visibility: hidden; transform: translateY(-2px);
        transition: opacity .12s ease, transform .12s ease;
        pointer-events: none; z-index: 1000; max-height: 220px; overflow: auto;
      }
      .dd-list.is-open { opacity: 1; visibility: visible; transform: translateY(0); pointer-events: auto; }

      .dd-menu-actions { display: flex; gap: 8px; padding: 6px; border-bottom: 1px dashed #e5e7eb; margin-bottom: 4px; }
      .dd-chip { border: 1px solid #d1d5db; background: #fff; border-radius: 999px; padding: 4px 10px; font-size: 12px; cursor: pointer; }

      .dd-item { width: 100%; text-align: left; padding: 8px 10px; border-radius: 6px; background: transparent; cursor: pointer; }
      .dd-item:hover { background: #f6f7f9; }
      .dd-item-check { display: flex; align-items: center; gap: 8px; }
      .dd-item-check input { width: 14px; height: 14px; pointer-events: none; }

      .dd-selected-list { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
      .dd-tag { font-size: 12px; background: #f3f4f6; border: 1px solid #e5e7eb; padding: 2px 8px; border-radius: 999px; }
    `),
    js: dedent(`
      (function () {
        const root = document.getElementById('multi-dd');
        if (!root) return;

        const trigger = root.querySelector('.dd-trigger') as HTMLButtonElement;
        const list = root.querySelector('.dd-list') as HTMLUListElement;
        const selectedWrap = root.querySelector('.dd-selected-list') as HTMLDivElement;

        function close() {
          list.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }
        function open() {
          list.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
        function syncTags() {
          const checked = Array.from(list.querySelectorAll('.dd-item-check input:checked')) as HTMLInputElement[];
          selectedWrap.innerHTML = '';
          if (checked.length === 0) {
            trigger.childNodes[0].nodeValue = 'Select options…';
            return;
          }
          trigger.childNodes[0].nodeValue = checked.length + ' selected';
          checked.forEach(cb => {
            const text = (cb.parentElement?.querySelector('span')?.textContent || '').trim();
            if (!text) return;
            const tag = document.createElement('span');
            tag.className = 'dd-tag';
            tag.textContent = text;
            selectedWrap.appendChild(tag);
          });
        }

        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = list.classList.contains('is-open');
          isOpen ? close() : open();
        });

        list.addEventListener('click', (e) => {
          const chip = (e.target as HTMLElement).closest('.dd-chip') as HTMLButtonElement | null;
          if (chip) {
            const action = chip.getAttribute('data-action');
            const boxes = Array.from(list.querySelectorAll('.dd-item-check input')) as HTMLInputElement[];
            if (action === 'all') boxes.forEach(b => b.checked = true);
            if (action === 'clear') boxes.forEach(b => b.checked = false);
            syncTags();
            return;
          }

          const item = (e.target as HTMLElement).closest('.dd-item-check') as HTMLButtonElement | null;
          if (item) {
            const box = item.querySelector('input') as HTMLInputElement;
            box.checked = !box.checked;
            syncTags();
          }
        });

        document.addEventListener('click', (e) => {
          if (!root.contains(e.target as Node)) close();
        });
      })();
    `),
  },
};

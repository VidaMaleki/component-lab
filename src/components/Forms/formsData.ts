import dedent from "dedent";

export type FormKey = "simple" | "inline" | "multi" | "google";

export type CodeBundle = {
    label: string;
    html: string;
    css: string;
    js?: string;
};

// --- Copyable HTML/CSS/JS for each form variant ---

const SIMPLE_HTML = dedent(`
    <form class="form">
        <label class="form-field">
        <span class="form-label">Full name</span>
        <input type="text" class="form-input" placeholder="Jane Doe" />
        </label>
        <label class="form-field">
        <span class="form-label">Email</span>
        <input type="email" class="form-input" placeholder="you@example.com" />
        </label>
        <button type="submit" class="btn-primary">Submit</button>
    </form>
`);

const INLINE_HTML = dedent(`
    <form class="form">
        <div class="row">
        <input class="form-input" placeholder="First name" />
        <input class="form-input" placeholder="Last name" />
        <select class="form-select">
            <option>Designer</option>
            <option>Developer</option>
        </select>
        </div>
        <button class="btn-primary">Invite</button>
    </form>
`);

const MULTI_HTML = dedent(`
    <!-- Multi-step shell. Manage "current step" with JS or your framework. -->
    <form class="form form-multistep">
        <div class="step is-active" data-step="1">
        <label class="form-field">
            <span class="form-label">Email</span>
            <input type="email" class="form-input" placeholder="you@example.com" />
        </label>
        <button type="button" class="btn-primary" data-next>Next</button>
        </div>

        <div class="step" data-step="2">
        <label class="form-field">
            <span class="form-label">Full name</span>
            <input class="form-input" placeholder="Jane Doe" />
        </label>
        <div class="row">
            <button type="button" class="btn-secondary" data-prev>Back</button>
            <button type="submit" class="btn-primary">Submit</button>
        </div>
        </div>
    </form>
`);

const MULTI_JS = dedent(`
    // Minimal vanilla JS stepper (optional)
    const form = document.querySelector('.form-multistep');
    if (form) {
    const steps = Array.from(form.querySelectorAll('.step'));
    let idx = 0;
    const show = (i) => {
        steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
    };
    form.addEventListener('click', (e) => {
        const el = e.target;
        if (!(el instanceof HTMLElement)) return;
        if (el.hasAttribute('data-next')) { idx = Math.min(idx + 1, steps.length - 1); show(idx); }
        if (el.hasAttribute('data-prev')) { idx = Math.max(idx - 1, 0); show(idx); }
    });
    }
`);

const GOOGLE_HTML = dedent(`
    <!-- Replace <FORM_ID> and entry names with your Google Form values -->
    <form
        class="gform"
        action="https://docs.google.com/forms/u/0/d/e/<FORM_ID>/formResponse"
        method="POST"
        target="_self"
    >
        <h3 class="gform-title">Have Some Questions?</h3>
        <p class="gform-subtitle">Feel free to reach out — I’d love to hear from you.</p>

        <label class="form-field">
        <span class="form-label">Email</span>
        <input type="email" name="emailAddress" required class="form-input" placeholder="you@example.com" />
        </label>

        <label class="form-field">
        <span class="form-label">Full name</span>
        <input type="text" name="entry.1770478706" required class="form-input" placeholder="Jane Doe" />
        </label>

        <label class="form-field">
        <span class="form-label">Message</span>
        <textarea name="entry.211621177" required rows="4" class="form-textarea" placeholder="How can I help?"></textarea>
        </label>

        <button type="submit" class="btn-primary">Send</button>
    </form>
`);

const CSS_BASE = dedent(`
    .form-field { display: grid; gap: 6px; }
    .form-label { font-size: 13px; color: #374151; }
    .form-input, .form-select, .form-textarea {
        width: 100%; padding: 8px 10px; border: 1px solid #dcdfe4; border-radius: 8px; background: #fff;
        font-size: 14px;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
        outline: none; border-color: #d4af37; box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.18);
    }
    .row { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; }
    .btn-primary { background: #344150; color: #fff; border: none; border-radius: 8px; padding: 8px 12px; }
    .btn-secondary { background: #f3f4f6; color: #111; border: 1px solid #e5e7eb; border-radius: 8px; padding: 8px 12px; }
    .btn-primary:hover, .btn-secondary:hover { filter: brightness(1.05); }
`);

const MULTI_CSS = dedent(`
    ${CSS_BASE}

    .form-multistep .step { display: none; }
    .form-multistep .step.is-active { display: grid; gap: 12px; }
`);

const GOOGLE_CSS = dedent(`
    ${CSS_BASE}

    .gform { max-width: 520px; padding: 24px; background: #fff; border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,.08); border: 1px solid #f0f0f0; }
    .gform-title { margin: 0 0 6px; font-size: 1.4rem; font-weight: 800; color: #111827; }
    .gform-subtitle { margin: 0 0 16px; color: #6b7280; }
`);

export const FORMS_CODE: Record<FormKey, CodeBundle> = {
    simple: { label: "Simple", html: SIMPLE_HTML, css: CSS_BASE },
    inline: { label: "Inline", html: INLINE_HTML, css: CSS_BASE },
    multi: {
        label: "Multi-step",
        html: MULTI_HTML,
        css: MULTI_CSS,
        js: MULTI_JS,
    },
    google: { label: "Google-style", html: GOOGLE_HTML, css: GOOGLE_CSS },
};

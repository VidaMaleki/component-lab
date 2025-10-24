import { useMemo, useState } from "react";
import "./formsStyles.css";
import CodeBlock from "../CodeBlock";
import { FORMS_CODE, type FormKey } from "./formsData";

import SimpleForm from "./SimpleForm";
import InlineForm from "./InlineForm";
import MultiStepsForm from "./MultiStepsForm";
import GoogleForm from "./GoogleForm";

type Variant = {
    key: FormKey;
    label: string;
    preview: React.ReactNode;
};

export default function FormsDemo() {
    const variants = useMemo<Variant[]>(() => [
        { key: "simple", label: "Simple", preview: <SimpleForm /> },
        { key: "inline", label: "Inline", preview: <InlineForm /> },
        { key: "multi", label: "Multi-step", preview: <MultiStepsForm /> },
        {
            key: "google",
            label: "Custom Google Form",
            preview: (
                <GoogleForm
                    formId="1FAIpQLSeSwogtUnE5yKHEEo52AC_VOnVQ25txYV_Lmw2NXvCsL4sB4g"
                    fields={{
                        email: "emailAddress",
                        name: "entry.1770478706",
                        message: "entry.211621177",
                    }}
                    title="Have Some Questions?"
                    subtitle="Example of embedding and styling a public Google Form to match your website design — using the formResponse endpoint for direct submissions."
                />
            ),
        },
    ], []);

    const [activeKey, setActiveKey] = useState<FormKey>(variants[0].key);
    const activeMeta = variants.find(v => v.key === activeKey)!;
    const code = FORMS_CODE[activeKey];

    return (
        <div className="form-demo">
            <div className="form-tabs" role="tablist" aria-label="Form variants">
                {variants.map(v => (
                    <button
                        key={v.key}
                        role="tab"
                        aria-selected={activeKey === v.key}
                        className={`form-tab ${activeKey === v.key ? "is-active" : ""}`}
                        onClick={() => setActiveKey(v.key)}
                    >
                        {v.label}
                    </button>
                ))}
            </div>

            <div className="form-preview" role="region" aria-live="polite">
                {activeMeta.preview}
            </div>

            <div style={{ display: "grid", gap: 12 }}>
                <CodeBlock title="HTML" code={code.html} language="markup" />
                <CodeBlock title="CSS" code={code.css} language="css" />
                {code.js?.trim() && <CodeBlock title="JS (optional)" code={code.js} language="javascript" />}
            </div>
        </div>
    );
}

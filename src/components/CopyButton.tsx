// src/components/CopyButton.tsx
import { useState } from "react";

export default function CopyButton({ code }: { code: string }) {
    const [ok, setOk] = useState(false);
    return (
        <>
            <button
                onClick={async () => {
                    await navigator.clipboard.writeText(code);
                    setOk(true);
                    setTimeout(() => setOk(false), 1500);
                }}
                style={{
                    padding: "6px 10px",
                    borderRadius: 6,
                    border: "1px solid #ddd",
                    background: "#fff",
                    cursor: "pointer",
                }}
            >
                {ok ? "✅ Copied!" : "Copy Code"}
            </button>
        </>
    );
}

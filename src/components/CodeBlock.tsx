import React from "react";
import CopyButton from "./CopyButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  title?: string;
  code: string;
  language?: string;
}

export default function CodeBlock({ title, code, language = "html" }: CodeBlockProps) {
  return (
    <div style={{ marginTop: 16 }}>
      {title && (
        <div
          style={{
            fontWeight: 600,
            marginBottom: 6,
            fontSize: "0.95rem",
            color: "#344150",
          }}
        >
          {title}
        </div>
      )}

      <div style={{ position: "relative" }}>
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          customStyle={{
            borderRadius: 6,
            padding: "12px 16px",
            fontSize: 13,
            background: "#fafafa",
            margin: 0,
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>

        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 8,
            transform: "translateY(-50%)",
          }}
        >
          <CopyButton code={code} />
        </div>
      </div>
    </div>
  );
}

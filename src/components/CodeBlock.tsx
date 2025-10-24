import CopyButton from "./CopyButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./codeBlock.css";

interface CodeBlockProps {
    title?: string;
    code: string;
    language?: string;
}

export default function CodeBlock({ title, code, language = "html" }: CodeBlockProps) {
    return (
        <div style={{ marginTop: 16, width: "100%", overflowX: "scroll" }}>
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
            <div
                style={{
                    maxWidth: "100%",
                    overflowX: "auto",
                    borderRadius: 6,
                    background: "#fafafa",
                    border: "1px solid #eee",
                }}
            >
                <SyntaxHighlighter
                    language={language}
                    style={oneLight}
                    customStyle={{
                        borderRadius: 6,
                        padding: "12px 16px",
                        overflowX: "auto",
                        fontSize: 13,
                        background: "#fafafa",
                        margin: 0,
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                    }}
                >
                    {code.trim()}
                </SyntaxHighlighter>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 6,
                }}
            >
                <CopyButton code={code} />
            </div>
        </div>
    );
}

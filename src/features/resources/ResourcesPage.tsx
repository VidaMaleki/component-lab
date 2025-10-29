// src/features/resources/ResourcesPage.tsx
import React, { useState } from "react";
import "./resourcesStyles.css";
import ResourcesSidebar from "./ResourcesSidebar";
import { topicsData } from "./resourcesData";
import CodeBlock from "../../components/CodeBlock";

export default function ResourcesPage() {
    const [activeKey, setActiveKey] = useState(topicsData[0].key);
    const active = topicsData.find((t) => t.key === activeKey)!;

    return (
        <div className="res-layout">
            <ResourcesSidebar
                topics={topicsData.map((t) => ({ key: t.key, title: t.title }))}
                activeKey={activeKey}
                onSelect={setActiveKey}
            />

            <main className="res-content">
                <h1>{active.title}</h1>
                <p className="res-summary">{active.summary}</p>

                <div className="res-snippets">
                    {active.snippets?.map((s, i) => (
                        <div key={i} className="res-snippet-card">
                            <div className="res-snippet-header">
                                <strong>{s.title}</strong>

                            </div>
                            <CodeBlock language={s.language || "bash"} code={s.code} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

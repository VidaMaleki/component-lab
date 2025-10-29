import React from "react";
import "./resourcesStyles.css";

interface SidebarProps {
    topics: { key: string; title: string }[];
    activeKey: string;
    onSelect: (key: string) => void;
}

export default function ResourcesSidebar({ topics, activeKey, onSelect }: SidebarProps) {
    return (
        <aside className="res-sidebar">
            <div className="res-sidebar-header">
                <span className="res-logo-dark">Vida</span>{" "}
                <span className="res-logo-gold">Resources</span>
            </div>
            <nav className="res-nav">
                {topics.map((t) => (
                    <button
                        key={t.key}
                        className={`res-nav-btn ${activeKey === t.key ? "active" : ""}`}
                        onClick={() => onSelect(t.key)}
                    >
                        {t.title}
                    </button>
                ))}
            </nav>
        </aside>
    );
}

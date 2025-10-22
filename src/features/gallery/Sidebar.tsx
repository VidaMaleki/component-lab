import { Link, useLocation } from "react-router-dom";
import { CATEGORIES } from "../../content/registry";

export default function Sidebar() {
    const { pathname } = useLocation();

    return (
        <aside
            style={{
                borderRight: "1px solid #e5e7eb",
                padding: "16px",
                width: "220px",
                flex: "0 0 220px", 
                minHeight: "calc(100vh - 64px)",
            }}
        >
            <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
                Categories
            </h2>
            <nav style={{ display: "grid", gap: 8 }}>
                {CATEGORIES.map((c) => {
                    const slug = c.toLowerCase().replace(/\s+/g, "-");
                    const active = pathname.endsWith(slug);
                    return (
                        <Link
                            key={c}
                            to={`/components/${slug}`}
                            style={{
                                textDecoration: "none",
                                color: active ? "#344150" : "#374151",
                                fontWeight: active ? 600 : 500,
                                background: active ? "#f8f5ec" : "transparent",
                                padding: "6px 10px",
                                borderRadius: 6,
                            }}
                        >
                            {c}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}

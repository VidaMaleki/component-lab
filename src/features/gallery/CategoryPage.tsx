import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CATEGORIES, componentsByCategory } from "../../content/registry";
import type { GalleryItem } from "../../content/registry";
import CodeBlock from "../../components/CodeBlock";


export default function CategoryPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const category = CATEGORIES.find(
        (c) => c.toLowerCase().replace(/\s+/g, "-") === slug
    );

    const items = useMemo<GalleryItem[]>(() => {
        if (!category) return [];
        return componentsByCategory(category);
    }, [category]);

    if (!category) {
        return (
            <div style={{ padding: 16 }}>
                <h2>Category not found</h2>
                <button onClick={() => navigate("/components")}>Back to all</button>
            </div>
        );
    }

    return (
        <div style={{ padding: 16 }}>
            <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 12 }}>
                {category}
            </h1>
            <p style={{ opacity: 0.7, marginBottom: 20 }}>
                Reusable {category.toLowerCase()} examples with live previews and copyable code snippets.
            </p>
            {items.length === 0 ? (
                <div style={{ opacity: 0.6 }}>No components found in this category.</div>
            ) : (
                <div style={{ display: "grid", gap: 20 }}>
                    {items.map((it) => (
                        <article
                            key={it.id}
                            style={{
                                border: "1px solid #e5e7eb",
                                borderRadius: 12,
                                padding: 16,
                                background: "#fff",
                            }}
                        >
                            <header
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <h3 style={{ fontWeight: 600 }}>{it.title}</h3>
                                <small style={{ opacity: 0.6 }}>{it.category}</small>
                            </header>
                            <p style={{ marginTop: 8, opacity: 0.8 }}>{it.description}</p>
                            {/* Preview area */}
                            <div style={{ marginTop: 10, marginBottom: 10 }}>{it.preview}</div>
                            {/* Only show HTML/CSS/code if demo isn’t self-managed */}
                            {!it.selfManagedCode && (
                                <>
                                    {it.html && <CodeBlock title="HTML" code={it.html} />}
                                    {it.css && <CodeBlock title="CSS" code={it.css} />}
                                    {!it.html && !it.css && it.code && (
                                        <CodeBlock title="Code" code={it.code} />
                                    )}
                                </>
                            )}
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}

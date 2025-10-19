export default function IntroSection() {
    return (
        <section style={{ lineHeight: 1.6 }}>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: 12 }}>
                What Are Components?
            </h1>
            <p style={{ opacity: 0.85, marginBottom: 12 }}>
                Components are the reusable building blocks of your UI. Each one
                encapsulates structure, style, and behavior — so instead of repeating
                code, you can assemble interfaces quickly and consistently.
            </p>
            <p style={{ opacity: 0.85 }}>
                In <strong>VidaLab</strong>, you’ll find a curated library of React
                components — from buttons and forms to carousels and layouts — all built
                for clarity, reusability, and accessibility.
            </p>
        </section>
    );
}

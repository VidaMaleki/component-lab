import { Link, useLocation } from "react-router-dom";
import s from "./Navbar.module.css";

export default function Navbar() {
    const { pathname } = useLocation();

    const links = [
        { to: "/", label: "Home" },
        { to: "/components", label: "Components" },
        { to: "/about", label: "About" },
    ];

    return (
        <header className={s.header}>
            <div className={s.wrap}>
                {/* Two-tone logo */}
                <Link to="/" className={s.logo}>
                    <span className={s.logoVida}>Vida</span>
                    <span className={s.logoLab}>Lab</span>
                </Link>

                {/* Nav */}
                <nav className={s.nav} aria-label="Primary">
                    {links.map(({ to, label }) => {
                        const active = pathname === to;
                        return (
                            <Link
                                key={to}
                                to={to}
                                className={`${s.link} ${active ? s.linkActive : ""}`}
                                aria-current={active ? "page" : undefined}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}

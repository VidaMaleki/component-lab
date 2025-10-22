import React, { useEffect, useRef, useState } from "react";
import "./dropdownStyles.css";

export interface SplitAction { label: string; onClick: () => void; }

interface SplitDropdownProps {
    label?: string;
    primaryLabel: string;
    onPrimary: () => void;
    menuActions: SplitAction[];
}

const SplitDropdown: React.FC<SplitDropdownProps> = ({
    label, primaryLabel, onPrimary, menuActions,
}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
        <div className="dd-field" ref={ref}>
            {label && <label className="dd-label">{label}</label>}
            <div className="dd-split">
                <button className="dd-split-main" onClick={onPrimary} type="button">
                    {primaryLabel}
                </button>
                <button
                    className="dd-split-caret"
                    aria-haspopup="menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    type="button"
                >
                    ▾
                </button>
                <div className={`dd-split-menu ${open ? "is-open" : ""}`} role="menu">
                    {menuActions.map((act) => (
                        <button
                            role="menuitem"
                            key={act.label}
                            className="dd-item"
                            onClick={() => { act.onClick(); setOpen(false); }}
                            type="button"
                        >
                            {act.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SplitDropdown;

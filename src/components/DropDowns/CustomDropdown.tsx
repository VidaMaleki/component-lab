import React, { useEffect, useRef, useState } from "react";
import "./dropdownStyles.css";

interface CustomDropdownProps {
    options: string[];
    label?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, label }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(options[0] ?? "");
    const wrapRef = useRef<HTMLDivElement | null>(null);

    // close on outside click
    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    return (
        <div className="dd-field" ref={wrapRef}>
            {label && <label className="dd-label">{label}</label>}
            <div className="dd-menu-wrap">
                <button
                    type="button"
                    className="dd-trigger"
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {selected}
                    <span className="dd-caret">▾</span>
                </button>
                <ul className={`dd-list ${open ? "is-open" : ""}`} role="listbox">
                    {options.map((opt) => (
                        <li key={opt}>
                            <button
                                type="button"
                                className="dd-item"
                                role="option"
                                aria-selected={selected === opt}
                                onClick={() => {
                                    setSelected(opt);
                                    setOpen(false);
                                }}
                            >
                                {opt}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CustomDropdown;
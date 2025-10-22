import React, { useEffect, useRef, useState } from "react";
import "./dropdownStyles.css";

interface MultiDropdownProps {
    options: string[];
    label?: string;
    placeholder?: string;
    onChange?: (selected: string[]) => void;
}

const MultiDropdown: React.FC<MultiDropdownProps> = ({
    options,
    label,
    placeholder = "Select options…",
    onChange,
}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const wrapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    useEffect(() => { onChange?.(selected); }, [selected, onChange]);

    const toggle = (opt: string) =>
        setSelected((prev) => (prev.includes(opt) ? prev.filter((v) => v !== opt) : [...prev, opt]));

    const selectAll = () => setSelected([...options]);
    const clearAll = () => setSelected([]);

    const labelText = selected.length > 0 ? `${selected.length} selected` : placeholder;

    return (
        <div className="dd-field" ref={wrapRef}>
            {label && <label className="dd-label">{label}</label>}
            <div className="dd-menu-wrap">
                <button
                    className="dd-trigger"
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    type="button"
                >
                    {labelText}
                    <span className="dd-caret">▾</span>
                </button>
                <ul className={`dd-list ${open ? "is-open" : ""}`} role="listbox" aria-multiselectable="true">
                    <li className="dd-menu-actions" aria-hidden="true">
                        <button className="dd-chip" onClick={selectAll} type="button">Select all</button>
                        <button className="dd-chip" onClick={clearAll} type="button">Clear</button>
                    </li>
                    {options.map((opt) => {
                        const checked = selected.includes(opt);
                        return (
                            <li key={opt}>
                                <button
                                    type="button"
                                    className="dd-item dd-item-check"
                                    role="option"
                                    aria-selected={checked}
                                    onClick={() => toggle(opt)}
                                >
                                    <input type="checkbox" readOnly checked={checked} aria-label={opt} />
                                    <span>{opt}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {selected.length > 0 && (
                <div className="dd-selected-list">
                    {selected.map((s) => (
                        <span className="dd-tag" key={s}>{s}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiDropdown;
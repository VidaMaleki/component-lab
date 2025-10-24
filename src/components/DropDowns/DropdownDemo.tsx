import { useState, lazy, Suspense } from "react";
import "./dropdownStyles.css";
import CodeBlock from "../CodeBlock";
import { DROPDOWN_CODE } from "./dropdownData";

// Lazy-load the component files for better initial load performance
const NativeDropdown = lazy(() => import("./NativeDropdown"));
const CustomDropdown = lazy(() => import("./CustomDropdown"));
const SplitDropdown = lazy(() => import("./SplitDropdown"));
const MultiDropdown = lazy(() => import("./MultiDropdown"));

type TabKey = "native" | "custom" | "split" | "multi";

const TABS: { key: TabKey; label: string }[] = [
    { key: "native", label: "Native" },
    { key: "custom", label: "Custom" },
    { key: "split", label: "Split" },
    { key: "multi", label: "Multi-select" },
];

export default function DropdownDemo() {
    const [active, setActive] = useState<TabKey>("native");

    return (
        <div className="dd-demo">
            {/* Tabs */}
            <div className="dd-tabs" role="tablist" aria-label="Dropdown variants">
                {TABS.map(({ key, label }) => {
                    const isActive = active === key;
                    return (
                        <button
                            key={key}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`panel-${key}`}
                            id={`tab-${key}`}
                            className={`dd-tab ${isActive ? "is-active" : ""}`}
                            onClick={() => setActive(key)}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
            {/* Preview area */}
            <div className="dd-preview" role="region" aria-live="polite">
                <Suspense fallback={<div>Loading dropdown…</div>}>
                    {active === "native" && (
                        <section id="panel-native" role="tabpanel" aria-labelledby="tab-native">
                            <NativeDropdown label="Choose a fruit" options={["Apple", "Banana", "Cherry"]} />
                        </section>
                    )}
                    {active === "custom" && (
                        <section id="panel-custom" role="tabpanel" aria-labelledby="tab-custom">
                            <CustomDropdown label="Select country" options={["USA", "Canada", "Germany", "Japan"]} />
                        </section>
                    )}
                    {active === "split" && (
                        <section id="panel-split" role="tabpanel" aria-labelledby="tab-split">
                            <SplitDropdown
                                label="Actions"
                                primaryLabel="Run"
                                onPrimary={() => alert("Primary action")}
                                menuActions={[
                                    { label: "Run full", onClick: () => alert("Run full") },
                                    { label: "Run selection", onClick: () => alert("Run selection") },
                                    { label: "Schedule", onClick: () => alert("Schedule") },
                                ]}
                            />
                        </section>
                    )}
                    {active === "multi" && (
                        <section id="panel-multi" role="tabpanel" aria-labelledby="tab-multi">
                            <MultiDropdown
                                label="Pick your favorite tech"
                                options={["React", "TypeScript", "Vite", "Tailwind"]}
                                onChange={(sel) => console.log("Selected:", sel)}
                            />
                        </section>
                    )}
                </Suspense>
            </div>
            {/* Code panes */}
            <div className="dd-code">
                <CodeBlock title="HTML" code={DROPDOWN_CODE[active].html} language="markup" />
                <CodeBlock title="CSS" code={DROPDOWN_CODE[active].css} language="css" />
                {/* Only show JS pane when it's non-empty / meaningful */}
                {DROPDOWN_CODE[active].js?.trim() && (
                    <CodeBlock title="JS (optional)" code={DROPDOWN_CODE[active].js} language="javascript" />
                )}
            </div>
        </div>
    );
}

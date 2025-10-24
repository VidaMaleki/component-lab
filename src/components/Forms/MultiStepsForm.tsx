import { useState } from "react";
import "./formsStyles.css";

export default function MultiStepsForm() {
    const [step, setStep] = useState(1);
    return (
        <form className="form-preview" onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginBottom: 12, opacity: .75 }}>Step {step} of 3</div>

            {step === 1 && (
                <>
                    <div className="form-field">
                        <label className="form-label">Project name</label>
                        <input className="form-input" placeholder="My awesome app" />
                    </div>
                    <div className="form-actions">
                        <button className="btn-primary" type="button" onClick={() => setStep(2)}>Next</button>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="form-field">
                        <label className="form-label">Team size</label>
                        <select className="form-select" defaultValue="">
                            <option value="" disabled>Select…</option>
                            <option>1-3</option><option>4-10</option><option>10+</option>
                        </select>
                    </div>
                    <div className="form-actions">
                        <button className="btn-ghost" type="button" onClick={() => setStep(1)}>Back</button>
                        <button className="btn-primary" type="button" onClick={() => setStep(3)}>Next</button>
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                    <div className="form-field">
                        <label className="form-label">Notes</label>
                        <textarea className="form-textarea" rows={3} placeholder="Anything else?" />
                    </div>
                    <div className="form-actions">
                        <button className="btn-ghost" type="button" onClick={() => setStep(2)}>Back</button>
                        <button className="btn-primary" type="submit">Create</button>
                    </div>
                </>
            )}
        </form>
    );
}

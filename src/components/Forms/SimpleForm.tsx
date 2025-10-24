import "./formsStyles.css";

export default function SimpleForm() {
    return (
        <form className="form-preview" onSubmit={(e) => e.preventDefault()}>
            <div className="form-field">
                <label className="form-label">Full name</label>
                <input className="form-input" placeholder="John Doe" />
            </div>
            <div className="form-field">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="you@example.com" />
            </div>
            <div className="form-actions">
                <button className="btn-primary" type="submit">Submit</button>
                <button className="btn-ghost" type="button">Cancel</button>
            </div>
        </form>
    );
}

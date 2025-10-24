import "./formsStyles.css";

export default function InlineForm() {
    return (
        <form className="form-preview" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
                <input className="form-input" placeholder="First name" />
                <input className="form-input" placeholder="Last name" />
                <select className="form-select" defaultValue="">
                    <option value="" disabled>Role</option>
                    <option>Designer</option><option>Developer</option><option>PM</option>
                </select>
            </div>
            <div className="form-actions" style={{ marginTop: 10 }}>
                <button className="btn-primary" type="submit">Invite</button>
            </div>
        </form>
    );
}

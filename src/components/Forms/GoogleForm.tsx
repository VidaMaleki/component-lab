import { useState } from "react";
import type {FormEvent} from "react";

/**
 * Props:
 * - formId: the long Google Form ID from its URL
 * - fields: a map of your input names to Google Form entry names
 *   e.g. { email: "emailAddress", name: "entry.123...", message: "entry.456..." }
 * - title / subtitle: optional heading text for the card
 */
type GoogleFormProps = {
    formId: string;
    fields: {
        email?: string;
        name?: string;
        message?: string;
        [key: string]: string | undefined;
    };
    title?: string;
    subtitle?: string;
};

const GoogleForm: React.FC<GoogleFormProps> = ({
    formId,
    fields,
    title = "Contact",
    subtitle,
}) => {
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
        "idle"
    );

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const data = new FormData(form);

        // build x-www-form-urlencoded body with Google’s field names
        const body = new URLSearchParams();
        for (const [k, v] of data.entries()) {
            body.append(k, String(v));
        }

        try {
            // IMPORTANT: use "formResponse" endpoint + no-cors
            await fetch(
                `https://docs.google.com/forms/u/0/d/e/${formId}/formResponse`,
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: body.toString(),
                }
            );

            setStatus("ok");
            form.reset();
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="gform">
            <h3 className="gform-title">{title}</h3>
            {subtitle && <p className="gform-subtitle">{subtitle}</p>}

            <form onSubmit={handleSubmit} className="gform-body">
                {/* Email */}
                {fields.email && (
                    <label className="form-field">
                        <span className="form-label">Email</span>
                        <input
                            type="email"
                            name={fields.email}
                            required
                            className="form-input"
                            placeholder="you@example.com"
                        />
                    </label>
                )}

                {/* Name */}
                {fields.name && (
                    <label className="form-field">
                        <span className="form-label">Full name</span>
                        <input
                            type="text"
                            name={fields.name}
                            required
                            className="form-input"
                            placeholder="Jane Doe"
                        />
                    </label>
                )}

                {/* Message */}
                {fields.message && (
                    <label className="form-field">
                        <span className="form-label">Message</span>
                        <textarea
                            name={fields.message}
                            required
                            rows={4}
                            className="form-textarea"
                            placeholder="How can I help?"
                        />
                    </label>
                )}

                <button type="submit" className="btn-primary" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send"}
                </button>

                {status === "ok" && (
                    <div className="gform-toast gform-toast--ok">Thanks! Sent 🎉</div>
                )}
                {status === "error" && (
                    <div className="gform-toast gform-toast--error">
                        Oops, something went wrong. Try again.
                    </div>
                )}
            </form>
        </section>
    );
};

export default GoogleForm;

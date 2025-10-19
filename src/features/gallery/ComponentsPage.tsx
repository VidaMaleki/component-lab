import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function ComponentsPage() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <main style={{ flex: 1, padding: "24px" }}>
                {/* If no category is selected, show intro */}
                <Outlet />
            </main>
        </div>
    );
}

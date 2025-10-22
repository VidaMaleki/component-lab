import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function ComponentsPage() {
    return (
        <div style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
        }}>
            <Sidebar />
            <main style={{
                flex: "1 1 auto",
                minWidth: 0,
                padding: "24px",
                boxSizing: "border-box",
                overflowX: "auto"
            }}>
                {/* If no category is selected, show intro */}
                <Outlet />
            </main>
        </div>
    );
}

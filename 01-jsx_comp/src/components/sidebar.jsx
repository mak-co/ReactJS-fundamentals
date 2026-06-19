import '../style/sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>

      <ul>
        <li>🏠 Home</li>
        <li>📊 Analytics</li>
        <li>📦 Products</li>
        <li>👥 Users</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside>
  );
}

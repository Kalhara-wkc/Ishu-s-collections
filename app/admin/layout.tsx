import Sidebar from "./components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Navbar for Admin */}
        <header className="h-20 bg-surface border-b border-text-primary/20 flex items-center justify-between px-8 sticky top-0 z-30">
          <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-text-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              AD
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-800">Admin User</p>
              <p className="text-gray-500 text-xs">admin@ishus.com</p>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

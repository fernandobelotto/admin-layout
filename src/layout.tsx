import { Home, Users, Settings, Bell, Search, Menu } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-4">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xl font-bold">Admin Panel</span>
        </div>

        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700"
          >
            <Users className="h-5 w-5" />
            Users
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700"
          >
            <Settings className="h-5 w-5" />
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        {/* Header */}
        <div className="h-16 bg-white border-b flex items-center justify-between px-6 fixed top-0 right-0 left-64">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="pt-16 p-6 overflow-auto">
          {/* Content goes here */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-600">Welcome to your admin dashboard!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

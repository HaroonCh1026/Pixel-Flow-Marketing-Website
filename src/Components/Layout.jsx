import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Layout({ children }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const menuItems = [
    { id: 1, title: "Home", path: "/", icon: "ri-home-6-line" },
    { id: 2, title: "About", path: "/about", icon: "ri-information-2-line" },
    { id: 3, title: "Clients", path: "/clients", icon: "ri-user-2-fill" },
    { id: 4, title: "Contacts", path: "/contacts", icon: "ri-message-3-fill" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      // Close sidebar when switching to desktop
      if (!mobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen relative">
      {/* Mobile Sidebar Toggle - Only shown on mobile */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-[#205375] transition-all ${
                  sidebarOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#205375] transition-all ${
                  sidebarOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#205375] transition-all ${
                  sidebarOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      )}

      {/* Mobile Sidebar - Only shown on mobile */}
      {isMobile && (
        <>
          {/* Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
              onClick={toggleSidebar}
            />
          )}

          {/* Sidebar Content */}
          <aside
            className={`fixed left-0 top-0 z-40 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
              </div>
              <nav className="flex-1 overflow-y-auto p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg mb-2 transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-white hover:bg-primary-dark" // Added hover effect for active item
                        : "text-gray-700 hover:bg-secondary hover:bg-opacity-20" // Added secondary color hover effect
                    }`}
                  >
                    <i className={`${item.icon} mr-3 text-lg`} />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={toggleSidebar}
                  className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
                >
                  Close Menu
                </button>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main
        className={`flex-grow bg-gray-50 p-6 pb-32 ${
          isMobile && sidebarOpen ? "ml-64" : ""
        }`}
      >
        {children}
      </main>

      {/* Desktop Footer Navigation - Only shown on desktop */}
      {!isMobile && (
        <div className="fixed bottom-3 left-0 right-0 z-50 sm:bottom-0">
          <div className="flex w-full justify-center">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col justify-end items-center"
              >
                {location.pathname === item.path && (
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-10 bg-primary rounded-t-full"></div>
                    <div className="h-5 w-20 bg-primary rounded-t-full text-center">
                      <i className={`${item.icon} text-xl text-white`}></i>
                    </div>
                  </div>
                )}

                <div
                  key={index}
                  className={`px-20 py-5 bg-primary ${
                    index === 0 && "rounded-l"
                  } ${
                    index === menuItems.length - 1 && "rounded-r"
                  } flex items-center justify-center space-x-2`}
                >
                  {location.pathname !== item.path && (
                    <i className={`${item.icon} text-white text-xl`}></i>
                  )}
                  <Link to={`${item.path}`} className="text-secondary text-xl sm:hidden">
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
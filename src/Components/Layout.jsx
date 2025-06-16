import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  const menuItems = [
    { id: 1, title: "Home", path: "/", icon: "ri-home-6-line" },
    { id: 2, title: "About", path: "/about", icon: "ri-information-2-line" },
    { id: 3, title: "Clients", path: "/clients", icon: "ri-user-2-fill" },
    { id: 4, title: "Contacts", path: "/contacts", icon: "ri-message-3-fill" },
  ];

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="flex-grow bg-gray-50 p-6 pb-32">
        {children}
      </main>

      {/* footer */}
      <div className="fixed bottom-3 left-0 right-0 z-50">
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
                <Link to={`${item.path}`} className="text-secondary text-xl">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
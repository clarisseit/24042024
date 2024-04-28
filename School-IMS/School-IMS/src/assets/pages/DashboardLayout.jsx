// src/DashboardLayout.js

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 px-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="flex-grow bg-gray-100 p-8">{children}</main>
      <footer className="bg-gray-800 text-white py-4 px-8">
        <p className="text-center">&copy; 2024 Dashboard App</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;

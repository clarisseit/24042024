// src/Navigation.js

const Navigation = ({ setPage }) => {
  return (
    <nav className="bg-gray-700 text-white py-2 px-8">
      <ul className="flex">
        <li className="mr-6">
          <button className="hover:underline" onClick={() => setPage("home")}>
            Home
          </button>
        </li>
        <li className="mr-6">
          <button
            className="hover:underline"
            onClick={() => setPage("analytics")}
          >
            Analytics
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => setPage("settings")}
          >
            Settings
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

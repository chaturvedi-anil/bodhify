const DashboardNavbar = () => {
  const username = "Anil"; // replace with user data from API/store

  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-full h-18 bg-white border-b px-6 flex items-center justify-between shadow-sm">
      {/* Left */}
      <div>
        <h2 className="text-xl font-semibold font-mono text-(--bodhify-navy)">
          Welcome back, {username} 👋
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <p className="text-sm text-gray-700 font-mono mt-1">{currentDate}</p>
        <div
          className="w-10 h-10 rounded-full flex items-center font-mono justify-center text-white font-semibold"
          style={{
            backgroundColor: "var(--bodhify-light-navy)",
          }}
        >
          {username.charAt(0).toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;

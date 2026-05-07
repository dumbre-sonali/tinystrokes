import { useEffect, useState } from "react";
import { User, Mail } from "lucide-react";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f9e5ea] to-white p-8">
{
  /* {data ? (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  ) : (
    <p>Loading...</p>
  )} */
}
      {data ? (
        <div className="max-w-5xl mx-auto">

          {/* Top Welcome Section */}
          <div className="bg-[#770844] rounded-3xl p-10 text-white shadow-lg">

            <p className="text-lg opacity-80">
              Welcome Back <span className="text-5xl font-bold mt-2">
              {data.user.name}
            </span>👋
            </p>


            <p className="mt-4 text-lg opacity-90">
              Manage your profile and account details here.
            </p>

          </div>

          {/* Profile Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">

              <div className="flex items-center gap-4">

                <div className="bg-[#f9e5ea] p-4 rounded-full">
                  <Mail className="text-[#770844]" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email Address
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {data.user.email}
                  </h3>
                </div>

              </div>
            </div>

            {/* User Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">

              <div className="flex items-center gap-4">

                <div className="bg-[#f9e5ea] p-4 rounded-full">
                  <User className="text-[#770844]" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    User Name
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {data.user.name}
                  </h3>
                </div>

              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-2xl font-semibold text-[#770844]">
            Loading...
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
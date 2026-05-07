import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

function Login() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9e5ea] px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#770844] mb-8">
          Welcome Back
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="
                w-full
                border-b-2
                border-[#770844]
                py-2
                outline-none
                placeholder:text-gray-400
                bg-transparent
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="
                w-full
                border-b-2
                border-[#770844]
                py-2
                outline-none
                placeholder:text-gray-400
                bg-transparent
              "
            />
          </div>

          {/* Button */}
          <div className="pt-4 flex justify-center">
            <PrimaryButton type="submit" text="Login" />
          </div>
          <div className="text-center mt-6">
              <p className="text-gray-600">
                  Don’t have an account?{" "}
                <span className="text-[#770844] font-semibold cursor-pointer hover:underline">
                  <a href="/register">Register</a>
                </span>
              </p>
            </div>
        </form>

      </div>
    </div>
  );
}

export default Login;
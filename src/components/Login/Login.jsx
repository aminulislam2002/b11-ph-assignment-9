import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider.jsx";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 py-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#72B261] mb-6">Login Your Account</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              className="mt-1 w-full input input-bordered bg-gray-100 text-gray-700"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              placeholder="********"
              className="mt-1 w-full input input-bordered bg-gray-100 text-gray-700"
              required
            />
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}

          <div className="block text-sm font-medium text-gray-700">
            <Link to="/forgot">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#72B261] hover:bg-[#5c984e] text-white font-semibold transition duration-200"
          >
            Login
          </button>

          <p className="text-center text-sm pt-4 text-gray-600">
            Don’t Have An Account ?{" "}
            <Link to="/register" className="text-[#72B261] font-medium hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

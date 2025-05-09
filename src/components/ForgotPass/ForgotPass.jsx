import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider.jsx";

const ForgotPass = () => {
  const [error, setError] = useState("");
  const { forgotPass } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    forgotPass(email)
      .then(() => {
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 py-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#72B261] mb-6">Forgot Your password</h2>
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

          {error && <p className="text-red-400 text-xs">{error}</p>}

          <div className="block text-sm font-medium text-gray-700">
            <Link to="/login">Login?</Link>
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#72B261] hover:bg-[#5c984e] text-white font-semibold transition duration-200"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;

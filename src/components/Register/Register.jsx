import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider.jsx";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Name validation
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    // Password validation
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    if (password.length < 6 || !uppercasePattern.test(password) || !lowercasePattern.test(password)) {
      setPasswordError("Password must be at least 6 characters long and include both uppercase and lowercase letters.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 py-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#72B261] mb-6">Create Your Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="mt-1 w-full input input-bordered bg-gray-100 text-gray-700"
              required
            />
            {nameError && <p className="text-xs text-red-600 mt-1">{nameError}</p>}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              name="photo"
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="mt-1 w-full input input-bordered bg-gray-100 text-gray-700"
              required
            />
          </div>

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
            {passwordError && <p className="text-xs text-red-600 mt-1">{passwordError}</p>}
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#72B261] hover:bg-[#5c984e] text-white font-semibold transition duration-200"
          >
            Register
          </button>

          <p className="text-center text-sm pt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#72B261] font-medium hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

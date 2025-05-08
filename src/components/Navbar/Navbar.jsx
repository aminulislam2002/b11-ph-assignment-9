import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      <div className="navbar w-full max-w-[1280px] mx-auto">
        <div className="navbar-start">
          <a className="text-xl font-extrabold text-black">Job Hunter</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black text-base font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex justify-end items-center gap-3.5">
          <Link to="/register" className="text-base font-medium text-black">
            Register
          </Link>
          <Link to="/login" className="text-base font-medium text-black">
            Login
          </Link>
          <button className="text-base font-medium text-black">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

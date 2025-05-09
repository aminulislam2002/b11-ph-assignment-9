import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          {user ? (
            <Link to="/my-profile">
              <img className="w-12 rounded-full" src={user?.photoURL} alt={user?.displayName} />
            </Link>
          ) : (
            <img
              className="w-12 rounded-full"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              alt="User Profile"
            />
          )}

          {user ? (
            <button onClick={handleLogOut} className="text-base font-medium text-black">
              Logout
            </button>
          ) : (
            <>
              <Link to="/register" className="text-base font-medium text-black">
                Register
              </Link>
              <Link to="/login" className="text-base font-medium text-black">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

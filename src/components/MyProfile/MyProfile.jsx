import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyProfile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="w-full max-w-[1280px] mx-auto py-10">
      <div className="flex flex-col items-center text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/Y3d2k0X/default-user.png"}
          alt="User Profile"
          className="w-32 h-32 rounded-full shadow-md border-4 border-gray-300"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{user?.displayName || "No Name"}</h2>
        <p className="text-gray-600">{user?.email || "No Email"}</p>

        <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-4 rounded-xl">
            <h4 className="text-gray-500">Account Type</h4>
            <p className="text-lg font-medium text-gray-800">Regular User</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <h4 className="text-gray-500">Joined On</h4>
            <p className="text-lg font-medium text-gray-800">
              {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

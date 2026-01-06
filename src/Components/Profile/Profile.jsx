import { useContext } from "react";
import { AuthContext } from "../../provider/authContext";
import { Link } from "react-router";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-base-100 py-10">
      <title>Profile</title>
      <h2 className="text-4xl font-bold text-primary mb-8">My Profile</h2>

      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left side - form */}
        <div className="flex-1 space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              disabled
              value={user?.displayName || ""}
              name="name"
              className="input w-full input-bordered text-black bg-white"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              disabled
              value={user?.email || ""}
              name="email"
              className="input w-full input-bordered bg-white text-black"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || "Profile Picture"}
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          ) : (
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-semibold">
              No Photo
            </div>
          )}
        </div>
      </div>

      <Link
        to="/"
        className="btn btn-primary text-white mt-10 flex justify-center hover:btn-secondary"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Profile;

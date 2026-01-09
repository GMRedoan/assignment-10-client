import { use, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/authContext";

const AllUser = () => {
    const allUsers = useLoaderData()
    const [users, setUsers] = useState(allUsers)
    const { userInfo } = use(AuthContext)
    const [filterStatus, setFilterStatus] = useState("all")
    const [loadingUserId, setLoadingUserId] = useState(null);

    const filteredUsers =
        filterStatus === "all"
            ? users
            : users.filter((user) => user.status === filterStatus)

    const handleBlock = async (id) => {
        if (userInfo?.email === users.find(u => u._id === id)?.email) {
            return Swal.fire({
                title: "Blocking is not possible",
                text: "You cannot block your own account.",
                icon: "warning",
            });
        }

        if (users.find(u => u._id === id)?.role === 'admin') {
            return Swal.fire({
                title: "Blocking is not Allowed",
                text: "You cannot block another admin.",
                icon: "error",
                confirmButtonColor: "#F91617",
            });
        }

        setLoadingUserId(id);

        try {
            const res = await fetch(
                `https://rent-wheels-server-jet.vercel.app/users/${id}`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: 'blocked' }),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                setUsers(prev =>
                    prev.map(user =>
                        user._id === id ? { ...user, status: "blocked" } : user
                    )
                );

                Swal.fire({
                    title: "User Blocked Successfully!",
                    icon: "success",
                    confirmButtonColor: "#67AB4F",
                });
            }
        } finally {
            setLoadingUserId(null); 
        }
    };

    const handleUnblock = async (id) => {
        setLoadingUserId(id);

        try {
            const res = await fetch(
                `https://rent-wheels-server-jet.vercel.app/users/${id}`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: 'active' }),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                setUsers(prev =>
                    prev.map(user =>
                        user._id === id ? { ...user, status: "active" } : user
                    )
                );

                Swal.fire({
                    title: "User is Unblocked",
                    icon: "success",
                    confirmButtonColor: "#67AB4F",
                });
            }
        } finally {
            setLoadingUserId(null);
        }
    };


    return (
        <section className="md:px-30 p-4 pt-14 min-h-screen">
            <title>Users</title>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold pb-2">
                        Users <span className="text-primary">Overview</span>
                    </h2>
                    <p className="text-gray-600">A complete list of platform users with management controls.</p>
                </div>
                <select
                    className="select select-bordered w-44"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="blocked">Blocked</option>
                </select>
            </div>

            <div className="overflow-x-auto bg-base-100 rounded-xl shadow-lg">
                <table className="table w-full">
                    <thead className="bg-primary text-white ">
                        <tr>
                            <th>No</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={user._id} className="hover">
                                <td>{index + 1
                                }</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img
                                                    src={user?.photoURL || userInfo?.photoURL}
                                                    alt="avatar"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold">{user?.name}</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="text-sm text-accent">
                                    {user?.email}
                                </td>

                                <td>
                                    <span
                                        className={`badge capitalize font-semibold
                                               ${user?.role === "admin"
                                                ? "bg-primary text-white"
                                                : "bg-blue-500 text-white"
                                            }`}
                                    >
                                        {user?.role}
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={`badge font-semibold text-white
                                             ${user.status === "active"
                                                ? "badge-success"
                                                : "badge-error"
                                            }`}
                                    >
                                        {user?.status}
                                    </span>
                                </td>

                                <td className="text-center">
                                    {user.status === "active" ? (
                                        <button
                                            onClick={() => handleBlock(user._id)}
                                            disabled={loadingUserId === user._id}
                                            className="btn btn-sm bg-red-700 text-white"
                                        >
                                            {loadingUserId === user._id ? (
                                                <span className="loading loading-spinner loading-xs"></span>
                                            ) : (
                                                "Block User"
                                            )}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleUnblock(user._id)}
                                            disabled={loadingUserId === user._id}
                                            className="btn btn-sm bg-green-500 text-white"
                                        >
                                            {loadingUserId === user._id ? (
                                                <span className="loading loading-spinner loading-xs"></span>
                                            ) : (
                                                "Unblock User"
                                            )}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}

                        {filteredUsers.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center py-10 text-gray-400 text-xl">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUser;

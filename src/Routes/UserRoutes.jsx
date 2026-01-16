
import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../provider/authContext";
import Loading from "../Pages/Loading";

const UserRoutes = ({ children }) => {
    const { user, userInfo, loading } = use(AuthContext);

    if (loading) return <Loading />;

    if (user && userInfo?.role === "user") {
        return children;
    }

    return <Navigate to="/dashboard" replace />;
};

export default UserRoutes;

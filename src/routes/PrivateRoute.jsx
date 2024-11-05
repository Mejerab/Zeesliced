import { useContext } from "react";
import { AuthContext } from "../priovider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if (loading) {
        return <div className="flex min-h-screen items-center justify-center"><span className="loading loading-spinner text-neutral"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/'></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;
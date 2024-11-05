import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../priovider/AuthProvider";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className="w-full py-3 flex max-w-7xl mx-auto">
            <div className="w-fit mx-auto">
                <Link to='/' className="flex btn bg-transparent hover:bg-transparent border-0 hover:border-0 items-center gap-x-2">
                    <span className="text-2xl font-bold text-[#ec5252]"><span className="text-white"><span className="text-3xl -mr-2">Z</span> ee</span>Sliced</span>
                </Link>
            </div>
            {user && <div className="mr-2">
                <button onClick={()=>{logout();navigate('/')}} className="btn">Logout</button>
            </div>}
        </div>
    );
};

export default Navbar;
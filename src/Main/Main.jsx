import { Outlet } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";


const Main = () => {
    return (
        <div className="text-white bg-gradient-to-r from-[#F48264] to-[#FF7676] font">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
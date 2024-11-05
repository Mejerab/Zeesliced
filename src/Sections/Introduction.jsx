import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../priovider/AuthProvider";
import { MdOutlineModeEditOutline } from "react-icons/md";
import axios from "axios";
import AOS from "aos";
const Introduction = () => {
    const { user } = useContext(AuthContext);
    const [video, setVideo] = useState([]);
    useEffect(() => {
        axios.get(`https://first-project-server.vercel.app/my-video/67261c3e0614122768e97d10`)
            .then(data => setVideo(data.data))
    }, [])
    useEffect(() => {
        AOS.init({ delay: 500 })
    }, [])
    return (
        <div className="mt-16 lg:mt-5 mb-28 bg-[#EC5252] py-12">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-5xl uppercase font-semibold text-center">My Creative Cuts</h3>
                <div data-aos='zoom-in' className="w-fit mx-auto my-12 text-center ">
                    <div className="lg:w-[640px] lg:h-[360px] flex-container">
                        <div className="flex-container" dangerouslySetInnerHTML={{ __html: video.video }} />
                    </div>
                    {
                        user && <Link to={`/edit-my-video/67261c3e0614122768e97d10`} className="btn mt-12 bg-transparent"><MdOutlineModeEditOutline className="text-xl" />
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Introduction;
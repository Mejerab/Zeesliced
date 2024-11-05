import { useContext, useEffect, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AuthContext } from "../priovider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import AOS from "aos";
const Creators = () => {
    const [creators, setCreators] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        axios.get('https://first-project-server.vercel.app/creators')
            .then(data => setCreators(data.data))
    }, [])
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="mb-20 mt-32 py-12 bg-[#EC5252]">
            <div className="max-w-7xl mx-auto">
                <h3 data-aos='fade-down' className="text-5xl uppercase font-semibold text-center">Creators I&apos;ve worked with</h3>
                <div data-aos='fade-up' className="grid grid-cols-3 justify-between gap-y-16 mt-12">
                    {creators?.map((each, idx) =>
                        <div key={idx} className="flex flex-col items-center">
                            <Link>
                                <div className="w-fit flex flex-col items-center cont">
                                    <img className="lg:w-32 w-24 h-24 lg:h-32 rounded-full tra" src={each.image} alt="" />
                                    <h4 className="text-xl lg:text-2xl text-center tra font-semibold mt-2">{each.name}</h4>
                                    <p className="text-lg lg:text-xl text-center tra font-medium">{each.subscribers}</p>
                                    {
                                        user && <Link to={`edit-creators/${each._id}`} className="btn bg-transparent  "><MdOutlineModeEditOutline className="text-xl" />
                                        </Link>
                                    }
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Creators;
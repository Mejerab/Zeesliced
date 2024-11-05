import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditMyVideo = () => {
    const navigate = useNavigate();
    const [video, setVideo] = useState([])
    useEffect(()=>{
        axios.get('https://first-project-server.vercel.app/my-video/67261c3e0614122768e97d10')
        .then(data=>setVideo(data.data))
    }, [])
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const video = e.target.video.value;
        const res = await axios.patch('https://first-project-server.vercel.app/my-video/67261c3e0614122768e97d10', {video})
        if (res.data.modifiedCount) {
            navigate('/')
        }
    }
    return (
        <div className="min-h-screen flex flex-col justify-center px-4">
            <h3 className="text-5xl uppercase font-semibold text-center py-4">Edit my video</h3>
            <form onSubmit={handleSubmit} className="w-full lg:w-1/3 mx-auto border rounded-2xl border-[#333] p-12 mb-7  font-semibold">
                <div className="pb-2">
                <div className="py-2">
                    <p className="text-lg font-semibold">Embed code:</p>
                    <textarea rows={4} defaultValue={video.video} name="video" placeholder="Type embed code here" className="textarea bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                </div>
                <div className="py-2">
                    <button className="btn bg-transparenttext-white hover:text-[#D70040]">Edit Video</button>
                </div>
            </form>
        </div>
    );
};

export default EditMyVideo;
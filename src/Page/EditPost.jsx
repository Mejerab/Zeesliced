import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
    const navigate = useNavigate();
    const [videoData, setVideoData] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://first-project-server.vercel.app/posts/${id}`)
        .then(data=>setVideoData(data.data))
    }, [id])
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const title = e.target.title.value;
        const views = e.target.views.value;
        const video = e.target.video.value;
        const res = await axios.patch(`https://first-project-server.vercel.app/posts/${id}`, {title, views, video})
        if (res.data.modifiedCount>0) {
            navigate('/')
        }
    }
    return (
        <div>
                <h3 className="text-5xl uppercase font-semibold text-center py-4">Edit a video</h3>
            <form onSubmit={handleSubmit} className="w-full px-4 lg:w-2/3 mx-auto border rounded-2xl border-[#333] p-12 mb-7  font-semibold">
                <div className="pb-2">
                    <p className="text-lg font-semibold">Title:</p>
                    <input name="title" defaultValue={videoData.title} type="text" placeholder="Type title here" className="input bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold">Views:</p>
                    <input name="views" defaultValue={videoData.views} type="text" placeholder="Type views here" className="input bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold">Embed code:</p>
                    <textarea rows={4} defaultValue={videoData.video} name="video" placeholder="Type embed code here" className="textarea bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <button className="btn bg-transparenttext-white hover:text-[#D70040]">Edit Video</button>
                </div>
            </form>
        </div>
    );
};

export default EditPost;
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddVideo = () => {
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const title = e.target.title.value;
        const views = e.target.views.value;
        const video = e.target.video.value;
        const res = await axios.post('https://first-project-server.vercel.app/posts', {title, views, video});
        if (res.data.insertedId) {
            navigate('/')
        }
    }
    return (
        <div>
                <h3 className="text-5xl uppercase font-semibold text-center py-4">Add a video</h3>
            <form onSubmit={handleSubmit} className="w-2/3 mx-auto border rounded-2xl border-[#333] p-12 mb-7  font-semibold">
                <div className="pb-2">
                    <p className="text-lg font-semibold">Title:</p>
                    <input name="title" type="text" placeholder="Type title here" className="input bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold">Views:</p>
                    <input name="views" type="text" placeholder="Type views here" className="input bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold">Embed code:</p>
                    <textarea rows={4} name="video" placeholder="Type embed code here" className="textarea bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <button className="btn bg-transparent  ">Add Video</button>
                </div>
            </form>
        </div>
    );
};

export default AddVideo;
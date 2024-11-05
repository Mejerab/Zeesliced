import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCreators = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [creators, setCreators] = useState([]);
    useEffect(() => {
        axios.get(`https://first-project-server.vercel.app/creators/${id}`)
            .then(data => setCreators(data.data))
    }, [id])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const subscribers = e.target.subscribers.value;
        const image = e.target.image.value;
        const link = e.target.link.value;
        const res = await axios.patch(`https://first-project-server.vercel.app/creators/${id}`, { name, subscribers, image, link })
        if (res.data.modifiedCount) {
            navigate('/')
        }
    }
    return (
        <div>
            <h3 className="text-5xl uppercase font-semibold text-center my-5">Edit a content creator</h3>
            <form onSubmit={handleSubmit} className="w-full px-4 lg:w-2/3 mx-auto border rounded-2xl border-[#333] p-12 mb-7  font-semibold">
                <div className="pb-2">
                    <p className="text-lg font-semibold">Name:</p>
                    <input name="name" defaultValue={creators.name} type="text" placeholder="Type name here" className="input bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold">subscribers:</p>
                    <input name="subscribers" defaultValue={creators.subscribers} type="text" placeholder="Type subscribers here" className="input bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold">Image link:</p>
                    <input defaultValue={creators.image} name="image" placeholder="Type embed code here" className="input bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold">Button link:</p>
                    <input defaultValue={creators.link} name="link" placeholder="Type link here" className="input bg-transparent border-[#333333] input-bordered w-full" required />
                </div>
                <div className="py-2">
                    <button className="btn bg-transparent text-white ">Edit Info</button>
                </div>
            </form>
        </div>
    );
};

export default EditCreators;
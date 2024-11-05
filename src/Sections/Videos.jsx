import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../priovider/AuthProvider";
import { Link } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import AOS from "aos";
const Videos = () => {
    const { user } = useContext(AuthContext);
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        axios.get('https://first-project-server.vercel.app/posts')
            .then((data) => setDatas(data.data))
    }, [])
    const handleDelete = async(id) =>{
        
        const res = await axios.delete(`https://first-project-server.vercel.app/posts/${id}`)
        if (res.data.deletedCount>0) {
            const newData = datas.filter(data=>data._id !== id)
            setDatas(newData);
        }
    }
    useEffect(()=>{
        AOS.init()
    }, [])
    
    return (
        <div className="my-12 px-4 max-w-7xl mx-auto">
            { datas? 
                datas.map((data, idx) =>
                    <div className={`${(idx + 1) % 2 == 0 ? 'lg:flex-row-reverse flex-col' : 'lg:flex-row flex-col'} flex justify-between my-16 items-center`} key={data.id}>
                        <div data-aos={(idx + 1) % 2 == 0 ? 'fade-right' : 'fade-left'} className={`${(idx + 1) % 2 == 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                            <h4 className={`text-5xl ${(idx + 1) % 2 == 0 ?'lg:text-right text-center' : 'lg:text-left text-center'} font-semibold`}>{data.title}</h4>
                            <p className={`text-3xl ${(idx + 1) % 2 == 0 ?'lg:text-right text-center' : 'lg:text-left text-center'} font-medium`}>{data.views}</p>
                            {
                                user && <div className="mt-6 space-x-4">
                                    <Link to={`/edit-post/${data._id}`} className="btn bg-transparent  "><MdOutlineModeEditOutline className="text-xl" />
                                    </Link>
                                    <button onClick={()=>handleDelete(data._id)} className="btn bg-transparent  "><CiTrash className="text-lg" />
                                    </button>
                                </div>
                            }
                        </div>
                        <div data-aos={"fade-up"} className="flex-container" dangerouslySetInnerHTML={{ __html: data.video }} />
                    </div>
                ) : 
                <div className="flex min-h-screen items-center justify-center"><span className="loading loading-spinner text-neutral"></span></div>
            }
            {user && <div className="text-center my-3">
                <Link to='add-post' className="btn bg-transparent   px-7">Add video</Link>
            </div>}
        </div>
    );
};

export default Videos;
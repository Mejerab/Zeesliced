import { Link } from "react-router-dom";

const WorkWithMe = () => {
    return (
        <div id="work" className="flex items-center justify-between my-24 px-4 max-w-7xl mx-auto">
            <div className="w-1/2 lg:block hidden">
                <img className="w-[140%]" src="https://i.ibb.co.com/g31Wb3h/work3.png" alt="" />
            </div>
            <div className="lg:w-1/2 lg:text-left text-center">
                <h3 className="text-5xl uppercase font-semibold mb-6">Let me know if you wanna work with me!</h3>
                <Link to='https://x.com/zeesliced' className="btn btn-ani btn-lg hover:bg-transparent text-white overflow-hidden bg-transparent">Send me a DM</Link>
            </div>
        </div>
    );
};

export default WorkWithMe;
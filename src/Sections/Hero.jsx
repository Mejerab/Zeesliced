import AOS from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'; 

const Hero = () => {
    useEffect(()=>{
        AOS.init({})
    }, [])
    const handleClick = () => {
        document.getElementById('work').scrollIntoView({
            behavior: 'smooth',
        })
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex lg:flex-row flex-col-reverse justify-between items-center px-4">
                <div data-aos='fade-right' className="mt-12 lg:mt-0">
                    <h3 className="text-5xl uppercase font-semibold">Hello There !!</h3>
                    <p className="text-lg font-medium py-4">I am a professional video editor with experience of 3 years. Waiting to work with you.</p>
                    <button onClick={handleClick} className="btn btn-ani btn-lg hover:bg-transparent hover:text-[#D70040]text-white overflow-hidden bg-transparent">Work with me</button>
                </div>
                <div className="w-fit">
                    <img className="-mt-6" src="https://i.ibb.co.com/tqYhsWr/599-Converted.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
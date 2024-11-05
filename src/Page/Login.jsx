import { useContext } from "react";
import { AuthContext } from "../priovider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
        .then(()=>{
            console.log('All right')
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="min-h-screen grid items-center py-4">
            <div className="w-1/3 mx-auto rounded-2xl border border-[#333333] py-12">
                <form onSubmit={handleSubmit} className="w-2/3 mx-auto text-lg font-semibold grid gap-y-6">
                    <h3 className="text-center font-semibold text-5xl uppercase">Login</h3>
                    <div>
                        <p className="pb-1">Email:</p>
                        <input name="email" type="email" placeholder="Type here" className="input bg-transparent border-[#333333] input-bordered w-full" required/>
                    </div>
                    <div className="relative">
                        <p className="pb-1">Password:</p>
                        <input name="password" type="password" placeholder="Type here" className="input bg-transparent border-[#333333] input-bordered w-full" required/>
                    </div>
                    <div>
                        <button type="submit" className="btn w-full   bg-transparent">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;